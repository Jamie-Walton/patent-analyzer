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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_PatentCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PatentCard */ \"(app-pages-browser)/./components/PatentCard.tsx\");\n/* harmony import */ var _barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Download!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/download.js\");\n/* harmony import */ var _components_modals_SavePatent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modals/SavePatent */ \"(app-pages-browser)/./components/modals/SavePatent.tsx\");\n/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hooks */ \"(app-pages-browser)/./lib/hooks.tsx\");\n/* harmony import */ var _lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/features/analyzeSlice */ \"(app-pages-browser)/./lib/features/analyzeSlice.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [uploadedFile, setUploadedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [uploadedFileName, setUploadedFileName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [isModalVisible, setIsModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const dispatch = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const data = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.examples);\n    const handleUpload = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            setUploadedFileName(file.name);\n            setUploadedFile(file);\n            setIsModalVisible(true); // Trigger the modal\n        }\n    };\n    function dropHandler(ev) {\n        console.log(\"File(s) dropped\");\n        // Prevent default behavior (Prevent file from being opened)\n        ev.preventDefault();\n        if (ev.dataTransfer.items) {\n            // Use DataTransferItemList interface to access the file(s)\n            [\n                ...ev.dataTransfer.items\n            ].forEach((item, i)=>{\n                // If dropped items aren't files, reject them\n                if (item.kind === \"file\") {\n                    const file = item.getAsFile();\n                    console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                    setIsModalVisible(true); // Show the modal\n                }\n            });\n        } else {\n            // Use DataTransfer interface to access the file(s)\n            [\n                ...ev.dataTransfer.files\n            ].forEach((file, i)=>{\n                console.log(\"… file[\".concat(i, \"].name = \").concat(file.name));\n                setUploadedFileName(file.name);\n                setUploadedFile(file);\n                setIsModalVisible(true); // Show the modal\n            });\n        }\n    }\n    function dragOverHandler(ev) {\n        console.log(\"File(s) in drop zone\");\n        ev.preventDefault();\n    }\n    async function storeNewPatent(url) {\n        const uploadedPatent = {\n            title: \"\",\n            tags: [],\n            status: \"\",\n            patentId: \"\",\n            url: url,\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        };\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.storeFile)(uploadedPatent));\n    }\n    async function storePatent(info) {\n        dispatch((0,_lib_features_analyzeSlice__WEBPACK_IMPORTED_MODULE_6__.storeFile)(info));\n    }\n    function goToPatent(url) {\n        storeNewPatent(url).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function goToRecent(info) {\n        storePatent(info).then(function(value) {\n            router.push(\"/patent\");\n        }, function(error) {\n            console.log(error);\n        });\n    }\n    function analyzePatent() {\n        if (uploadedFile) {\n            const url = URL.createObjectURL(uploadedFile);\n            goToPatent(url);\n        }\n    }\n    function renderPatentCard(entry) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatentCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            info: entry,\n            onClick: ()=>goToRecent(entry)\n        }, void 0, false, {\n            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center pt-[24px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-3/4 mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9\",\n                        children: [\n                            \"Hi, \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-custom-blue\",\n                                children: \"researcher 102-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                lineNumber: 121,\n                                columnNumber: 58\n                            }, this),\n                            \". Welcome back to your AI patent workspace.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-normal leading-6 pt-[6px]\",\n                        children: \"Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                        children: \"Read a new patent\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col h-[230px] items-center justify-center shrink-0 rounded-lg border border-[#DAE5EA] bg-white\",\n                        style: {\n                            boxShadow: \"0px 1px 10px 0px rgba(0, 0, 0, 0.10)\"\n                        },\n                        id: \"drop_zone\",\n                        onDrop: dropHandler,\n                        onDragOver: dragOverHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-custom-blue rounded-full p-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Download_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                size: 18,\n                                                color: \"#ffffff\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                                lineNumber: 134,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl font-normal whitespace-nowrap\",\n                                            children: \"Upload or drop a file\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        className: \"pl-24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"upload\",\n                                            className: \"text-sm cursor-pointer flex justify-center items-center\",\n                                            type: \"file\",\n                                            onChange: handleUpload\n                                        }, void 0, false, {\n                                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-normal leading-9 pt-[24px] pb-[12px]\",\n                        children: \"Recent History\"\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center w-full space-x-4 pb-10\",\n                        children: data.map((patent)=>renderPatentCard(patent))\n                    }, void 0, false, {\n                        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            isModalVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_SavePatent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    title: uploadedFileName,\n                    onClose: ()=>setIsModalVisible(false)\n                }, void 0, false, {\n                    fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                    lineNumber: 170,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/martinlacsamana/Documents/160/project/patent-analyzer/app/page.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Hododk2maiQresjviYc/lGL4y74=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        _lib_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDQyxTQUFXcEIsaUJBQWlCb0I7Ozs7Ozs7Ozs7OztZQU0xQ3BFLGdDQUNELDhEQUFDbUQ7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUM5RCxxRUFBVUE7b0JBQUNxQyxPQUFPN0I7b0JBQWtCdUUsU0FBUyxJQUFNcEUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQWhLd0JOOztRQUtQUixzREFBU0E7UUFDUEssc0RBQWNBO1FBQ2xCRCxzREFBY0E7OztLQVBMSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBQYXRlbnRDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvUGF0ZW50Q2FyZFwiO1xuaW1wb3J0IFBhdGVudEluZm8gZnJvbSBcIkAvY29tcG9uZW50cy9QYXRlbnRJbmZvXCI7XG5pbXBvcnQgUGF0ZW50VXBsb2FkIGZyb20gXCJAL2NvbXBvbmVudHMvUGF0ZW50VXBsb2FkXCI7XG5pbXBvcnQgUGF0ZW50VXBsb2FkTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudFVwbG9hZExvYWRpbmdcIjtcbmltcG9ydCB7RG93bmxvYWQsIExpbmsyfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgU2F2ZVBhdGVudCBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWxzL1NhdmVQYXRlbnQnO1xuXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9saWIvaG9va3MnXG5pbXBvcnQge1xuICBzdG9yZUZpbGUsIGV4YW1wbGVzXG59IGZyb20gJy4uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW3VwbG9hZGVkRmlsZSwgc2V0VXBsb2FkZWRGaWxlXSA9IHVzZVN0YXRlPEZpbGU+KCk7XG4gIGNvbnN0IFt1cGxvYWRlZEZpbGVOYW1lLCBzZXRVcGxvYWRlZEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2lzTW9kYWxWaXNpYmxlLCBzZXRJc01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VBcHBTZWxlY3RvcihleGFtcGxlcyk7XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gKGV2ZW50OiB7IHRhcmdldDogeyBmaWxlczogYW55OyB9OyB9KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgc2V0VXBsb2FkZWRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgc2V0VXBsb2FkZWRGaWxlKGZpbGUpO1xuICAgICAgc2V0SXNNb2RhbFZpc2libGUodHJ1ZSk7IC8vIFRyaWdnZXIgdGhlIG1vZGFsXG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRyb3BIYW5kbGVyKGV2OiB7IHByZXZlbnREZWZhdWx0OiAoKSA9PiB2b2lkOyBkYXRhVHJhbnNmZXI6IHsgaXRlbXM6IGFueTsgZmlsZXM6IGFueTsgfTsgfSkge1xuICAgIGNvbnNvbGUubG9nKFwiRmlsZShzKSBkcm9wcGVkXCIpO1xuICBcbiAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYmVoYXZpb3IgKFByZXZlbnQgZmlsZSBmcm9tIGJlaW5nIG9wZW5lZClcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICBpZiAoZXYuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XG4gICAgICAvLyBVc2UgRGF0YVRyYW5zZmVySXRlbUxpc3QgaW50ZXJmYWNlIHRvIGFjY2VzcyB0aGUgZmlsZShzKVxuICAgICAgWy4uLmV2LmRhdGFUcmFuc2Zlci5pdGVtc10uZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAvLyBJZiBkcm9wcGVkIGl0ZW1zIGFyZW4ndCBmaWxlcywgcmVqZWN0IHRoZW1cbiAgICAgICAgaWYgKGl0ZW0ua2luZCA9PT0gXCJmaWxlXCIpIHtcbiAgICAgICAgICBjb25zdCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhg4oCmIGZpbGVbJHtpfV0ubmFtZSA9ICR7ZmlsZS5uYW1lfWApO1xuICAgICAgICAgIHNldElzTW9kYWxWaXNpYmxlKHRydWUpOyAvLyBTaG93IHRoZSBtb2RhbFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIERhdGFUcmFuc2ZlciBpbnRlcmZhY2UgdG8gYWNjZXNzIHRoZSBmaWxlKHMpXG4gICAgICBbLi4uZXYuZGF0YVRyYW5zZmVyLmZpbGVzXS5mb3JFYWNoKChmaWxlLCBpKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDigKYgZmlsZVske2l9XS5uYW1lID0gJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIHNldFVwbG9hZGVkRmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgICAgICAgc2V0VXBsb2FkZWRGaWxlKGZpbGUpO1xuICAgICAgICBzZXRJc01vZGFsVmlzaWJsZSh0cnVlKTsgLy8gU2hvdyB0aGUgbW9kYWxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihldjogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZDsgfSkge1xuICAgIGNvbnNvbGUubG9nKFwiRmlsZShzKSBpbiBkcm9wIHpvbmVcIik7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0b3JlTmV3UGF0ZW50KHVybDpzdHJpbmcpIHtcbiAgICBjb25zdCB1cGxvYWRlZFBhdGVudCA9IHtcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgdGFnczogW10sXG4gICAgICBzdGF0dXM6IFwiXCIsXG4gICAgICBwYXRlbnRJZDogXCJcIixcbiAgICAgIHVybDogdXJsLFxuICAgICAgcHJvYmxlbTogXCJcIixcbiAgICAgIHByb2JsZW1LZXl3b3JkczogW10sXG4gICAgICBzb2x1dGlvbjogXCJcIixcbiAgICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgIGZ1bGx0ZXh0OiBcIlwiLFxuICAgIH1cbiAgICBkaXNwYXRjaChzdG9yZUZpbGUodXBsb2FkZWRQYXRlbnQpKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0b3JlUGF0ZW50KGluZm86UGF0ZW50SW5mbykge1xuICAgIGRpc3BhdGNoKHN0b3JlRmlsZShpbmZvKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUGF0ZW50KHVybDpzdHJpbmcpIHtcbiAgICBzdG9yZU5ld1BhdGVudCh1cmwpLnRoZW4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge3JvdXRlci5wdXNoKCcvcGF0ZW50Jyk7fSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpO31cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUmVjZW50KGluZm86UGF0ZW50SW5mbykge1xuICAgIHN0b3JlUGF0ZW50KGluZm8pLnRoZW4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge3JvdXRlci5wdXNoKCcvcGF0ZW50Jyk7fSxcbiAgICAgIGZ1bmN0aW9uKGVycm9yKSB7Y29uc29sZS5sb2coZXJyb3IpO31cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBhbmFseXplUGF0ZW50KCkge1xuICAgIGlmICh1cGxvYWRlZEZpbGUpIHtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodXBsb2FkZWRGaWxlKTtcbiAgICAgIGdvVG9QYXRlbnQodXJsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJQYXRlbnRDYXJkKGVudHJ5OlBhdGVudEluZm8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhdGVudENhcmRcbiAgICAgICAgaW5mbz17ZW50cnl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGdvVG9SZWNlbnQoZW50cnkpfVxuICAgICAgLz4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LVsyNHB4XVwiPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy0zLzQgbXQtMTBcIj5cbiAgICAgICAgey8qIEhlYWRlciB0ZXh0ICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbm9ybWFsIGxlYWRpbmctOVwiPkhpLCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWN1c3RvbS1ibHVlXCI+cmVzZWFyY2hlciAxMDItNjwvc3Bhbj4uIFdlbGNvbWUgYmFjayB0byB5b3VyIEFJIHBhdGVudCB3b3Jrc3BhY2UuPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsIGxlYWRpbmctNiBwdC1bNnB4XVwiPlNpbXBseSB1cGxvYWQgYSBwYXRlbnQgZG9jdW1lbnQgYW5kIGxldCBvdXIgQUkgYW5hbHl6ZSB0aGUgZGF0YSBpbiBzZWNvbmRzLiBVbmNvdmVyIHZhbHVhYmxlIGluc2lnaHRzIHRvIGRyaXZlIHlvdXIgaW5ub3ZhdGlvbiB3b3JrLjwvcD5cblxuICAgICAgICB7LyogYFJlYWQgYSBuZXcgcGF0ZW50YCBzZWN0aW9uICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbm9ybWFsIGxlYWRpbmctOSBwdC1bMjRweF0gcGItWzEycHhdXCI+UmVhZCBhIG5ldyBwYXRlbnQ8L3A+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLVsyMzBweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bI0RBRTVFQV0gYmctd2hpdGVcIiBcbiAgICAgICAgICBzdHlsZT17eyBib3hTaGFkb3c6ICcwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMCknIH19XG4gICAgICAgICAgaWQ9XCJkcm9wX3pvbmVcIiBvbkRyb3A9e2Ryb3BIYW5kbGVyfSBvbkRyYWdPdmVyPXtkcmFnT3ZlckhhbmRsZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY3VzdG9tLWJsdWUgcm91bmRlZC1mdWxsIHAtMVwiPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBzaXplPXsxOH0gY29sb3I9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ub3JtYWwgd2hpdGVzcGFjZS1ub3dyYXBcIj5VcGxvYWQgb3IgZHJvcCBhIGZpbGU8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPiAgXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInBsLTI0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPSd1cGxvYWQnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdmaWxlJ1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXBsb2FkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gYW5hbHl6ZVBhdGVudCgpfT5HbzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIFxuXG5cbiAgICAgICAgey8qIGBSZWNlbnQgSGlzdG9yeWAgc2VjdGlvbiAqL31cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW5vcm1hbCBsZWFkaW5nLTkgcHQtWzI0cHhdIHBiLVsxMnB4XVwiPlJlY2VudCBIaXN0b3J5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHNwYWNlLXgtNCBwYi0xMFwiPlxuXG4gICAgICAgICAge2RhdGEubWFwKChwYXRlbnQpID0+IHJlbmRlclBhdGVudENhcmQocGF0ZW50KSl9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L21haW4+XG4gICAgICBcbiAgICAgIHtpc01vZGFsVmlzaWJsZSAmJiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTQwXCI+XG4gICAgICAgIDxTYXZlUGF0ZW50IHRpdGxlPXt1cGxvYWRlZEZpbGVOYW1lfSBvbkNsb3NlPXsoKSA9PiBzZXRJc01vZGFsVmlzaWJsZShmYWxzZSl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUGF0ZW50Q2FyZCIsIkRvd25sb2FkIiwiU2F2ZVBhdGVudCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giLCJzdG9yZUZpbGUiLCJleGFtcGxlcyIsIkhvbWUiLCJ1cGxvYWRlZEZpbGUiLCJzZXRVcGxvYWRlZEZpbGUiLCJ1cGxvYWRlZEZpbGVOYW1lIiwic2V0VXBsb2FkZWRGaWxlTmFtZSIsImlzTW9kYWxWaXNpYmxlIiwic2V0SXNNb2RhbFZpc2libGUiLCJyb3V0ZXIiLCJkaXNwYXRjaCIsImRhdGEiLCJoYW5kbGVVcGxvYWQiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJkcm9wSGFuZGxlciIsImV2IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiZGF0YVRyYW5zZmVyIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImkiLCJraW5kIiwiZ2V0QXNGaWxlIiwiZHJhZ092ZXJIYW5kbGVyIiwic3RvcmVOZXdQYXRlbnQiLCJ1cmwiLCJ1cGxvYWRlZFBhdGVudCIsInRpdGxlIiwidGFncyIsInN0YXR1cyIsInBhdGVudElkIiwicHJvYmxlbSIsInByb2JsZW1LZXl3b3JkcyIsInNvbHV0aW9uIiwic29sdXRpb25LZXl3b3JkcyIsInN1bW1hcnkiLCJmdWxsdGV4dCIsInN0b3JlUGF0ZW50IiwiaW5mbyIsImdvVG9QYXRlbnQiLCJ0aGVuIiwidmFsdWUiLCJwdXNoIiwiZXJyb3IiLCJnb1RvUmVjZW50IiwiYW5hbHl6ZVBhdGVudCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlbmRlclBhdGVudENhcmQiLCJlbnRyeSIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicCIsInNwYW4iLCJzdHlsZSIsImJveFNoYWRvdyIsImlkIiwib25Ecm9wIiwib25EcmFnT3ZlciIsInNpemUiLCJjb2xvciIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1hcCIsInBhdGVudCIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});