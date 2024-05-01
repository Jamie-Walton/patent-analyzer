"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./lib/features/analyzeSlice.tsx":
/*!***************************************!*\
  !*** ./lib/features/analyzeSlice.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeSlice: function() { return /* binding */ analyzeSlice; },\n/* harmony export */   folders: function() { return /* binding */ folders; },\n/* harmony export */   patents: function() { return /* binding */ patents; },\n/* harmony export */   selectedPatent: function() { return /* binding */ selectedPatent; },\n/* harmony export */   storeFile: function() { return /* binding */ storeFile; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Define the initial state using that type\nconst initialState = {\n    selectedPatent: {\n        title: \"\",\n        folder: \"\",\n        date: \"\",\n        tags: [\n            \"\"\n        ],\n        status: \"\",\n        patentId: \"\",\n        url: \"\",\n        problem: \"\",\n        problemKeywords: [],\n        solution: \"\",\n        solutionKeywords: [],\n        summary: \"\",\n        fulltext: \"\"\n    },\n    patents: [\n        {\n            title: \"Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets\",\n            folder: \"Microfluidics\",\n            date: \"\",\n            tags: [\n                \"Microfluidics\",\n                \"Droplets\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20210331174A1\",\n            url: \"/examples/US20210331174A1.pdf\",\n            problem: \"The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.\",\n            problemKeywords: [\n                \"microfluidics\",\n                \"beads\",\n                \"singlet encapsulation\"\n            ],\n            solution: \"The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.\",\n            solutionKeywords: [\n                \"pinch and reservoir\",\n                \"funnel\"\n            ],\n            summary: \"This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Method and Apparatus for Image-Based Navigation\",\n            folder: \"Skeletal Navigation\",\n            date: \"\",\n            tags: [\n                \"MapNav\",\n                \"Surgical\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20240024042A1\",\n            url: \"/examples/US20240024042A1.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Single sided light-actuated microfluidic device with integrated mesh ground\",\n            folder: \"Microfluidics\",\n            date: \"\",\n            tags: [\n                \"Microfluidics\",\n                \"Optowetting\"\n            ],\n            status: \"Active\",\n            patentId: \"US9815056B2\",\n            url: \"/examples/US9815056.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        }\n    ],\n    folders: [\n        {\n            name: \"Microfluidics\",\n            date: \"April 29, 2024\"\n        },\n        {\n            name: \"Skeletal Navigation\",\n            date: \"15:33 PM today\"\n        }\n    ]\n};\nconst analyzeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"analyze\",\n    // `createSlice` will infer the state type from the `initialState` argument\n    initialState,\n    reducers: {\n        // Use the PayloadAction type to declare the contents of `action.payload`\n        storeFile: (state, action)=>{\n            state.selectedPatent = action.payload;\n        }\n    }\n});\nconst { storeFile } = analyzeSlice.actions;\nconst selectedPatent = (state)=>state.analyze.selectedPatent;\nconst patents = (state)=>state.analyze.patents;\nconst folders = (state)=>state.analyze.folders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (analyzeSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQWdCN0QsMkNBQTJDO0FBQzNDLE1BQU1DLGVBQTZCO0lBQ2pDQyxnQkFBZ0I7UUFDZEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsTUFBTTtZQUFDO1NBQUc7UUFDVkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxpQkFBaUIsRUFBRTtRQUNuQkMsVUFBVTtRQUNWQyxrQkFBa0IsRUFBRTtRQUNwQkMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQUMsU0FBUztRQUNQO1lBQ0ViLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLE1BQU07Z0JBQUM7Z0JBQWlCO2FBQVc7WUFDbkNDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsaUJBQWlCO2dCQUFDO2dCQUFpQjtnQkFBUzthQUF3QjtZQUNwRUMsVUFBVTtZQUNWQyxrQkFBa0I7Z0JBQUM7Z0JBQXVCO2FBQVM7WUFDbkRDLFNBQVM7WUFDVEMsVUFBVTtRQUNaO1FBQ0E7WUFDRVosT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBVTthQUFXO1lBQzVCQyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLGlCQUFpQixFQUFFO1lBQ25CQyxVQUFVO1lBQ1ZDLGtCQUFrQixFQUFFO1lBQ3BCQyxTQUFTO1lBQ1RDLFVBQVU7UUFDWjtRQUNBO1lBQ0VaLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLE1BQU07Z0JBQUM7Z0JBQWlCO2FBQWM7WUFDdENDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsaUJBQWlCLEVBQUU7WUFDbkJDLFVBQVU7WUFDVkMsa0JBQWtCLEVBQUU7WUFDcEJDLFNBQVM7WUFDVEMsVUFBVTtRQUNaO0tBQ0Q7SUFDREUsU0FBUztRQUFDO1lBQUNDLE1BQU07WUFBaUJiLE1BQU07UUFBZ0I7UUFBRztZQUFDYSxNQUFNO1lBQXVCYixNQUFNO1FBQWdCO0tBQUU7QUFDbkg7QUFFTyxNQUFNYyxlQUFlbkIsNkRBQVdBLENBQUM7SUFDdENrQixNQUFNO0lBQ04sMkVBQTJFO0lBQzNFakI7SUFDQW1CLFVBQVU7UUFDUix5RUFBeUU7UUFDekVDLFdBQVcsQ0FBQ0MsT0FBT0M7WUFDakJELE1BQU1wQixjQUFjLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3ZDO0lBQ0Y7QUFDRixHQUFFO0FBRUssTUFBTSxFQUFFSCxTQUFTLEVBQUUsR0FBR0YsYUFBYU0sT0FBTztBQUMxQyxNQUFNdkIsaUJBQWlCLENBQUNvQixRQUFxQkEsTUFBTUksT0FBTyxDQUFDeEIsY0FBYztBQUN6RSxNQUFNYyxVQUFVLENBQUNNLFFBQXFCQSxNQUFNSSxPQUFPLENBQUNWLE9BQU87QUFDM0QsTUFBTUMsVUFBVSxDQUFDSyxRQUFxQkEsTUFBTUksT0FBTyxDQUFDVCxPQUFPO0FBQ2xFLCtEQUFlRSxhQUFhUSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UudHN4P2YxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHR5cGUgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgUGF0ZW50SW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudEluZm9cIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuYWx5emVTdGF0ZSB7XG4gIHNlbGVjdGVkUGF0ZW50OiBQYXRlbnRJbmZvLFxuICBwYXRlbnRzOiBBcnJheTxQYXRlbnRJbmZvPixcbiAgZm9sZGVyczogQXJyYXk8Rm9sZGVyPixcbn1cblxuLy8gRGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIHVzaW5nIHRoYXQgdHlwZVxuY29uc3QgaW5pdGlhbFN0YXRlOiBBbmFseXplU3RhdGUgPSB7XG4gIHNlbGVjdGVkUGF0ZW50OiB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZm9sZGVyOiBcIlwiLFxuICAgIGRhdGU6IFwiXCIsXG4gICAgdGFnczogW1wiXCJdLFxuICAgIHN0YXR1czogXCJcIixcbiAgICBwYXRlbnRJZDogXCJcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgcHJvYmxlbTogXCJcIixcbiAgICBwcm9ibGVtS2V5d29yZHM6IFtdLFxuICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgIHN1bW1hcnk6IFwiXCIsXG4gICAgZnVsbHRleHQ6IFwiXCIsXG4gIH0sXG4gIHBhdGVudHM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJNaWNyb2ZsdWlkaWMgZGV2aWNlIGZvciBkZWZvcm1hYmxlIGJlYWRzIGVucmljaG1lbnQgYW5kIHNlbGYtcmVndWxhdGVkIG9yZGVyaW5nIGFuZCBlbmNhcHN1bGF0aW9uIGluIGRyb3BsZXRzXCIsXG4gICAgICBmb2xkZXI6IFwiTWljcm9mbHVpZGljc1wiLFxuICAgICAgZGF0ZTogXCJcIixcbiAgICAgIHRhZ3M6IFtcIk1pY3JvZmx1aWRpY3NcIiwgXCJEcm9wbGV0c1wiXSxcbiAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICBwYXRlbnRJZDogXCJVUzIwMjEwMzMxMTc0QTFcIixcbiAgICAgIHVybDogXCIvZXhhbXBsZXMvVVMyMDIxMDMzMTE3NEExLnBkZlwiLFxuICAgICAgcHJvYmxlbTogXCJUaGUgcGF0ZW50IGFkZHJlc3NlcyB0aGUgY2hhbGxlbmdlcyBvZiBhY2hpZXZpbmcgcm9idXN0IG9yZGVyZWQgZGVsaXZlcnkgb2YgZGVmb3JtYWJsZSBiZWFkcyBpbiBtaWNyb2ZsdWlkaWMgZGV2aWNlcywgYXMgd2VsbCBhcyB0aGUgZGlmZmljdWx0eSBpbiBhY2hpZXZpbmcgaGlnaCBwZXJjZW50YWdlIHNpbmdsZXQgZW5jYXBzdWxhdGlvbiB3aXRoIGEgY29uc3RhbnQgcHJlc3N1cmUgc291cmNlIHN5c3RlbS5cIixcbiAgICAgIHByb2JsZW1LZXl3b3JkczogW1wibWljcm9mbHVpZGljc1wiLCBcImJlYWRzXCIsIFwic2luZ2xldCBlbmNhcHN1bGF0aW9uXCJdLFxuICAgICAgc29sdXRpb246IFwiVGhlIGludmVudG9ycyBkZXZlbG9wZWQgYSBtaWNyb2ZsdWlkaWMgZGV2aWNlIHRoYXQgY2FuIHJlbGlhYmx5IGFjaGlldmUgaGlnaCBwZXJjZW50YWdlIHNpbmdsZXQgZW5jYXBzdWxhdGlvbiB3aXRoIGEgY29uc3RhbnQgcHJlc3N1cmUgc291cmNlIHN5c3RlbS4gVGhpcyB3YXMgYWNoaWV2ZWQgdGhyb3VnaCB0aGUgZGV2ZWxvcG1lbnQgb2YgYSBwaW5jaCBhbmQgcmVzZXJ2b2lyIHNlcXVlbmNlIHN5c3RlbSBmb3IgYmVhZHMgY29uY2VudHJhdGluZyBhbmQgZGVsaXZlcnkgZnJlcXVlbmN5IHN0YWJpbGl6aW5nLCBhcyB3ZWxsIGFzIHRoZSBkZXNpZ24gb2YgYSBsb25nIGZ1bm5lbCB0byBndWlkZSBhbmQgYWxpZ24gZGVmb3JtYWJsZSBiZWFkcyBpbnRvIGEgc2luZ2xlIHJvdywgYW5kIGEgY29yZSBkZXNpZ24gdG8gYWNoaWV2ZSBzZWxmLXJlZ3VsYXRlZCBiZWFkcyBpbiBkcm9wbGV0cyBlbmNhcHN1bGF0aW9uIHdpdGhpbiBhIGNvbnN0YW50IHByZXNzdXJlIHN5c3RlbS5cIixcbiAgICAgIHNvbHV0aW9uS2V5d29yZHM6IFtcInBpbmNoIGFuZCByZXNlcnZvaXJcIiwgXCJmdW5uZWxcIl0sXG4gICAgICBzdW1tYXJ5OiBcIlRoaXMgaW52ZW50aW9uIGludHJvZHVjZXMgYSBub3ZlbCBtaWNyb2ZsdWlkaWMgZGV2aWNlIGRlc2lnbmVkIHRvIGltcHJvdmUgdGhlIGhhbmRsaW5nIGFuZCBwcm9jZXNzaW5nIG9mIGRlZm9ybWFibGUgYmVhZHMgaW4gYSBjb250cm9sbGVkIGVudmlyb25tZW50LiBUaGUgZGV2aWNlIGZlYXR1cmVzIGEgc2VyaWVzIG9mIGlubGV0cyBhbmQgbWljcm9mbHVpZGljIGNoYW5uZWxzIHRoYXQgZmFjaWxpdGF0ZSB0aGUgZW5jYXBzdWxhdGlvbiBvZiB0aGVzZSBiZWFkcyBpbnRvIGRyb3BsZXRzLCBhIG1ldGhvZCB0aGF0IGlzIGNydWNpYWwgZm9yIGFkdmFuY2luZyBsYWJvcmF0b3J5IGFzc2F5cyBzdWNoIGFzIHNpbmdsZS1jZWxsIGFuYWx5c2VzIGFuZCBvdGhlciBtaWNyb3JlYWN0b3IgYXBwbGljYXRpb25zLlwiLFxuICAgICAgZnVsbHRleHQ6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1ldGhvZCBhbmQgQXBwYXJhdHVzIGZvciBJbWFnZS1CYXNlZCBOYXZpZ2F0aW9uXCIsXG4gICAgICBmb2xkZXI6IFwiU2tlbGV0YWwgTmF2aWdhdGlvblwiLFxuICAgICAgZGF0ZTogXCJcIixcbiAgICAgIHRhZ3M6IFtcIk1hcE5hdlwiLCBcIlN1cmdpY2FsXCJdLFxuICAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAgIHBhdGVudElkOiBcIlVTMjAyNDAwMjQwNDJBMVwiLFxuICAgICAgdXJsOiBcIi9leGFtcGxlcy9VUzIwMjQwMDI0MDQyQTEucGRmXCIsXG4gICAgICBwcm9ibGVtOiBcIlwiLFxuICAgICAgcHJvYmxlbUtleXdvcmRzOiBbXSxcbiAgICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgICAgc29sdXRpb25LZXl3b3JkczogW10sXG4gICAgICBzdW1tYXJ5OiBcIlwiLFxuICAgICAgZnVsbHRleHQ6IFwiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNpbmdsZSBzaWRlZCBsaWdodC1hY3R1YXRlZCBtaWNyb2ZsdWlkaWMgZGV2aWNlIHdpdGggaW50ZWdyYXRlZCBtZXNoIGdyb3VuZFwiLFxuICAgICAgZm9sZGVyOiBcIk1pY3JvZmx1aWRpY3NcIixcbiAgICAgIGRhdGU6IFwiXCIsXG4gICAgICB0YWdzOiBbXCJNaWNyb2ZsdWlkaWNzXCIsIFwiT3B0b3dldHRpbmdcIl0sXG4gICAgICBzdGF0dXM6IFwiQWN0aXZlXCIsXG4gICAgICBwYXRlbnRJZDogXCJVUzk4MTUwNTZCMlwiLFxuICAgICAgdXJsOiBcIi9leGFtcGxlcy9VUzk4MTUwNTYucGRmXCIsXG4gICAgICBwcm9ibGVtOiBcIlwiLFxuICAgICAgcHJvYmxlbUtleXdvcmRzOiBbXSxcbiAgICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgICAgc29sdXRpb25LZXl3b3JkczogW10sXG4gICAgICBzdW1tYXJ5OiBcIlwiLFxuICAgICAgZnVsbHRleHQ6IFwiXCJcbiAgICB9LFxuICBdLFxuICBmb2xkZXJzOiBbe25hbWU6IFwiTWljcm9mbHVpZGljc1wiLCBkYXRlOiBcIkFwcmlsIDI5LCAyMDI0XCJ9LCB7bmFtZTogXCJTa2VsZXRhbCBOYXZpZ2F0aW9uXCIsIGRhdGU6IFwiMTU6MzMgUE0gdG9kYXlcIn1dXG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXplU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhbmFseXplJyxcbiAgLy8gYGNyZWF0ZVNsaWNlYCB3aWxsIGluZmVyIHRoZSBzdGF0ZSB0eXBlIGZyb20gdGhlIGBpbml0aWFsU3RhdGVgIGFyZ3VtZW50XG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvLyBVc2UgdGhlIFBheWxvYWRBY3Rpb24gdHlwZSB0byBkZWNsYXJlIHRoZSBjb250ZW50cyBvZiBgYWN0aW9uLnBheWxvYWRgXG4gICAgc3RvcmVGaWxlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXRlbnRJbmZvPikgPT4ge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRQYXRlbnQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IHN0b3JlRmlsZSB9ID0gYW5hbHl6ZVNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFBhdGVudCA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hbmFseXplLnNlbGVjdGVkUGF0ZW50XG5leHBvcnQgY29uc3QgcGF0ZW50cyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hbmFseXplLnBhdGVudHNcbmV4cG9ydCBjb25zdCBmb2xkZXJzID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFuYWx5emUuZm9sZGVyc1xuZXhwb3J0IGRlZmF1bHQgYW5hbHl6ZVNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJzZWxlY3RlZFBhdGVudCIsInRpdGxlIiwiZm9sZGVyIiwiZGF0ZSIsInRhZ3MiLCJzdGF0dXMiLCJwYXRlbnRJZCIsInVybCIsInByb2JsZW0iLCJwcm9ibGVtS2V5d29yZHMiLCJzb2x1dGlvbiIsInNvbHV0aW9uS2V5d29yZHMiLCJzdW1tYXJ5IiwiZnVsbHRleHQiLCJwYXRlbnRzIiwiZm9sZGVycyIsIm5hbWUiLCJhbmFseXplU2xpY2UiLCJyZWR1Y2VycyIsInN0b3JlRmlsZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJhbmFseXplIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/features/analyzeSlice.tsx\n"));

/***/ })

});