module.exports = {

"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Card": ()=>Card,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Card({ title, description, footer, className, children, actions }) {
    const hasHeader = title || description || actions;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('surface-card flex flex-col', className),
        children: [
            hasHeader && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-100/80 p-6 pb-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "space-y-1.5",
                        children: [
                            title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                className: "text-lg font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/card.tsx>",
                                lineNumber: 20,
                                columnNumber: 22
                            }, this) : null,
                            description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-sm text-slate-600",
                                children: description
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/card.tsx>",
                                lineNumber: 21,
                                columnNumber: 28
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/ui/card.tsx>",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    actions ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center gap-2",
                        children: actions
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/card.tsx>",
                        lineNumber: 23,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/ui/card.tsx>",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('flex flex-1 flex-col', hasHeader ? 'p-6 pt-0' : 'p-0'),
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/card.tsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            footer ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "border-t border-slate-200 p-6 pt-4",
                children: footer
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/card.tsx>",
                lineNumber: 27,
                columnNumber: 17
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('flex flex-col space-y-1.5 p-6', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
function CardTitle({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('text-lg font-semibold leading-none tracking-tight text-slate-900', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
function CardDescription({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('text-sm text-slate-600', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
function CardContent({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('p-6 pt-0', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
function CardFooter({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('flex items-center border-t border-slate-200 p-6 pt-4', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}

})()),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Input({ className, error, fullWidth, type = 'text', ...props }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
        ref: ref,
        type: type,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('flex h-10 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900', 'placeholder:text-slate-400', 'transition-colors', 'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20', 'disabled:cursor-not-allowed disabled:opacity-50', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', fullWidth && 'w-full', className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/input.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
});

})()),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Select": ()=>Select
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronDown$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) {export default as ChevronDown}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Select({ className, error, fullWidth, children, ...props }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('relative', fullWidth && 'w-full'),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                ref: ref,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('flex h-10 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2 pr-10 text-sm text-slate-900', 'transition-colors', 'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20', 'disabled:cursor-not-allowed disabled:opacity-50', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', className),
                ...props,
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/select.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronDown$7d$__["ChevronDown"], {
                className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/select.tsx>",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/select.tsx>",
        lineNumber: 18,
        columnNumber: 5
    }, this);
});

})()),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
const variantStyles = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-sm shadow-emerald-500/20',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300',
    outline: 'border-2 border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 active:bg-slate-100',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200',
    destructive: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 shadow-sm shadow-red-500/20'
};
const sizeStyles = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
    icon: 'h-10 w-10'
};
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Button({ className, variant = 'primary', size = 'md', loading = false, asChild = false, children, disabled, ...props }, ref) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Comp, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"](baseStyles, variantStyles[variant], sizeStyles[size], className),
        disabled: disabled || loading,
        ...props,
        children: loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                    className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/button.tsx>",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/button.tsx>",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true) : children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/button.tsx>",
        lineNumber: 43,
        columnNumber: 5
    }, this);
});

})()),
"[project]/src/features/inventory/components/filters-preview.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FiltersPreview": ()=>InventoryFilters,
    "InventoryFilters": ()=>InventoryFilters
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$wide$2d$narrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowDownWideNarrow$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-wide-narrow.js [app-ssr] (ecmascript) {export default as ArrowDownWideNarrow}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RotateCcw$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) {export default as RotateCcw}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) {export default as Search}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RefreshCw$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) {export default as RefreshCw}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileSpreadsheet$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-ssr] (ecmascript) {export default as FileSpreadsheet}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const FILTER_LABELS = {
    location: 'Sede',
    process: 'Servicio',
    status: 'Estado',
    classification: 'Clasificación',
    invimaStatus: 'Invima',
    category: 'Categoría',
    riskClass: 'Clase de riesgo'
};
const FILTER_PLACEHOLDERS = {
    location: 'Todas las sedes',
    process: 'Todos los servicios',
    status: 'Todos los estados',
    classification: 'Todas las clasificaciones',
    invimaStatus: 'Todos',
    category: 'Todas las categorías',
    riskClass: 'Todas las clases'
};
const FALLBACK_FILTERS = {
    location: 'all',
    process: 'all',
    status: 'all',
    classification: 'all',
    invimaStatus: 'all',
    category: 'all',
    riskClass: 'all'
};
function InventoryFilters({ search = '', onSearchChange = ()=>{}, filters = FALLBACK_FILTERS, onFilterChange = ()=>{}, options, activeFiltersCount = 0, onReset = ()=>{}, onSubmit = ()=>{}, onRefresh = ()=>{}, onExport = ()=>{}, canExport = true, isLoading = false }) {
    const resolvedOptions = options ?? {
        locations: [],
        processes: [],
        statuses: [],
        classifications: [],
        invimaStatuses: [],
        categories: [],
        riskClasses: []
    };
    const firstRowFilters = [
        {
            key: 'location',
            data: resolvedOptions.locations
        },
        {
            key: 'process',
            data: resolvedOptions.processes
        }
    ];
    const secondRowFilters = [
        {
            key: 'status',
            data: resolvedOptions.statuses
        },
        {
            key: 'classification',
            data: resolvedOptions.classifications
        },
        {
            key: 'invimaStatus',
            data: resolvedOptions.invimaStatuses
        },
        {
            key: 'category',
            data: resolvedOptions.categories
        },
        {
            key: 'riskClass',
            data: resolvedOptions.riskClasses
        }
    ];
    const activeFilters = Object.entries(filters).filter(([, value])=>value !== 'all');
    const hasFiltersApplied = activeFiltersCount > 0 || search.length > 0;
    const totalActiveFilters = activeFiltersCount + (search ? 1 : 0);
    const filtersSummaryList = activeFilters.map(([key])=>FILTER_LABELS[key]);
    if (search) {
        filtersSummaryList.unshift('Búsqueda por texto');
    }
    const handleSubmit = ()=>{
        onSubmit();
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "bg-white p-6",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "grid gap-4 md:grid-cols-[minmax(0,_2fr)_minmax(0,_1fr)] md:items-end",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-full space-y-2 text-sm",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        className: "text-sm font-medium text-slate-700",
                                        htmlFor: "inventory-search",
                                        children: "Buscar equipo"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                                className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "inventory-search",
                                                fullWidth: true,
                                                value: search,
                                                onChange: (event)=>onSearchChange(event.target.value),
                                                onKeyDown: (event)=>{
                                                    if (event.key === 'Enter') {
                                                        event.preventDefault();
                                                        handleSubmit();
                                                    }
                                                },
                                                placeholder: "Código interno, IPS, ECRI, nombre, marca, modelo o serie",
                                                className: "h-11 rounded-2xl border-slate-200 bg-white pl-11 text-slate-900",
                                                "aria-label": "Buscar equipo"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                lineNumber: 118,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "grid w-full gap-4 sm:grid-cols-2",
                                children: firstRowFilters.map(({ key, data })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "space-y-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                className: "font-medium text-slate-700",
                                                htmlFor: `filter-${key}`,
                                                children: FILTER_LABELS[key]
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                id: `filter-${key}`,
                                                value: filters[key],
                                                onChange: (event)=>onFilterChange(key, event.target.value),
                                                className: "h-11 rounded-2xl border-slate-200 bg-white text-slate-900",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                        value: "all",
                                                        children: FILTER_PLACEHOLDERS[key]
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    data.map((option)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                            value: option,
                                                            children: option
                                                        }, option, false, {
                                                            fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "grid gap-4 md:grid-cols-3 lg:grid-cols-5",
                        children: secondRowFilters.map(({ key, data })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-2 text-sm",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                        className: "font-medium text-slate-700",
                                        htmlFor: `filter-${key}`,
                                        children: FILTER_LABELS[key]
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        id: `filter-${key}`,
                                        value: filters[key],
                                        onChange: (event)=>onFilterChange(key, event.target.value),
                                        className: "h-11 rounded-2xl border-slate-200 bg-white text-slate-900",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                value: "all",
                                                children: FILTER_PLACEHOLDERS[key]
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this),
                                            data.map((option)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                    value: option,
                                                    children: option
                                                }, option, false, {
                                                    fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "mt-6 rounded-2xl bg-slate-100 p-4 text-sm text-slate-600 md:flex md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$wide$2d$narrow$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ArrowDownWideNarrow$7d$__["ArrowDownWideNarrow"], {
                                className: "h-4 w-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            hasFiltersApplied ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                children: [
                                    totalActiveFilters,
                                    " filtros activos",
                                    filtersSummaryList.length > 0 ? ` · ${filtersSummaryList.join(', ')}` : null
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                children: "No hay filtros activos"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mt-3 flex flex-wrap items-center gap-2 text-sm md:mt-0",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2 text-slate-600",
                                onClick: onReset,
                                disabled: !hasFiltersApplied,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RotateCcw$7d$__["RotateCcw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    "Limpiar"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2 border border-slate-200 text-slate-600",
                                onClick: onExport,
                                disabled: !canExport,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileSpreadsheet$7d$__["FileSpreadsheet"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this),
                                    "Exportar Excel"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "gap-2 border border-slate-200 text-slate-600",
                                onClick: onRefresh,
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__RefreshCw$7d$__["RefreshCw"], {
                                        className: `h-4 w-4 ${isLoading ? 'animate-spin' : ''}`
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    "Actualizar"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                className: "gap-2",
                                onClick: handleSubmit,
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    "Buscar"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
                lineNumber: 184,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/features/inventory/components/filters-preview.tsx>",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
;

})()),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Badge": ()=>Badge
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const variantStyles = {
    default: 'bg-slate-100 text-slate-700 border-slate-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    error: 'bg-red-50 text-red-700 border-red-200',
    info: 'bg-blue-50 text-blue-700 border-blue-200',
    secondary: 'bg-brand-50 text-brand-700 border-brand-200'
};
const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base'
};
function Badge({ variant = 'default', size = 'md', className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('inline-flex items-center justify-center rounded-full border font-medium', variantStyles[variant], sizeStyles[size], className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/badge.tsx>",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Checkbox": ()=>Checkbox
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Checkbox = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](function Checkbox({ className, label, ...props }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
        className: "inline-flex cursor-pointer items-center gap-2",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                ref: ref,
                type: "checkbox",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('h-4 w-4 rounded border-slate-300 text-cyan-500', 'focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-0', 'cursor-pointer transition-colors', 'disabled:cursor-not-allowed disabled:opacity-50', className),
                ...props
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/checkbox.tsx>",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            label && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "text-sm text-slate-700",
                children: label
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/checkbox.tsx>",
                lineNumber: 29,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/checkbox.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
});

})()),
"[project]/src/features/inventory/components/equipment-table.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EquipmentTable": ()=>EquipmentTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-ssr] (ecmascript) {export default as AlertCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Image$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) {export default as Image}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) {export default as MapPin}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Package2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package-2.js [app-ssr] (ecmascript) {export default as Package2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__PencilLine$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-ssr] (ecmascript) {export default as PencilLine}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Building2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) {export default as Building2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) {export default as ShieldCheck}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldX$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield-x.js [app-ssr] (ecmascript) {export default as ShieldX}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) {export default as User}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const statusVariant = (status)=>{
    return status === 'Activo' ? 'success' : 'error';
};
const invimaVariant = (status)=>{
    return status === 'Con registro' ? 'success' : 'warning';
};
const shouldDisplayField = (value)=>{
    if (!value) return false;
    const normalized = value.trim();
    if (normalized.length === 0) return false;
    return normalized.toUpperCase() !== 'N/A';
};
const desktopColumns = [
    {
        key: 'codes',
        label: 'Codigos',
        width: '8%',
        align: 'center',
        render: (item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        size: "sm",
                        variant: "info",
                        className: "font-mono",
                        children: item.ipsCode
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                        size: "sm",
                        variant: "success",
                        className: "font-mono",
                        children: item.code
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 66,
                columnNumber: 7
            }, this)
    },
    {
        key: 'equipment',
        label: 'Equipo',
        width: '16%',
        align: 'center',
        render: (item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-1 text-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "font-semibold text-slate-900",
                        children: item.name
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    shouldDisplayField(item.provider) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-xs text-slate-500",
                        children: item.provider
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 84,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 82,
                columnNumber: 7
            }, this)
    },
    {
        key: 'location',
        label: 'Ubicación',
        width: '20%',
        align: 'center',
        render: (item)=>{
            const rows = [
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Building2$7d$__["Building2"],
                    value: item.location,
                    textClass: 'text-slate-700'
                },
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"],
                    value: item.process,
                    textClass: 'text-slate-500'
                },
                {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__["User"],
                    value: item.assignedTo,
                    textClass: 'text-slate-700'
                }
            ].filter((row)=>shouldDisplayField(row.value));
            if (rows.length === 0) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-xs text-slate-400",
                    children: "Sin información"
                }, void 0, false, {
                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                    lineNumber: 113,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-2 text-sm",
                children: rows.map((row, index)=>{
                    const Icon = row.icon;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('inline-flex items-start gap-2', row.textClass),
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                    className: "mt-0.5 h-4 w-4 text-slate-400"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 123,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "max-w-[10rem] text-center leading-snug",
                                    children: row.value
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 124,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 122,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 121,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 117,
                columnNumber: 9
            }, this);
        }
    },
    {
        key: 'brand',
        label: 'Especificaciones',
        width: '15%',
        align: 'center',
        render: (item)=>{
            const hasBrand = shouldDisplayField(item.brand);
            const hasModel = shouldDisplayField(item.model);
            const hasSerial = shouldDisplayField(item.serial);
            if (!hasBrand && !hasModel && !hasSerial) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-xs text-slate-400",
                    children: "Sin detalles"
                }, void 0, false, {
                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                    lineNumber: 144,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-1 text-center text-sm",
                children: [
                    hasBrand && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "font-semibold text-slate-900",
                        children: item.brand
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 149,
                        columnNumber: 24
                    }, this),
                    hasModel && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-xs text-slate-500",
                        children: item.model
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 150,
                        columnNumber: 24
                    }, this),
                    hasSerial && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            size: "sm",
                            variant: "secondary",
                            className: "font-mono",
                            children: item.serial
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 153,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 148,
                columnNumber: 9
            }, this);
        }
    },
    {
        key: 'classification',
        label: 'Clasificación',
        width: '12%',
        align: 'center',
        render: (item)=>{
            const showClassification = shouldDisplayField(item.classification);
            const showMission = shouldDisplayField(item.missionClassification);
            if (!showClassification && !showMission) {
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-xs text-slate-400",
                    children: "Sin clasificación"
                }, void 0, false, {
                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                    lineNumber: 172,
                    columnNumber: 16
                }, this);
            }
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-3 text-sm",
                children: [
                    showClassification && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                            size: "sm",
                            variant: "info",
                            children: item.classification
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 179,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 178,
                        columnNumber: 13
                    }, this),
                    showMission && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                            className: "max-w-[10rem] text-center text-sm font-medium text-slate-900 leading-snug",
                            children: item.missionClassification
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 176,
                columnNumber: 9
            }, this);
        }
    },
    {
        key: 'invima',
        label: 'Invima',
        width: '7%',
        align: 'center',
        render: (item)=>{
            const hasCertificate = item.invimaStatus === 'Con registro';
            const Icon = hasCertificate ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__["ShieldCheck"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldX$7d$__["ShieldX"];
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-2 text-center text-sm",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('rounded-full p-1.5', hasCertificate ? 'text-emerald-500' : 'text-slate-400'),
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "sr-only",
                                    children: hasCertificate ? 'Con registro Invima' : 'Sin registro Invima'
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    item.riskClass && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "space-y-1",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                size: "sm",
                                variant: "secondary",
                                children: item.riskClass
                            }, void 0, false, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 204,
                columnNumber: 9
            }, this);
        }
    },
    {
        key: 'status',
        label: 'Estado',
        width: '7%',
        align: 'center',
        render: (item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                size: "sm",
                variant: statusVariant(item.status),
                children: item.status
            }, void 0, false, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 230,
                columnNumber: 7
            }, this)
    },
    {
        key: 'actions',
        label: 'Acciones',
        width: '7%',
        align: 'center',
        render: ()=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600",
                        "aria-label": "Gestionar imágenes",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Image$7d$__["Image"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-amber-200 hover:text-amber-600",
                        "aria-label": "Editar registro",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__PencilLine$7d$__["PencilLine"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                        className: "rounded-xl border border-slate-200 p-2 text-slate-500 transition hover:border-emerald-200 hover:text-emerald-600",
                        "aria-label": "Ver hoja de vida",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 241,
                columnNumber: 7
            }, this)
    }
];
function EquipmentTable({ equipment, filteredTotal, total, page, pageSize, totalPages, onPageChange, onExportSelected, className, emptyMessage = 'No se encontraron equipos con los filtros aplicados.' }) {
    const [selectedIds, setSelectedIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const selectAllRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        setSelectedIds((prev)=>prev.filter((id)=>equipment.some((item)=>item.id === id)));
    }, [
        equipment
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!selectAllRef.current) return;
        selectAllRef.current.indeterminate = selectedIds.length > 0 && selectedIds.length < equipment.length;
    }, [
        selectedIds,
        equipment.length
    ]);
    const isAllSelected = equipment.length > 0 && selectedIds.length === equipment.length;
    const toggleSelectAll = ()=>{
        if (isAllSelected) {
            setSelectedIds([]);
            return;
        }
        setSelectedIds(equipment.map((item)=>item.id));
    };
    const toggleSelect = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((value)=>value !== id) : [
                ...prev,
                id
            ]);
    };
    const clearSelection = ()=>setSelectedIds([]);
    const handleExportSelected = ()=>{
        if (selectedIds.length === 0) return;
        onExportSelected?.(selectedIds);
    };
    const rangeStart = filteredTotal === 0 ? 0 : (page - 1) * pageSize + 1;
    const rangeEnd = filteredTotal === 0 ? 0 : rangeStart + equipment.length - 1;
    const handlePrevPage = ()=>{
        if (page === 1) return;
        onPageChange?.(page - 1);
    };
    const handleNextPage = ()=>{
        if (page >= totalPages) return;
        onPageChange?.(page + 1);
    };
    const emptyState = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex flex-col items-center gap-3 px-6 py-12 text-center text-slate-500",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__["AlertCircle"], {
                className: "h-12 w-12 text-slate-300"
            }, void 0, false, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-base font-semibold text-slate-700",
                        children: "Sin resultados"
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-sm text-slate-500",
                        children: emptyMessage
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            selectedIds.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                size: "sm",
                onClick: clearSelection,
                children: "Limpiar selección"
            }, void 0, false, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 322,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
        lineNumber: 315,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('overflow-hidden rounded-2xl border border-slate-200 bg-white', className),
        children: [
            selectedIds.length > 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-col gap-2 border-b border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 lg:flex-row lg:items-center lg:justify-between",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "font-semibold",
                                children: [
                                    selectedIds.length,
                                    " equipo",
                                    selectedIds.length > 1 ? 's' : '',
                                    " seleccionado",
                                    selectedIds.length > 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                className: "text-sm font-medium text-emerald-700 hover:underline",
                                onClick: clearSelection,
                                children: "Deseleccionar todo"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            size: "sm",
                            className: "border border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50",
                            onClick: handleExportSelected,
                            disabled: !onExportSelected,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this),
                                " Exportar seleccionados"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 340,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 332,
                columnNumber: 9
            }, this),
            filteredTotal === 0 ? emptyState : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "w-full overflow-x-auto",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                                className: "min-w-full table-auto text-sm",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("colgroup", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("col", {
                                                style: {
                                                    width: '2%'
                                                }
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this),
                                            desktopColumns.map((column)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("col", {
                                                    style: {
                                                        width: column.width
                                                    }
                                                }, column.key, false, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                            className: "border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                    className: "px-3 py-4 text-center",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex justify-center",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                            ref: selectAllRef,
                                                            checked: isAllSelected,
                                                            onChange: toggleSelectAll,
                                                            "aria-label": "Seleccionar todos"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 370,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 368,
                                                    columnNumber: 21
                                                }, this),
                                                desktopColumns.map((column)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('px-4 py-4 text-xs font-semibold uppercase tracking-wide text-slate-600', column.align === 'center' ? 'text-center' : 'text-left'),
                                                        children: column.label
                                                    }, column.key, false, {
                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                        lineNumber: 374,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                            lineNumber: 367,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                        lineNumber: 366,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                                        className: "divide-y divide-slate-100",
                                        children: equipment.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                className: "hover:bg-emerald-50/30",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                        className: "px-3 py-4 text-center align-middle",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex justify-center",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                                checked: selectedIds.includes(item.id),
                                                                onChange: ()=>toggleSelect(item.id),
                                                                "aria-label": `Seleccionar ${item.name}`
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                lineNumber: 391,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 390,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                        lineNumber: 389,
                                                        columnNumber: 23
                                                    }, this),
                                                    desktopColumns.map((column)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]('px-4 py-4 align-middle text-slate-700', column.align === 'center' ? 'text-center' : 'text-left'),
                                                            children: column.render(item)
                                                        }, column.key, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 395,
                                                            columnNumber: 25
                                                        }, this))
                                                ]
                                            }, item.id, true, {
                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                lineNumber: 388,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                        lineNumber: 386,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 357,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "divide-y divide-slate-200 lg:hidden",
                        children: equipment.map((item)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "space-y-4 px-4 py-5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            checked: selectedIds.includes(item.id),
                                            onChange: ()=>toggleSelect(item.id),
                                            "aria-label": `Seleccionar ${item.name}`
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex-1 text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-base font-semibold text-slate-900",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 417,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "font-mono text-xs text-slate-500",
                                                                    children: item.code
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 418,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 416,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            size: "sm",
                                                            variant: statusVariant(item.status),
                                                            children: item.status
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 415,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mt-3 grid gap-2 text-sm text-slate-600",
                                                    children: [
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Building2$7d$__["Building2"],
                                                            label: item.location
                                                        },
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__MapPin$7d$__["MapPin"],
                                                            label: item.process
                                                        },
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__User$7d$__["User"],
                                                            label: item.assignedTo
                                                        },
                                                        {
                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Package2$7d$__["Package2"],
                                                            label: item.category
                                                        }
                                                    ].filter((info)=>shouldDisplayField(info.label)).map((info, index)=>{
                                                        const Icon = info.icon;
                                                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex justify-center",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "inline-flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                                                        className: "mt-0.5 h-4 w-4 text-slate-400"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                        lineNumber: 444,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "max-w-[14rem] text-center leading-snug",
                                                                        children: info.label
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                        lineNumber: 445,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                lineNumber: 443,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, index, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 442,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 424,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mt-3 space-y-3 rounded-2xl bg-slate-50 p-3 text-sm",
                                                    children: [
                                                        shouldDisplayField(item.missionClassification) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-[11px] uppercase tracking-wide text-slate-400",
                                                                    children: "Eje misional"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 454,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "font-semibold text-slate-900",
                                                                    children: item.missionClassification
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 455,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 453,
                                                            columnNumber: 25
                                                        }, this),
                                                        (shouldDisplayField(item.brand) || shouldDisplayField(item.model) || shouldDisplayField(item.serial)) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-[11px] uppercase tracking-wide text-slate-400",
                                                                    children: "Marca · Modelo · Serie"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 460,
                                                                    columnNumber: 27
                                                                }, this),
                                                                shouldDisplayField(item.brand) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "font-semibold text-slate-900",
                                                                    children: item.brand
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 461,
                                                                    columnNumber: 62
                                                                }, this),
                                                                shouldDisplayField(item.model) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: item.model
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 462,
                                                                    columnNumber: 62
                                                                }, this),
                                                                shouldDisplayField(item.serial) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    size: "sm",
                                                                    variant: "secondary",
                                                                    className: "font-mono",
                                                                    children: item.serial
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 464,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 459,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "flex flex-wrap items-center justify-center gap-2",
                                                            children: [
                                                                shouldDisplayField(item.classification) && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    size: "sm",
                                                                    variant: "info",
                                                                    children: item.classification
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 472,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "rounded-full border border-slate-200 p-2",
                                                                    children: item.invimaStatus === 'Con registro' ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldCheck$7d$__["ShieldCheck"], {
                                                                        className: "h-4 w-4 text-emerald-500"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                        lineNumber: 478,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__ShieldX$7d$__["ShieldX"], {
                                                                        className: "h-4 w-4 text-slate-400"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                        lineNumber: 480,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 476,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item.riskClass && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    size: "sm",
                                                                    variant: "secondary",
                                                                    children: item.riskClass
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                    lineNumber: 484,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 470,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mt-3 flex items-center justify-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                            className: "rounded-xl border border-slate-200 p-2 text-slate-500",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Image$7d$__["Image"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                lineNumber: 492,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 491,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                            className: "rounded-xl border border-slate-200 p-2 text-slate-500",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__PencilLine$7d$__["PencilLine"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                lineNumber: 495,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 494,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                            className: "rounded-xl border border-slate-200 p-2 text-slate-500",
                                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                                lineNumber: 498,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                                    lineNumber: 490,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this)
                            }, item.id, false, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 411,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "border-t border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: filteredTotal === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                children: [
                                    "Sin equipos para mostrar · ",
                                    total,
                                    " en catálogo"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 513,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                children: [
                                    "Mostrando ",
                                    rangeStart,
                                    "-",
                                    rangeEnd,
                                    " de ",
                                    filteredTotal,
                                    " equipos · Catálogo total: ",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                lineNumber: 515,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handlePrevPage,
                                    disabled: page === 1,
                                    children: "Anterior"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-slate-500",
                                    children: [
                                        "Página ",
                                        page,
                                        " de ",
                                        totalPages
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: handleNextPage,
                                    disabled: page >= totalPages,
                                    children: "Siguiente"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                    lineNumber: 510,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
                lineNumber: 509,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/features/inventory/components/equipment-table.tsx>",
        lineNumber: 330,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/features/inventory/data/mock-equipment.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "equipmentInventory": ()=>equipmentInventory
});
const equipmentInventory = [
    {
        id: 'eq-001',
        code: '71246',
        ipsCode: 'BIO-16452',
        name: 'Agitador Vórtex',
        brand: 'Scientific Industries',
        model: 'G-560',
        serial: '2-218817',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Inmunohistoquímica',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-08-15',
        nextMaintenance: '2025-12-15',
        assignedTo: 'Martha Londoño',
        provider: 'Scientific Industries',
        warrantyActive: false
    },
    {
        id: 'eq-002',
        code: '149289',
        ipsCode: 'Pendiente',
        name: 'Aire Acondicionado',
        brand: 'LG',
        model: 'P131CM',
        serial: '305CYYQ00562',
        location: 'Cuarto criostato',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Climatización',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Soporte clínico',
        classification: 'IND',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-10',
        nextMaintenance: '2025-11-10',
        assignedTo: 'Juliana',
        provider: 'Comercial y servicios Larco S.A.S',
        warrantyActive: false
    },
    {
        id: 'eq-003',
        code: '163471',
        ipsCode: 'Pendiente',
        name: 'Aire Acondicionado Residentes',
        brand: 'LG',
        model: 'LP1214GXR',
        serial: '511CYTB00105',
        location: 'Salón de residentes',
        missionClassification: 'N/A',
        process: 'Patología',
        area: 'Apoyo académico',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Por vencer',
        category: 'Soporte clínico',
        classification: 'IND',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-22',
        nextMaintenance: '2025-11-30',
        assignedTo: 'Patólogos, residentes y personal del almacén',
        provider: 'Comercial y servicios Larco S.A.S',
        warrantyActive: false
    },
    {
        id: 'eq-004',
        code: '167302 / 064529',
        ipsCode: 'Pendiente',
        name: 'Aire Acondicionado Secretaría',
        brand: 'LG',
        model: 'LP1214GXR',
        serial: '603CYNL00223',
        location: 'Secretaría principal',
        missionClassification: 'N/A',
        process: 'Patología',
        area: 'Administrativo',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Soporte clínico',
        classification: 'IND',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-05',
        nextMaintenance: '2025-11-05',
        assignedTo: 'Secretarias y personal del almacén',
        provider: 'Comercial y servicios Larco S.A.S',
        warrantyActive: false
    },
    {
        id: 'eq-005',
        code: '109414 / 063762',
        ipsCode: 'BIO-16453',
        name: 'Balanza Analítica',
        brand: 'A&D Company',
        model: 'HR-200',
        serial: '12312707',
        location: 'Histoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Control de masas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Alta',
        calibrationStatus: 'Al día',
        category: 'Control de calidad',
        classification: 'BIO',
        riskClass: 'Clase I',
        invimaStatus: 'Con registro',
        lastMaintenance: '2025-08-02',
        nextMaintenance: '2025-11-28',
        assignedTo: 'Juliana',
        provider: 'A&D Company',
        warrantyActive: false
    },
    {
        id: 'eq-006',
        code: '072235',
        ipsCode: 'BIO-16454',
        name: 'Balanza Analítica',
        brand: 'A&D Company',
        model: 'HA-202M',
        serial: '10400268',
        location: 'Cuarto criostato',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Control de masas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Alta',
        calibrationStatus: 'Por vencer',
        category: 'Control de calidad',
        classification: 'BIO',
        riskClass: 'Clase I',
        invimaStatus: 'Con registro',
        lastMaintenance: '2025-08-25',
        nextMaintenance: '2025-12-10',
        assignedTo: 'Juliana',
        provider: 'A&D Company',
        warrantyActive: false
    },
    {
        id: 'eq-007',
        code: '170369 / 063749',
        ipsCode: 'BIO-16455',
        name: 'Balanza de precisión',
        brand: 'BBG',
        model: 'S1',
        serial: '6110090',
        location: 'Corte macro',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Pesaje general',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Control de calidad',
        classification: 'BIO',
        invimaStatus: 'Con registro',
        lastMaintenance: '2025-08-12',
        nextMaintenance: '2025-12-01',
        assignedTo: 'Juliana',
        provider: 'BBG',
        warrantyActive: false
    },
    {
        id: 'eq-008',
        code: '3 / 305660300 / 063768',
        ipsCode: 'BIO-16456',
        name: 'Baño de Flotación',
        brand: 'J.P Selecta',
        model: 'Termofin',
        serial: '0355033',
        location: 'Histoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Preparación de láminas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-30',
        nextMaintenance: '2025-11-25',
        assignedTo: 'Juliana',
        provider: 'J.P Selecta',
        warrantyActive: false
    },
    {
        id: 'eq-009',
        code: '6 / 168099 / 061549',
        ipsCode: 'BIO-16457',
        name: 'Baño de Flotación',
        brand: 'Lupetec',
        model: 'BH2015',
        serial: '160140',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Preparación de láminas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Por vencer',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-05',
        nextMaintenance: '2025-11-05',
        assignedTo: 'Martha Londoño',
        provider: 'Lupetec',
        warrantyActive: false
    },
    {
        id: 'eq-010',
        code: '7 / 168100 / 063776',
        ipsCode: 'BIO-16458',
        name: 'Baño de Flotación',
        brand: 'Lupetec',
        model: 'BH2015',
        serial: '160141',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Preparación de láminas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-08-08',
        nextMaintenance: '2025-12-02',
        assignedTo: 'Martha Londoño',
        provider: 'Lupetec',
        warrantyActive: false
    },
    {
        id: 'eq-011',
        code: '1 / 305660200 / 063770',
        ipsCode: 'BIO-16459',
        name: 'Baño de Flotación',
        brand: 'J.P Selecta',
        model: 'Termofin',
        serial: '409366',
        location: 'Histotécnica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Preparación de láminas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-18',
        nextMaintenance: '2025-11-20',
        assignedTo: 'Juliana',
        provider: 'J.P Selecta',
        warrantyActive: false
    },
    {
        id: 'eq-012',
        code: '2 / 305660100 / 061547',
        ipsCode: 'BIO-16460',
        name: 'Baño de Flotación',
        brand: 'Selecta',
        model: 'Termofin',
        serial: '355032',
        location: 'Histotécnica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Preparación de láminas',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Por vencer',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-01',
        nextMaintenance: '2025-10-29',
        assignedTo: 'Juliana',
        provider: 'Selecta',
        warrantyActive: false
    },
    {
        id: 'eq-013',
        code: '146832',
        ipsCode: 'BIO-16461',
        name: 'Baño María',
        brand: 'Indulab',
        model: 'N/I',
        serial: '13539',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Procesamiento térmico',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-08-04',
        nextMaintenance: '2025-12-03',
        assignedTo: 'Martha Londoño',
        provider: 'Indulab',
        warrantyActive: false
    },
    {
        id: 'eq-014',
        code: '305703300 / 063771',
        ipsCode: 'BIO-16462',
        name: 'Baño María',
        brand: 'Memmert',
        model: 'WB7',
        serial: '12.010.372',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Procesamiento térmico',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Por vencer',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-09-01',
        nextMaintenance: '2025-12-20',
        assignedTo: 'Martha Londoño',
        provider: 'Memmert',
        warrantyActive: false
    },
    {
        id: 'eq-015',
        code: '073938 / 063782',
        ipsCode: 'BIO-16519',
        name: 'Baño María 70 ºC',
        brand: 'Indulab',
        model: '009B',
        serial: '3244',
        location: 'Inmunohistoquímica',
        missionClassification: 'Investigación',
        process: 'Patología',
        area: 'Procesamiento térmico',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Media',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-08-21',
        nextMaintenance: '2025-12-18',
        assignedTo: 'Jesica y Juliana',
        provider: 'Indulab',
        warrantyActive: false
    },
    {
        id: 'eq-016',
        code: '29546',
        ipsCode: 'Pendiente',
        name: 'Centrífuga',
        brand: 'Clay Adams',
        model: 'N/I',
        serial: 'A114043',
        location: 'Almacén',
        missionClassification: 'N/A',
        process: 'Patología',
        area: 'Procesamiento básico',
        status: 'Inactivo',
        maintenanceType: 'Correctivo',
        criticality: 'Media',
        calibrationStatus: 'Expirada',
        category: 'Laboratorio',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-05-12',
        nextMaintenance: '2025-10-10',
        assignedTo: 'Jesica y Juliana',
        provider: 'Clay Adams',
        warrantyActive: false
    },
    {
        id: 'eq-017',
        code: '122967',
        ipsCode: 'BIO-16463',
        name: 'Citocentrífuga',
        brand: 'Thermo Scientific',
        model: 'Shandon Cytospin 4',
        serial: 'CY3310-0601',
        location: 'Histoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Procesamiento celular',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Alta',
        calibrationStatus: 'Al día',
        category: 'Laboratorio',
        classification: 'BIO',
        riskClass: 'Clase IIa',
        invimaStatus: 'Con registro',
        lastMaintenance: '2025-09-05',
        nextMaintenance: '2025-12-05',
        assignedTo: 'Juliana',
        provider: 'Thermo Scientific',
        warrantyActive: false
    },
    {
        id: 'eq-018',
        code: '131255 / 063778',
        ipsCode: 'Pendiente',
        name: 'Congelador',
        brand: 'Indufrial',
        model: 'ICVS-15',
        serial: '685959',
        location: 'Cuarto criostato (contingencia)',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Cadena de frío',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Alta',
        calibrationStatus: 'Por vencer',
        category: 'Cadena de frío',
        classification: 'IND',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-08-10',
        nextMaintenance: '2025-12-08',
        assignedTo: 'Juliana',
        provider: 'Indufrial',
        warrantyActive: false
    },
    {
        id: 'eq-019',
        code: '73709',
        ipsCode: 'BIO-16520',
        name: 'Congelador',
        brand: 'Philips',
        model: 'WCV900AF6510',
        serial: 'N/I',
        location: 'Inmunohistoquímica',
        missionClassification: 'Extensión e Investigación',
        process: 'Patología',
        area: 'Cadena de frío',
        status: 'Activo',
        maintenanceType: 'Preventivo',
        criticality: 'Alta',
        calibrationStatus: 'Al día',
        category: 'Cadena de frío',
        classification: 'IND',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-07-16',
        nextMaintenance: '2025-11-14',
        assignedTo: 'Martha Londoño',
        provider: 'Philips',
        warrantyActive: false
    },
    {
        id: 'eq-020',
        code: '114982',
        ipsCode: 'BIO-16521',
        name: 'Criostato histotécnico',
        brand: 'Leica',
        model: 'CM1850-3-1',
        serial: '47131148',
        location: 'Área histotécnica',
        missionClassification: 'N/A',
        process: 'Patología',
        area: 'Criostomía',
        status: 'Inactivo',
        maintenanceType: 'Correctivo',
        criticality: 'Alta',
        calibrationStatus: 'Expirada',
        category: 'Diagnóstico',
        classification: 'BIO',
        invimaStatus: 'Sin registro',
        lastMaintenance: '2025-04-30',
        nextMaintenance: '2025-09-30',
        assignedTo: 'Jesica y Juliana',
        provider: 'Leica Biosystems',
        warrantyActive: false
    }
];

})()),
"[project]/src/features/inventory/hooks/use-equipment-inventory.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEquipmentInventory": ()=>useEquipmentInventory
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$data$2f$mock$2d$equipment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/inventory/data/mock-equipment.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const DEFAULT_FILTERS = {
    location: 'all',
    process: 'all',
    status: 'all',
    classification: 'all',
    invimaStatus: 'all',
    category: 'all',
    riskClass: 'all'
};
const PAGE_SIZE = 8;
const uniqueValues = (key)=>{
    return Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$data$2f$mock$2d$equipment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equipmentInventory"].map((item)=>item[key]))).sort();
};
const determineStatusBucket = (item)=>{
    if (item.status === 'Operativo') return 'operativo';
    if (item.status === 'Fuera de servicio') return 'fuera';
    if (item.status.includes('Correctivo') || item.maintenanceType === 'Correctivo') return 'correctivo';
    return 'preventivo';
};
function useEquipmentInventory() {
    const [search, setSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const [filters, setFilters] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](DEFAULT_FILTERS);
    const [page, setPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](1);
    const availableFilters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            locations: uniqueValues('location'),
            processes: uniqueValues('process'),
            statuses: uniqueValues('status'),
            classifications: uniqueValues('classification'),
            invimaStatuses: uniqueValues('invimaStatus'),
            categories: uniqueValues('category'),
            riskClasses: uniqueValues('riskClass')
        }), []);
    const filteredEquipment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const query = search.trim().toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$data$2f$mock$2d$equipment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equipmentInventory"].filter((item)=>{
            const matchesSearch = query ? [
                item.code,
                item.name,
                item.location,
                item.process,
                item.assignedTo
            ].some((field)=>field.toLowerCase().includes(query)) : true;
            const matchesFilters = (filters.location === 'all' || item.location === filters.location) && (filters.process === 'all' || item.process === filters.process) && (filters.status === 'all' || item.status === filters.status) && (filters.classification === 'all' || item.classification === filters.classification) && (filters.invimaStatus === 'all' || item.invimaStatus === filters.invimaStatus) && (filters.category === 'all' || item.category === filters.category) && (filters.riskClass === 'all' || item.riskClass === filters.riskClass);
            return matchesSearch && matchesFilters;
        });
    }, [
        search,
        filters
    ]);
    const paginatedEquipment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const start = (page - 1) * PAGE_SIZE;
        return filteredEquipment.slice(start, start + PAGE_SIZE);
    }, [
        filteredEquipment,
        page
    ]);
    const totalPages = Math.max(1, Math.ceil(filteredEquipment.length / PAGE_SIZE));
    const statusSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const base = {
            operativo: 0,
            preventivo: 0,
            correctivo: 0,
            fuera: 0
        };
        filteredEquipment.forEach((item)=>{
            const bucket = determineStatusBucket(item);
            base[bucket] += 1;
        });
        return [
            {
                label: 'Listos para uso',
                value: base.operativo,
                description: 'Equipos operativos y calibrados'
            },
            {
                label: 'Programados',
                value: base.preventivo,
                description: 'Con preventivo o calibración en agenda'
            },
            {
                label: 'Correctivos',
                value: base.correctivo,
                description: 'Con intervención correctiva activa'
            },
            {
                label: 'Fuera de servicio',
                value: base.fuera,
                description: 'Requieren decisión operativa'
            }
        ];
    }, [
        filteredEquipment
    ]);
    const activeFiltersCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>Object.values(filters).filter((value)=>value !== 'all').length, [
        filters
    ]);
    const handleFilterChange = (key, value)=>{
        setFilters((prev)=>({
                ...prev,
                [key]: value
            }));
        setPage(1);
    };
    const handleSearchChange = (value)=>{
        setSearch(value);
        setPage(1);
    };
    const resetFilters = ()=>{
        setFilters(DEFAULT_FILTERS);
        setSearch('');
        setPage(1);
    };
    return {
        search,
        setSearch: handleSearchChange,
        filters,
        setFilter: handleFilterChange,
        resetFilters,
        equipment: paginatedEquipment,
        filteredTotal: filteredEquipment.length,
        total: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$data$2f$mock$2d$equipment$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["equipmentInventory"].length,
        page,
        pageSize: PAGE_SIZE,
        totalPages,
        goToPage: setPage,
        availableFilters,
        statusSummary,
        activeFiltersCount
    };
}

})()),
"[project]/src/app/(app)/inventory/page.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>InventoryPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$components$2f$filters$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/inventory/components/filters-preview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$components$2f$equipment$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/inventory/components/equipment-table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$hooks$2f$use$2d$equipment$2d$inventory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/inventory/hooks/use-equipment-inventory.ts [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function InventoryPage() {
    const { search, setSearch, filters, setFilter, resetFilters, availableFilters, activeFiltersCount, equipment, filteredTotal, total, page, pageSize, totalPages, goToPage } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$hooks$2f$use$2d$equipment$2d$inventory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEquipmentInventory"]();
    const handleExportSelected = (ids)=>{
        console.log('Exportar equipos seleccionados', ids);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$components$2f$filters$2d$preview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InventoryFilters"], {
                search: search,
                onSearchChange: setSearch,
                filters: filters,
                onFilterChange: setFilter,
                options: availableFilters,
                activeFiltersCount: activeFiltersCount,
                onReset: resetFilters
            }, void 0, false, {
                fileName: "<[project]/src/app/(app)/inventory/page.tsx>",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$inventory$2f$components$2f$equipment$2d$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EquipmentTable"], {
                equipment: equipment,
                filteredTotal: filteredTotal,
                total: total,
                page: page,
                pageSize: pageSize,
                totalPages: totalPages,
                onPageChange: goToPage,
                onExportSelected: handleExportSelected
            }, void 0, false, {
                fileName: "<[project]/src/app/(app)/inventory/page.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(app)/inventory/page.tsx>",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/app/(app)/inventory/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_62485b._.js.map