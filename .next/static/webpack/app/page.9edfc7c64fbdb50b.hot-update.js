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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_PatentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PatentCard */ \"(app-pages-browser)/./components/PatentCard.tsx\");\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/download.js\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [uploadedFile, setUploadedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const data = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_5__.examples);\n    const handleUpload = (event)=>{\n        const file = event.target.files;\n        setUploadedFileName(file.name);\n        setUploadedFile(file[0]);\n    };\n    function dropHandler(ev) {\n        console.log(\"File(s) dropped\");\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n        if (ev.dataTransfer.items) {\n            // Use DataTransferItemList interface to access the file(s)\n            [\n                ...ev.dataTransfer.items\n            ].forEach((item, i)=>{\n                // If dropped items aren't files, reject them\n                if (item.kind === \"file\") {\n                    const file = item.getAsFile();\n                    console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                }\n            });\n        } else {\n            // Use DataTransfer interface to access the file(s)\n            [\n                ...ev.dataTransfer.files\n            ].forEach((file, i)=>{\n                console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                setUploadedFileName(file.name);\n                setUploadedFile(file);\n            });\n        }\n    }\n    function dragOverHandler(ev) {\n        console.log(\"File(s) in drop zone\");\n        ev.preventDefault();\n    }\n    async function storeNewPatent(url) {\n        const uploadedPatent = {\n            title: \"\",\n            tags: [],\n            status: \"\",\n            patentId: \"\",\n            url: url,\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        };\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_5__.storeFile)(uploadedPatent));\n    }\n    async function storePatent(info) {\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_5__.storeFile)(info));\n    }\n    function goToPatent(url) {\n        storeNewPatent(url).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function goToRecent(info) {\n        storePatent(info).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function analyzePatent() {\n        if (uploadedFile) {\n            const url = URL.createObjectURL(uploadedFile);\n            goToPatent(url);\n        }\n    }\n    function renderPatentCard(entry) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatentCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            info: entry,\n            onClick: ()=>goToRecent(entry)\n        }, void 0, false, {\n            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center pt-[24px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"w-3/4 mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-normal leading-9\",\n                    children: [\n                        \"Hi, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-custom-blue\",\n                            children: \"researcher 102-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 58\n                        }, this),\n                        \". Welcome back to your AI patent workspace.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm font-normal leading-6 pt-[6px]\",\n                    children: \"Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.\"\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                    children: \"Read a new patent\"\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-[230px] items-center justify-center shrink-0 rounded-lg border border-[#DAE5EA] bg-white\",\n                    style: {\n                        boxShadow: \"0px 1px 10px 0px rgba(0, 0, 0, 0.10)\"\n                    },\n                    id: \"drop_zone\",\n                    onDrop: dropHandler,\n                    onDragOver: dragOverHandler,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-custom-blue rounded-full p-1\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            size: 18,\n                                            color: \"#ffffff\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-normal whitespace-nowrap\",\n                                        children: \"Upload or drop a file\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col justify-center items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        className: \"pl-10\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"upload\",\n                                            className: \"text-sm cursor-pointer flex justify-center items-center\",\n                                            type: \"file\",\n                                            onChange: handleUpload,\n                                            value: uploadedFileName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>analyzePatent(),\n                                        children: \"Go\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                    children: \"Recent History\"\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center w-full space-x-4 pb-10\",\n                    children: data.map((patent)=>renderPatentCard(patent))\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Bjpy5Lhc3uYRyHS36DvUOD2fEC0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7O0tBTkxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFBhdGVudENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9QYXRlbnRDYXJkXCI7XG5pbXBvcnQgUGF0ZW50SW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudEluZm9cIjtcbmltcG9ydCBQYXRlbnRVcGxvYWQgZnJvbSBcIkAvY29tcG9uZW50cy9QYXRlbnRVcGxvYWRcIjtcbmltcG9ydCBQYXRlbnRVcGxvYWRMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvUGF0ZW50VXBsb2FkTG9hZGluZ1wiO1xuaW1wb3J0IHtEb3dubG9hZCwgTGluazJ9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vbGliL2hvb2tzJ1xuaW1wb3J0IHtcbiAgc3RvcmVGaWxlLCBleGFtcGxlc1xufSBmcm9tICcuLi9saWIvZmVhdHVyZXMvYW5hbHl6ZVNsaWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt1cGxvYWRlZEZpbGUsIHNldFVwbG9hZGVkRmlsZV0gPSB1c2VTdGF0ZTxGaWxlPigpO1xuICBjb25zdCBbdXBsb2FkZWRGaWxlTmFtZSwgc2V0VXBsb2FkZWRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VBcHBTZWxlY3RvcihleGFtcGxlcyk7XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gKGV2ZW50OiB7IHRhcmdldDogeyBmaWxlczogYW55OyB9OyB9KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBzZXRVcGxvYWRlZEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gICAgc2V0VXBsb2FkZWRGaWxlKGZpbGVbMF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZXY6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IGRhdGFUcmFuc2ZlcjogeyBpdGVtczogYW55OyBmaWxlczogYW55OyB9OyB9KSB7XG4gICAgY29uc29sZS5sb2coXCJGaWxlKHMpIGRyb3BwZWRcIik7XG4gIFxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIGlmIChldi5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcbiAgICAgIC8vIFVzZSBEYXRhVHJhbnNmZXJJdGVtTGlzdCBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLml0ZW1zXS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIC8vIElmIGRyb3BwZWQgaXRlbXMgYXJlbid0IGZpbGVzLCByZWplY3QgdGhlbVxuICAgICAgICBpZiAoaXRlbS5raW5kID09PSBcImZpbGVcIikge1xuICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGDigKYgZmlsZVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVyIGludGVyZmFjZSB0byBhY2Nlc3MgdGhlIGZpbGUocylcbiAgICAgIFsuLi5ldi5kYXRhVHJhbnNmZXIuZmlsZXNdLmZvckVhY2goKGZpbGUsIGkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYOKApiBmaWxlWyR7aX1dLm5hbWUgPSAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgICBzZXRVcGxvYWRlZEZpbGUoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZXY6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQ7IH0pIHtcbiAgICBjb25zb2xlLmxvZyhcIkZpbGUocykgaW4gZHJvcCB6b25lXCIpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdG9yZU5ld1BhdGVudCh1cmw6c3RyaW5nKSB7XG4gICAgY29uc3QgdXBsb2FkZWRQYXRlbnQgPSB7XG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgc3RhdHVzOiBcIlwiLFxuICAgICAgcGF0ZW50SWQ6IFwiXCIsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIHByb2JsZW06IFwiXCIsXG4gICAgICBwcm9ibGVtS2V5d29yZHM6IFtdLFxuICAgICAgc29sdXRpb246IFwiXCIsXG4gICAgICBzb2x1dGlvbktleXdvcmRzOiBbXSxcbiAgICAgIHN1bW1hcnk6IFwiXCIsXG4gICAgICBmdWxsdGV4dDogXCJcIixcbiAgICB9XG4gICAgZGlzcGF0Y2goc3RvcmVGaWxlKHVwbG9hZGVkUGF0ZW50KSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdG9yZVBhdGVudChpbmZvOlBhdGVudEluZm8pIHtcbiAgICBkaXNwYXRjaChzdG9yZUZpbGUoaW5mbykpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29Ub1BhdGVudCh1cmw6c3RyaW5nKSB7XG4gICAgc3RvcmVOZXdQYXRlbnQodXJsKS50aGVuKFxuICAgICAgZnVuY3Rpb24odmFsdWUpIHtyb3V0ZXIucHVzaCgnL3BhdGVudCcpO30sXG4gICAgICBmdW5jdGlvbihlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTt9XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gZ29Ub1JlY2VudChpbmZvOlBhdGVudEluZm8pIHtcbiAgICBzdG9yZVBhdGVudChpbmZvKS50aGVuKFxuICAgICAgZnVuY3Rpb24odmFsdWUpIHtyb3V0ZXIucHVzaCgnL3BhdGVudCcpO30sXG4gICAgICBmdW5jdGlvbihlcnJvcikge2NvbnNvbGUubG9nKGVycm9yKTt9XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gYW5hbHl6ZVBhdGVudCgpIHtcbiAgICBpZiAodXBsb2FkZWRGaWxlKSB7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHVwbG9hZGVkRmlsZSk7XG4gICAgICBnb1RvUGF0ZW50KHVybCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyUGF0ZW50Q2FyZChlbnRyeTpQYXRlbnRJbmZvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYXRlbnRDYXJkXG4gICAgICAgIGluZm89e2VudHJ5fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUmVjZW50KGVudHJ5KX1cbiAgICAgIC8+KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwdC1bMjRweF1cIj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctMy80IG10LTEwXCI+XG4gICAgICAgIHsvKiBIZWFkZXIgdGV4dCAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTlcIj5IaSwgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jdXN0b20tYmx1ZVwiPnJlc2VhcmNoZXIgMTAyLTY8L3NwYW4+LiBXZWxjb21lIGJhY2sgdG8geW91ciBBSSBwYXRlbnQgd29ya3NwYWNlLjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW5vcm1hbCBsZWFkaW5nLTYgcHQtWzZweF1cIj5TaW1wbHkgdXBsb2FkIGEgcGF0ZW50IGRvY3VtZW50IGFuZCBsZXQgb3VyIEFJIGFuYWx5emUgdGhlIGRhdGEgaW4gc2Vjb25kcy4gVW5jb3ZlciB2YWx1YWJsZSBpbnNpZ2h0cyB0byBkcml2ZSB5b3VyIGlubm92YXRpb24gd29yay48L3A+XG5cbiAgICAgICAgey8qIGBSZWFkIGEgbmV3IHBhdGVudGAgc2VjdGlvbiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTkgcHQtWzI0cHhdIHBiLVsxMnB4XVwiPlJlYWQgYSBuZXcgcGF0ZW50PC9wPlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1bMjMwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyNEQUU1RUFdIGJnLXdoaXRlXCIgXG4gICAgICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiAnMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTApJyB9fVxuICAgICAgICAgIGlkPVwiZHJvcF96b25lXCIgb25Ecm9wPXtkcm9wSGFuZGxlcn0gb25EcmFnT3Zlcj17ZHJhZ092ZXJIYW5kbGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWN1c3RvbS1ibHVlIHJvdW5kZWQtZnVsbCBwLTFcIj5cbiAgICAgICAgICAgICAgICA8RG93bmxvYWQgc2l6ZT17MTh9IGNvbG9yPVwiI2ZmZmZmZlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbm9ybWFsIHdoaXRlc3BhY2Utbm93cmFwXCI+VXBsb2FkIG9yIGRyb3AgYSBmaWxlPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj4gIFxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwbC0xMFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD0ndXBsb2FkJ1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VwbG9hZGVkRmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFuYWx5emVQYXRlbnQoKX0+R288L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIFxuXG5cbiAgICAgICAgey8qIGBSZWNlbnQgSGlzdG9yeWAgc2VjdGlvbiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTkgcHQtWzI0cHhdIHBiLVsxMnB4XVwiPlJlY2VudCBIaXN0b3J5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHNwYWNlLXgtNCBwYi0xMFwiPlxuXG4gICAgICAgICAge2RhdGEubWFwKChwYXRlbnQpID0+IHJlbmRlclBhdGVudENhcmQocGF0ZW50KSl9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUGF0ZW50Q2FyZCIsIkRvd25sb2FkIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInN0b3JlRmlsZSIsImV4YW1wbGVzIiwiSG9tZSIsInVwbG9hZGVkRmlsZSIsInNldFVwbG9hZGVkRmlsZSIsInVwbG9hZGVkRmlsZU5hbWUiLCJzZXRVcGxvYWRlZEZpbGVOYW1lIiwicm91dGVyIiwiZGlzcGF0Y2giLCJkYXRhIiwiaGFuZGxlVXBsb2FkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJuYW1lIiwiZHJvcEhhbmRsZXIiLCJldiIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJpIiwia2luZCIsImdldEFzRmlsZSIsImRyYWdPdmVySGFuZGxlciIsInN0b3JlTmV3UGF0ZW50IiwidXJsIiwidXBsb2FkZWRQYXRlbnQiLCJ0aXRsZSIsInRhZ3MiLCJzdGF0dXMiLCJwYXRlbnRJZCIsInByb2JsZW0iLCJwcm9ibGVtS2V5d29yZHMiLCJzb2x1dGlvbiIsInNvbHV0aW9uS2V5d29yZHMiLCJzdW1tYXJ5IiwiZnVsbHRleHQiLCJzdG9yZVBhdGVudCIsImluZm8iLCJnb1RvUGF0ZW50IiwidGhlbiIsInZhbHVlIiwicHVzaCIsImVycm9yIiwiZ29Ub1JlY2VudCIsImFuYWx5emVQYXRlbnQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZW5kZXJQYXRlbnRDYXJkIiwiZW50cnkiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJzcGFuIiwic3R5bGUiLCJib3hTaGFkb3ciLCJpZCIsIm9uRHJvcCIsIm9uRHJhZ092ZXIiLCJzaXplIiwiY29sb3IiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iLCJtYXAiLCJwYXRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});