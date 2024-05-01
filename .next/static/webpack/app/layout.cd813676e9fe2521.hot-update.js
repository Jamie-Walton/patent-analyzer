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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeSlice: function() { return /* binding */ analyzeSlice; },\n/* harmony export */   examples: function() { return /* binding */ examples; },\n/* harmony export */   selectedPatent: function() { return /* binding */ selectedPatent; },\n/* harmony export */   storeFile: function() { return /* binding */ storeFile; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\n// Define the initial state using that type\nconst initialState = {\n    selectedPatent: {\n        title: \"\",\n        folder: \"\",\n        tags: [\n            \"\"\n        ],\n        status: \"\",\n        patentId: \"\",\n        url: \"\",\n        problem: \"\",\n        problemKeywords: [],\n        solution: \"\",\n        solutionKeywords: [],\n        summary: \"\",\n        fulltext: \"\"\n    },\n    patents: [\n        {\n            title: \"Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets\",\n            folder: \"Microfluidics\",\n            tags: [\n                \"Microfluidics\",\n                \"Droplets\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20210331174A1\",\n            url: \"/examples/US20210331174A1.pdf\",\n            problem: \"The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.\",\n            problemKeywords: [\n                \"microfluidics\",\n                \"beads\",\n                \"singlet encapsulation\"\n            ],\n            solution: \"The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.\",\n            solutionKeywords: [\n                \"pinch and reservoir\",\n                \"funnel\"\n            ],\n            summary: \"This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Method and Apparatus for Image-Based Navigation\",\n            folder: \"Skeletal Navigation\",\n            tags: [\n                \"MapNav\",\n                \"Surgical\"\n            ],\n            status: \"Pending\",\n            patentId: \"US20240024042A1\",\n            url: \"/examples/US20240024042A1.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        },\n        {\n            title: \"Single sided light-actuated microfluidic device with integrated mesh ground\",\n            folder: \"Microfluidics\",\n            tags: [\n                \"Microfluidics\",\n                \"Optowetting\"\n            ],\n            status: \"Active\",\n            patentId: \"US9815056B2\",\n            url: \"/examples/US9815056.pdf\",\n            problem: \"\",\n            problemKeywords: [],\n            solution: \"\",\n            solutionKeywords: [],\n            summary: \"\",\n            fulltext: \"\"\n        }\n    ]\n};\nconst analyzeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"analyze\",\n    // `createSlice` will infer the state type from the `initialState` argument\n    initialState,\n    reducers: {\n        // Use the PayloadAction type to declare the contents of `action.payload`\n        storeFile: (state, action)=>{\n            state.selectedPatent = action.payload;\n        }\n    }\n});\nconst { storeFile } = analyzeSlice.actions;\nconst selectedPatent = (state)=>state.analyze.selectedPatent;\nconst examples = (state)=>state.analyze.patents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (analyzeSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9mZWF0dXJlcy9hbmFseXplU2xpY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBd0I3RCwyQ0FBMkM7QUFDM0MsTUFBTUMsZUFBNkI7SUFDakNDLGdCQUFnQjtRQUNkQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsTUFBTTtZQUFDO1NBQUc7UUFDVkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxpQkFBaUIsRUFBRTtRQUNuQkMsVUFBVTtRQUNWQyxrQkFBa0IsRUFBRTtRQUNwQkMsU0FBUztRQUNUQyxVQUFVO0lBQ1o7SUFDQUMsU0FBUztRQUNQO1lBQ0VaLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO2dCQUFDO2dCQUFpQjthQUFXO1lBQ25DQyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLGlCQUFpQjtnQkFBQztnQkFBaUI7Z0JBQVM7YUFBd0I7WUFDcEVDLFVBQVU7WUFDVkMsa0JBQWtCO2dCQUFDO2dCQUF1QjthQUFTO1lBQ25EQyxTQUFTO1lBQ1RDLFVBQVU7UUFDWjtRQUNBO1lBQ0VYLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxNQUFNO2dCQUFDO2dCQUFVO2FBQVc7WUFDNUJDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsaUJBQWlCLEVBQUU7WUFDbkJDLFVBQVU7WUFDVkMsa0JBQWtCLEVBQUU7WUFDcEJDLFNBQVM7WUFDVEMsVUFBVTtRQUNaO1FBQ0E7WUFDRVgsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLE1BQU07Z0JBQUM7Z0JBQWlCO2FBQWM7WUFDdENDLFFBQVE7WUFDUkMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLFNBQVM7WUFDVEMsaUJBQWlCLEVBQUU7WUFDbkJDLFVBQVU7WUFDVkMsa0JBQWtCLEVBQUU7WUFDcEJDLFNBQVM7WUFDVEMsVUFBVTtRQUNaO0tBQ0Q7QUFDSDtBQUVPLE1BQU1FLGVBQWVoQiw2REFBV0EsQ0FBQztJQUN0Q2lCLE1BQU07SUFDTiwyRUFBMkU7SUFDM0VoQjtJQUNBaUIsVUFBVTtRQUNSLHlFQUF5RTtRQUN6RUMsV0FBVyxDQUFDQyxPQUFPQztZQUNqQkQsTUFBTWxCLGNBQWMsR0FBR21CLE9BQU9DLE9BQU87UUFDdkM7SUFDRjtBQUNGLEdBQUU7QUFFSyxNQUFNLEVBQUVILFNBQVMsRUFBRSxHQUFHSCxhQUFhTyxPQUFPO0FBQzFDLE1BQU1yQixpQkFBaUIsQ0FBQ2tCLFFBQXFCQSxNQUFNSSxPQUFPLENBQUN0QixjQUFjO0FBQ3pFLE1BQU11QixXQUFXLENBQUNMLFFBQXFCQSxNQUFNSSxPQUFPLENBQUNULE9BQU87QUFDbkUsK0RBQWVDLGFBQWFVLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZlYXR1cmVzL2FuYWx5emVTbGljZS50c3g/ZjFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcblxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIHNsaWNlIHN0YXRlXG5pbnRlcmZhY2UgUGF0ZW50SW5mbyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGZvbGRlcjogc3RyaW5nO1xuICB0YWdzOiBBcnJheTxzdHJpbmc+O1xuICBzdGF0dXM6IHN0cmluZztcbiAgcGF0ZW50SWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHByb2JsZW06IHN0cmluZztcbiAgcHJvYmxlbUtleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBzb2x1dGlvbjogc3RyaW5nO1xuICBzb2x1dGlvbktleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIGZ1bGx0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5hbHl6ZVN0YXRlIHtcbiAgc2VsZWN0ZWRQYXRlbnQ6IFBhdGVudEluZm8sXG4gIHBhdGVudHM6IEFycmF5PFBhdGVudEluZm8+LFxufVxuXG4vLyBEZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgdXNpbmcgdGhhdCB0eXBlXG5jb25zdCBpbml0aWFsU3RhdGU6IEFuYWx5emVTdGF0ZSA9IHtcbiAgc2VsZWN0ZWRQYXRlbnQ6IHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBmb2xkZXI6IFwiXCIsXG4gICAgdGFnczogW1wiXCJdLFxuICAgIHN0YXR1czogXCJcIixcbiAgICBwYXRlbnRJZDogXCJcIixcbiAgICB1cmw6IFwiXCIsXG4gICAgcHJvYmxlbTogXCJcIixcbiAgICBwcm9ibGVtS2V5d29yZHM6IFtdLFxuICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgIHN1bW1hcnk6IFwiXCIsXG4gICAgZnVsbHRleHQ6IFwiXCIsXG4gIH0sXG4gIHBhdGVudHM6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJNaWNyb2ZsdWlkaWMgZGV2aWNlIGZvciBkZWZvcm1hYmxlIGJlYWRzIGVucmljaG1lbnQgYW5kIHNlbGYtcmVndWxhdGVkIG9yZGVyaW5nIGFuZCBlbmNhcHN1bGF0aW9uIGluIGRyb3BsZXRzXCIsXG4gICAgICBmb2xkZXI6IFwiTWljcm9mbHVpZGljc1wiLFxuICAgICAgdGFnczogW1wiTWljcm9mbHVpZGljc1wiLCBcIkRyb3BsZXRzXCJdLFxuICAgICAgc3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICAgIHBhdGVudElkOiBcIlVTMjAyMTAzMzExNzRBMVwiLFxuICAgICAgdXJsOiBcIi9leGFtcGxlcy9VUzIwMjEwMzMxMTc0QTEucGRmXCIsXG4gICAgICBwcm9ibGVtOiBcIlRoZSBwYXRlbnQgYWRkcmVzc2VzIHRoZSBjaGFsbGVuZ2VzIG9mIGFjaGlldmluZyByb2J1c3Qgb3JkZXJlZCBkZWxpdmVyeSBvZiBkZWZvcm1hYmxlIGJlYWRzIGluIG1pY3JvZmx1aWRpYyBkZXZpY2VzLCBhcyB3ZWxsIGFzIHRoZSBkaWZmaWN1bHR5IGluIGFjaGlldmluZyBoaWdoIHBlcmNlbnRhZ2Ugc2luZ2xldCBlbmNhcHN1bGF0aW9uIHdpdGggYSBjb25zdGFudCBwcmVzc3VyZSBzb3VyY2Ugc3lzdGVtLlwiLFxuICAgICAgcHJvYmxlbUtleXdvcmRzOiBbXCJtaWNyb2ZsdWlkaWNzXCIsIFwiYmVhZHNcIiwgXCJzaW5nbGV0IGVuY2Fwc3VsYXRpb25cIl0sXG4gICAgICBzb2x1dGlvbjogXCJUaGUgaW52ZW50b3JzIGRldmVsb3BlZCBhIG1pY3JvZmx1aWRpYyBkZXZpY2UgdGhhdCBjYW4gcmVsaWFibHkgYWNoaWV2ZSBoaWdoIHBlcmNlbnRhZ2Ugc2luZ2xldCBlbmNhcHN1bGF0aW9uIHdpdGggYSBjb25zdGFudCBwcmVzc3VyZSBzb3VyY2Ugc3lzdGVtLiBUaGlzIHdhcyBhY2hpZXZlZCB0aHJvdWdoIHRoZSBkZXZlbG9wbWVudCBvZiBhIHBpbmNoIGFuZCByZXNlcnZvaXIgc2VxdWVuY2Ugc3lzdGVtIGZvciBiZWFkcyBjb25jZW50cmF0aW5nIGFuZCBkZWxpdmVyeSBmcmVxdWVuY3kgc3RhYmlsaXppbmcsIGFzIHdlbGwgYXMgdGhlIGRlc2lnbiBvZiBhIGxvbmcgZnVubmVsIHRvIGd1aWRlIGFuZCBhbGlnbiBkZWZvcm1hYmxlIGJlYWRzIGludG8gYSBzaW5nbGUgcm93LCBhbmQgYSBjb3JlIGRlc2lnbiB0byBhY2hpZXZlIHNlbGYtcmVndWxhdGVkIGJlYWRzIGluIGRyb3BsZXRzIGVuY2Fwc3VsYXRpb24gd2l0aGluIGEgY29uc3RhbnQgcHJlc3N1cmUgc3lzdGVtLlwiLFxuICAgICAgc29sdXRpb25LZXl3b3JkczogW1wicGluY2ggYW5kIHJlc2Vydm9pclwiLCBcImZ1bm5lbFwiXSxcbiAgICAgIHN1bW1hcnk6IFwiVGhpcyBpbnZlbnRpb24gaW50cm9kdWNlcyBhIG5vdmVsIG1pY3JvZmx1aWRpYyBkZXZpY2UgZGVzaWduZWQgdG8gaW1wcm92ZSB0aGUgaGFuZGxpbmcgYW5kIHByb2Nlc3Npbmcgb2YgZGVmb3JtYWJsZSBiZWFkcyBpbiBhIGNvbnRyb2xsZWQgZW52aXJvbm1lbnQuIFRoZSBkZXZpY2UgZmVhdHVyZXMgYSBzZXJpZXMgb2YgaW5sZXRzIGFuZCBtaWNyb2ZsdWlkaWMgY2hhbm5lbHMgdGhhdCBmYWNpbGl0YXRlIHRoZSBlbmNhcHN1bGF0aW9uIG9mIHRoZXNlIGJlYWRzIGludG8gZHJvcGxldHMsIGEgbWV0aG9kIHRoYXQgaXMgY3J1Y2lhbCBmb3IgYWR2YW5jaW5nIGxhYm9yYXRvcnkgYXNzYXlzIHN1Y2ggYXMgc2luZ2xlLWNlbGwgYW5hbHlzZXMgYW5kIG90aGVyIG1pY3JvcmVhY3RvciBhcHBsaWNhdGlvbnMuXCIsXG4gICAgICBmdWxsdGV4dDogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTWV0aG9kIGFuZCBBcHBhcmF0dXMgZm9yIEltYWdlLUJhc2VkIE5hdmlnYXRpb25cIixcbiAgICAgIGZvbGRlcjogXCJTa2VsZXRhbCBOYXZpZ2F0aW9uXCIsXG4gICAgICB0YWdzOiBbXCJNYXBOYXZcIiwgXCJTdXJnaWNhbFwiXSxcbiAgICAgIHN0YXR1czogXCJQZW5kaW5nXCIsXG4gICAgICBwYXRlbnRJZDogXCJVUzIwMjQwMDI0MDQyQTFcIixcbiAgICAgIHVybDogXCIvZXhhbXBsZXMvVVMyMDI0MDAyNDA0MkExLnBkZlwiLFxuICAgICAgcHJvYmxlbTogXCJcIixcbiAgICAgIHByb2JsZW1LZXl3b3JkczogW10sXG4gICAgICBzb2x1dGlvbjogXCJcIixcbiAgICAgIHNvbHV0aW9uS2V5d29yZHM6IFtdLFxuICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgIGZ1bGx0ZXh0OiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTaW5nbGUgc2lkZWQgbGlnaHQtYWN0dWF0ZWQgbWljcm9mbHVpZGljIGRldmljZSB3aXRoIGludGVncmF0ZWQgbWVzaCBncm91bmRcIixcbiAgICAgIGZvbGRlcjogXCJNaWNyb2ZsdWlkaWNzXCIsXG4gICAgICB0YWdzOiBbXCJNaWNyb2ZsdWlkaWNzXCIsIFwiT3B0b3dldHRpbmdcIl0sXG4gICAgICBzdGF0dXM6IFwiQWN0aXZlXCIsXG4gICAgICBwYXRlbnRJZDogXCJVUzk4MTUwNTZCMlwiLFxuICAgICAgdXJsOiBcIi9leGFtcGxlcy9VUzk4MTUwNTYucGRmXCIsXG4gICAgICBwcm9ibGVtOiBcIlwiLFxuICAgICAgcHJvYmxlbUtleXdvcmRzOiBbXSxcbiAgICAgIHNvbHV0aW9uOiBcIlwiLFxuICAgICAgc29sdXRpb25LZXl3b3JkczogW10sXG4gICAgICBzdW1tYXJ5OiBcIlwiLFxuICAgICAgZnVsbHRleHQ6IFwiXCJcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBhbmFseXplU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdhbmFseXplJyxcbiAgLy8gYGNyZWF0ZVNsaWNlYCB3aWxsIGluZmVyIHRoZSBzdGF0ZSB0eXBlIGZyb20gdGhlIGBpbml0aWFsU3RhdGVgIGFyZ3VtZW50XG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICAvLyBVc2UgdGhlIFBheWxvYWRBY3Rpb24gdHlwZSB0byBkZWNsYXJlIHRoZSBjb250ZW50cyBvZiBgYWN0aW9uLnBheWxvYWRgXG4gICAgc3RvcmVGaWxlOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQYXRlbnRJbmZvPikgPT4ge1xuICAgICAgc3RhdGUuc2VsZWN0ZWRQYXRlbnQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IHN0b3JlRmlsZSB9ID0gYW5hbHl6ZVNsaWNlLmFjdGlvbnNcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFBhdGVudCA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5hbmFseXplLnNlbGVjdGVkUGF0ZW50XG5leHBvcnQgY29uc3QgZXhhbXBsZXMgPSAoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuYW5hbHl6ZS5wYXRlbnRzXG5leHBvcnQgZGVmYXVsdCBhbmFseXplU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlbGVjdGVkUGF0ZW50IiwidGl0bGUiLCJmb2xkZXIiLCJ0YWdzIiwic3RhdHVzIiwicGF0ZW50SWQiLCJ1cmwiLCJwcm9ibGVtIiwicHJvYmxlbUtleXdvcmRzIiwic29sdXRpb24iLCJzb2x1dGlvbktleXdvcmRzIiwic3VtbWFyeSIsImZ1bGx0ZXh0IiwicGF0ZW50cyIsImFuYWx5emVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInN0b3JlRmlsZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJhbmFseXplIiwiZXhhbXBsZXMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/features/analyzeSlice.tsx\n"));

/***/ })

});