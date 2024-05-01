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

/***/ "(app-pages-browser)/./lib/features/analyzeSlice.tsx":
/*!***************************************!*\
  !*** ./lib/features/analyzeSlice.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeSlice: function() { return /* binding */ analyzeSlice; },\n/* harmony export */   folders: function() { return /* binding */ folders; },\n/* harmony export */   patents: function() { return /* binding */ patents; },\n/* harmony export */   selectedPatent: function() { return /* binding */ selectedPatent; },\n/* harmony export */   storeFile: function() { return /* binding */ storeFile; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Define the initial state using that type\nconst initialState = {\n    selectedPatent: {\n        title: \"\",\n        folder: \"\",\n        date: \"\",\n        tags: [\n            \"\"\n        ],\n        status: \"\",\n        patentId: \"\",\n        url: \"\",\n        problem: \"\",\n        problemKeywords: [],\n        solution: \"\",\n        solutionKeywords: [],\n        summary: \"\",\n        fulltext: \"\"\n    },\n    patents: [\n        {\n            title: \"Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets\",\n            folder: \"Microfluidics\",\n            date: \"\",\n            tags: [\n                \"Microfluidics\",\n                \"Droplets\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20210331174A1\",\n            url: \"/examples/US20210331174A1.pdf\",\n            problem: \"The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.\",\n            problemKeywords: [\n                \"microfluidics\",\n                \"beads\",\n                \"singlet encapsulation\"\n            ],\n            solution: \"The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.\",\n            solutionKeywords: [\n                \"pinch and reservoir\",\n                \"funnel\"\n            ],\n            summary: \"This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Method and Apparatus for Image-Based Navigation\",\n            folder: \"Skeletal Navigation\",\n            date: \"\",\n            tags: [\n                \"MapNav\",\n                \"Surgical\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20240024042A1\",\n            url: \"/examples/US20240024042A1.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Single sided light-actuated microfluidic device with integrated mesh ground\",\n            folder: \"Microfluidics\",\n            date: \"\",\n            tags: [\n                \"Microfluidics\",\n                \"Optowetting\"\n            ],\n            status: \"Active\",\n            patentId: \"US9815056B2\",\n            url: \"/examples/US9815056.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        }\n    ],\n    folders: [\n        \"Microfluidics\",\n        \"Skeletal Navigation\"\n    ]\n};\nconst analyzeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"analyze\",\n    // `createSlice` will infer the state type from the `initialState` argument\n    initialState,\n    reducers: {\n        // Use the PayloadAction type to declare the contents of `action.payload`\n        storeFile: (state, action)=>{\n            state.selectedPatent = action.payload;\n        }\n    }\n});\nconst { storeFile } = analyzeSlice.actions;\nconst selectedPatent = (state)=>state.analyze.selectedPatent;\nconst patents = (state)=>state.analyze.patents;\nconst folders = (state)=>state.analyze.folders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (analyzeSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQVU3RCwyQ0FBMkM7QUFDM0MsTUFBTUMsZUFBNkI7SUFDakNDLGdCQUFnQjtRQUNkQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1lBQUM7U0FBRztRQUNWQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsS0FBSztRQUNMQyxTQUFTO1FBQ1RDLGlCQUFpQixFQUFFO1FBQ25CQyxVQUFVO1FBQ1ZDLGtCQUFrQixFQUFFO1FBQ3BCQyxTQUFTO1FBQ1RDLFVBQVU7SUFDWjtJQUNBQyxTQUFTO1FBQ1A7WUFDRWIsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBaUI7YUFBVztZQUNuQ0MsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsU0FBUztZQUNUQyxpQkFBaUI7Z0JBQUM7Z0JBQWlCO2dCQUFTO2FBQXdCO1lBQ3BFQyxVQUFVO1lBQ1ZDLGtCQUFrQjtnQkFBQztnQkFBdUI7YUFBUztZQUNuREMsU0FBUztZQUNUQyxVQUFVO1FBQ1o7UUFDQTtZQUNFWixPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFVO2FBQVc7WUFDNUJDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsaUJBQWlCLEVBQUU7WUFDbkJDLFVBQVU7WUFDVkMsa0JBQWtCLEVBQUU7WUFDcEJDLFNBQVM7WUFDVEMsVUFBVTtRQUNaO1FBQ0E7WUFDRVosT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsTUFBTTtnQkFBQztnQkFBaUI7YUFBYztZQUN0Q0MsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsU0FBUztZQUNUQyxpQkFBaUIsRUFBRTtZQUNuQkMsVUFBVTtZQUNWQyxrQkFBa0IsRUFBRTtZQUNwQkMsU0FBUztZQUNUQyxVQUFVO1FBQ1o7S0FDRDtJQUNERSxTQUFTO1FBQUM7UUFBaUI7S0FBc0I7QUFDbkQ7QUFFTyxNQUFNQyxlQUFlbEIsNkRBQVdBLENBQUM7SUFDdENtQixNQUFNO0lBQ04sMkVBQTJFO0lBQzNFbEI7SUFDQW1CLFVBQVU7UUFDUix5RUFBeUU7UUFDekVDLFdBQVcsQ0FBQ0MsT0FBT0M7WUFDakJELE1BQU1wQixjQUFjLEdBQUdxQixPQUFPQyxPQUFPO1FBQ3ZDO0lBQ0Y7QUFDRixHQUFFO0FBRUssTUFBTSxFQUFFSCxTQUFTLEVBQUUsR0FBR0gsYUFBYU8sT0FBTztBQUMxQyxNQUFNdkIsaUJBQWlCLENBQUNvQixRQUFxQkEsTUFBTUksT0FBTyxDQUFDeEIsY0FBYztBQUN6RSxNQUFNYyxVQUFVLENBQUNNLFFBQXFCQSxNQUFNSSxPQUFPLENBQUNWLE9BQU87QUFDM0QsTUFBTUMsVUFBVSxDQUFDSyxRQUFxQkEsTUFBTUksT0FBTyxDQUFDVCxPQUFPO0FBQ2xFLCtEQUFlQyxhQUFhUyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UudHN4P2YxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHR5cGUgeyBSb290U3RhdGUgfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgUGF0ZW50SW5mbyBmcm9tIFwiQC9jb21wb25lbnRzL1BhdGVudEluZm9cIjtcblxuZXhwb3J0IGludGVyZmFjZSBBbmFseXplU3RhdGUge1xuICBzZWxlY3RlZFBhdGVudDogUGF0ZW50SW5mbyxcbiAgcGF0ZW50czogQXJyYXk8UGF0ZW50SW5mbz4sXG4gIGZvbGRlcnM6IEFycmF5PFN0cmluZz4sXG59XG5cbi8vIERlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSB1c2luZyB0aGF0IHR5cGVcbmNvbnN0IGluaXRpYWxTdGF0ZTogQW5hbHl6ZVN0YXRlID0ge1xuICBzZWxlY3RlZFBhdGVudDoge1xuICAgIHRpdGxlOiBcIlwiLFxuICAgIGZvbGRlcjogXCJcIixcbiAgICBkYXRlOiBcIlwiLFxuICAgIHRhZ3M6IFtcIlwiXSxcbiAgICBzdGF0dXM6IFwiXCIsXG4gICAgcGF0ZW50SWQ6IFwiXCIsXG4gICAgdXJsOiBcIlwiLFxuICAgIHByb2JsZW06IFwiXCIsXG4gICAgcHJvYmxlbUtleXdvcmRzOiBbXSxcbiAgICBzb2x1dGlvbjogXCJcIixcbiAgICBzb2x1dGlvbktleXdvcmRzOiBbXSxcbiAgICBzdW1tYXJ5OiBcIlwiLFxuICAgIGZ1bGx0ZXh0OiBcIlwiLFxuICB9LFxuICBwYXRlbnRzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWljcm9mbHVpZGljIGRldmljZSBmb3IgZGVmb3JtYWJsZSBiZWFkcyBlbnJpY2htZW50IGFuZCBzZWxmLXJlZ3VsYXRlZCBvcmRlcmluZyBhbmQgZW5jYXBzdWxhdGlvbiBpbiBkcm9wbGV0c1wiLFxuICAgICAgZm9sZGVyOiBcIk1pY3JvZmx1aWRpY3NcIixcbiAgICAgIGRhdGU6IFwiXCIsXG4gICAgICB0YWdzOiBbXCJNaWNyb2ZsdWlkaWNzXCIsIFwiRHJvcGxldHNcIl0sXG4gICAgICBzdGF0dXM6IFwiUGVuZGluZ1wiLFxuICAgICAgcGF0ZW50SWQ6IFwiVVMyMDIxMDMzMTE3NEExXCIsXG4gICAgICB1cmw6IFwiL2V4YW1wbGVzL1VTMjAyMTAzMzExNzRBMS5wZGZcIixcbiAgICAgIHByb2JsZW06IFwiVGhlIHBhdGVudCBhZGRyZXNzZXMgdGhlIGNoYWxsZW5nZXMgb2YgYWNoaWV2aW5nIHJvYnVzdCBvcmRlcmVkIGRlbGl2ZXJ5IG9mIGRlZm9ybWFibGUgYmVhZHMgaW4gbWljcm9mbHVpZGljIGRldmljZXMsIGFzIHdlbGwgYXMgdGhlIGRpZmZpY3VsdHkgaW4gYWNoaWV2aW5nIGhpZ2ggcGVyY2VudGFnZSBzaW5nbGV0IGVuY2Fwc3VsYXRpb24gd2l0aCBhIGNvbnN0YW50IHByZXNzdXJlIHNvdXJjZSBzeXN0ZW0uXCIsXG4gICAgICBwcm9ibGVtS2V5d29yZHM6IFtcIm1pY3JvZmx1aWRpY3NcIiwgXCJiZWFkc1wiLCBcInNpbmdsZXQgZW5jYXBzdWxhdGlvblwiXSxcbiAgICAgIHNvbHV0aW9uOiBcIlRoZSBpbnZlbnRvcnMgZGV2ZWxvcGVkIGEgbWljcm9mbHVpZGljIGRldmljZSB0aGF0IGNhbiByZWxpYWJseSBhY2hpZXZlIGhpZ2ggcGVyY2VudGFnZSBzaW5nbGV0IGVuY2Fwc3VsYXRpb24gd2l0aCBhIGNvbnN0YW50IHByZXNzdXJlIHNvdXJjZSBzeXN0ZW0uIFRoaXMgd2FzIGFjaGlldmVkIHRocm91Z2ggdGhlIGRldmVsb3BtZW50IG9mIGEgcGluY2ggYW5kIHJlc2Vydm9pciBzZXF1ZW5jZSBzeXN0ZW0gZm9yIGJlYWRzIGNvbmNlbnRyYXRpbmcgYW5kIGRlbGl2ZXJ5IGZyZXF1ZW5jeSBzdGFiaWxpemluZywgYXMgd2VsbCBhcyB0aGUgZGVzaWduIG9mIGEgbG9uZyBmdW5uZWwgdG8gZ3VpZGUgYW5kIGFsaWduIGRlZm9ybWFibGUgYmVhZHMgaW50byBhIHNpbmdsZSByb3csIGFuZCBhIGNvcmUgZGVzaWduIHRvIGFjaGlldmUgc2VsZi1yZWd1bGF0ZWQgYmVhZHMgaW4gZHJvcGxldHMgZW5jYXBzdWxhdGlvbiB3aXRoaW4gYSBjb25zdGFudCBwcmVzc3VyZSBzeXN0ZW0uXCIsXG4gICAgICBzb2x1dGlvbktleXdvcmRzOiBbXCJwaW5jaCBhbmQgcmVzZXJ2b2lyXCIsIFwiZnVubmVsXCJdLFxuICAgICAgc3VtbWFyeTogXCJUaGlzIGludmVudGlvbiBpbnRyb2R1Y2VzIGEgbm92ZWwgbWljcm9mbHVpZGljIGRldmljZSBkZXNpZ25lZCB0byBpbXByb3ZlIHRoZSBoYW5kbGluZyBhbmQgcHJvY2Vzc2luZyBvZiBkZWZvcm1hYmxlIGJlYWRzIGluIGEgY29udHJvbGxlZCBlbnZpcm9ubWVudC4gVGhlIGRldmljZSBmZWF0dXJlcyBhIHNlcmllcyBvZiBpbmxldHMgYW5kIG1pY3JvZmx1aWRpYyBjaGFubmVscyB0aGF0IGZhY2lsaXRhdGUgdGhlIGVuY2Fwc3VsYXRpb24gb2YgdGhlc2UgYmVhZHMgaW50byBkcm9wbGV0cywgYSBtZXRob2QgdGhhdCBpcyBjcnVjaWFsIGZvciBhZHZhbmNpbmcgbGFib3JhdG9yeSBhc3NheXMgc3VjaCBhcyBzaW5nbGUtY2VsbCBhbmFseXNlcyBhbmQgb3RoZXIgbWljcm9yZWFjdG9yIGFwcGxpY2F0aW9ucy5cIixcbiAgICAgIGZ1bGx0ZXh0OiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNZXRob2QgYW5kIEFwcGFyYXR1cyBmb3IgSW1hZ2UtQmFzZWQgTmF2aWdhdGlvblwiLFxuICAgICAgZm9sZGVyOiBcIlNrZWxldGFsIE5hdmlnYXRpb25cIixcbiAgICAgIGRhdGU6IFwiXCIsXG4gICAgICB0YWdzOiBbXCJNYXBOYXZcIiwgXCJTdXJnaWNhbFwiXSxcbiAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICBwYXRlbnRJZDogXCJVUzIwMjQwMDI0MDQyQTFcIixcbiAgICAgIHVybDogXCIvZXhhbXBsZXMvVVMyMDI0MDAyNDA0MkExLnBkZlwiLFxuICAgICAgcHJvYmxlbTogXCJcIixcbiAgICAgIHByb2JsZW1LZXl3b3JkczogW10sXG4gICAgICBzb2x1dGlvbjogXCJcIixcbiAgICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgIGZ1bGx0ZXh0OiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTaW5nbGUgc2lkZWQgbGlnaHQtYWN0dWF0ZWQgbWljcm9mbHVpZGljIGRldmljZSB3aXRoIGludGVncmF0ZWQgbWVzaCBncm91bmRcIixcbiAgICAgIGZvbGRlcjogXCJNaWNyb2ZsdWlkaWNzXCIsXG4gICAgICBkYXRlOiBcIlwiLFxuICAgICAgdGFnczogW1wiTWljcm9mbHVpZGljc1wiLCBcIk9wdG93ZXR0aW5nXCJdLFxuICAgICAgc3RhdHVzOiBcIkFjdGl2ZVwiLFxuICAgICAgcGF0ZW50SWQ6IFwiVVM5ODE1MDU2QjJcIixcbiAgICAgIHVybDogXCIvZXhhbXBsZXMvVVM5ODE1MDU2LnBkZlwiLFxuICAgICAgcHJvYmxlbTogXCJcIixcbiAgICAgIHByb2JsZW1LZXl3b3JkczogW10sXG4gICAgICBzb2x1dGlvbjogXCJcIixcbiAgICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgIGZ1bGx0ZXh0OiBcIlwiXG4gICAgfSxcbiAgXSxcbiAgZm9sZGVyczogW1wiTWljcm9mbHVpZGljc1wiLCBcIlNrZWxldGFsIE5hdmlnYXRpb25cIl1cbn1cblxuZXhwb3J0IGNvbnN0IGFuYWx5emVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2FuYWx5emUnLFxuICAvLyBgY3JlYXRlU2xpY2VgIHdpbGwgaW5mZXIgdGhlIHN0YXRlIHR5cGUgZnJvbSB0aGUgYGluaXRpYWxTdGF0ZWAgYXJndW1lbnRcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIC8vIFVzZSB0aGUgUGF5bG9hZEFjdGlvbiB0eXBlIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnRzIG9mIGBhY3Rpb24ucGF5bG9hZGBcbiAgICBzdG9yZUZpbGU6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFBhdGVudEluZm8+KSA9PiB7XG4gICAgICBzdGF0ZS5zZWxlY3RlZFBhdGVudCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHsgc3RvcmVGaWxlIH0gPSBhbmFseXplU2xpY2UuYWN0aW9uc1xuZXhwb3J0IGNvbnN0IHNlbGVjdGVkUGF0ZW50ID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFuYWx5emUuc2VsZWN0ZWRQYXRlbnRcbmV4cG9ydCBjb25zdCBwYXRlbnRzID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmFuYWx5emUucGF0ZW50c1xuZXhwb3J0IGNvbnN0IGZvbGRlcnMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYW5hbHl6ZS5mb2xkZXJzXG5leHBvcnQgZGVmYXVsdCBhbmFseXplU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlbGVjdGVkUGF0ZW50IiwidGl0bGUiLCJmb2xkZXIiLCJkYXRlIiwidGFncyIsInN0YXR1cyIsInBhdGVudElkIiwidXJsIiwicHJvYmxlbSIsInByb2JsZW1LZXl3b3JkcyIsInNvbHV0aW9uIiwic29sdXRpb25LZXl3b3JkcyIsInN1bW1hcnkiLCJmdWxsdGV4dCIsInBhdGVudHMiLCJmb2xkZXJzIiwiYW5hbHl6ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic3RvcmVGaWxlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsImFuYWx5emUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/features/analyzeSlice.tsx\n"));

/***/ })

});