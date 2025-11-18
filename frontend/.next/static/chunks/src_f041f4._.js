(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f041f4._.js", {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Card": ()=>Card,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Card({ title, description, footer, className, children, actions }) {
    const hasHeader = title || description || actions;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('surface-card flex flex-col', className),
        children: [
            hasHeader && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-100/80 p-6 pb-4",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "space-y-1.5",
                        children: [
                            title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                className: "text-lg font-semibold text-slate-900",
                                children: title
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/card.tsx>",
                                lineNumber: 20,
                                columnNumber: 22
                            }, this) : null,
                            description ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
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
                    actions ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
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
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('flex flex-1 flex-col', hasHeader ? 'p-6 pt-0' : 'p-0'),
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/card.tsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            footer ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
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
_c = Card;
function CardHeader({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('flex flex-col space-y-1.5 p-6', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('text-lg font-semibold leading-none tracking-tight text-slate-900', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('text-sm text-slate-600', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_c3 = CardDescription;
function CardContent({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('p-6 pt-0', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_c4 = CardContent;
function CardFooter({ className, children }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('flex items-center border-t border-slate-200 p-6 pt-4', className),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/card.tsx>",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_c5 = CardFooter;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "Card");
__turbopack_refresh__.register(_c1, "CardHeader");
__turbopack_refresh__.register(_c2, "CardTitle");
__turbopack_refresh__.register(_c3, "CardDescription");
__turbopack_refresh__.register(_c4, "CardContent");
__turbopack_refresh__.register(_c5, "CardFooter");

})()),
"[project]/src/features/dashboard/components/bar-chart-monthly.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BarChartMonthly": ()=>BarChartMonthly
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
// Datos simulados de mantenimientos por mes
const monthlyData = [
    {
        mes: 'Ene',
        preventivos: 45,
        correctivos: 12,
        calibraciones: 18
    },
    {
        mes: 'Feb',
        preventivos: 52,
        correctivos: 8,
        calibraciones: 22
    },
    {
        mes: 'Mar',
        preventivos: 48,
        correctivos: 15,
        calibraciones: 20
    },
    {
        mes: 'Abr',
        preventivos: 55,
        correctivos: 10,
        calibraciones: 25
    },
    {
        mes: 'May',
        preventivos: 50,
        correctivos: 14,
        calibraciones: 23
    },
    {
        mes: 'Jun',
        preventivos: 58,
        correctivos: 9,
        calibraciones: 27
    },
    {
        mes: 'Jul',
        preventivos: 53,
        correctivos: 11,
        calibraciones: 24
    },
    {
        mes: 'Ago',
        preventivos: 49,
        correctivos: 13,
        calibraciones: 21
    },
    {
        mes: 'Sep',
        preventivos: 56,
        correctivos: 7,
        calibraciones: 26
    },
    {
        mes: 'Oct',
        preventivos: 51,
        correctivos: 16,
        calibraciones: 22
    },
    {
        mes: 'Nov',
        preventivos: 47,
        correctivos: 12,
        calibraciones: 20
    },
    {
        mes: 'Dic',
        preventivos: 54,
        correctivos: 9,
        calibraciones: 24
    }
];
const CustomTooltip = ({ active, payload, label })=>{
    if (active && payload && payload.length) {
        const total = payload.reduce((sum, entry)=>sum + entry.value, 0);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "rounded-xl border border-slate-200 bg-white p-3 shadow-lg",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mb-2 text-xs font-semibold text-slate-900",
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-1.5",
                    children: payload.map((entry, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "h-2 w-2 rounded-full",
                                            style: {
                                                backgroundColor: entry.color
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-xs text-slate-600",
                                            children: entry.name
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xs font-semibold text-slate-900",
                                    children: entry.value
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-2 border-t border-slate-200 pt-2",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-xs font-semibold text-slate-700",
                                children: "Total"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                className: "text-xs font-bold text-slate-900",
                                children: total
                            }, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    return null;
};
_c = CustomTooltip;
function BarChartMonthly() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-slate-200 bg-white shadow-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "h-[320px] w-full px-3 py-3 sm:px-4 sm:py-4",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                    data: monthlyData,
                    margin: {
                        top: 10,
                        right: 10,
                        left: -10,
                        bottom: 5
                    },
                    barGap: 4,
                    barCategoryGap: "20%",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                    id: "preventivosGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "0%",
                                            stopColor: "#10b981",
                                            stopOpacity: 0.9
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "100%",
                                            stopColor: "#059669",
                                            stopOpacity: 0.8
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                    id: "correctivosGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "0%",
                                            stopColor: "#06b6d4",
                                            stopOpacity: 0.9
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "100%",
                                            stopColor: "#0891b2",
                                            stopOpacity: 0.8
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                    id: "calibracionesGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "0%",
                                            stopColor: "#14b8a6",
                                            stopOpacity: 0.9
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "100%",
                                            stopColor: "#0d9488",
                                            stopOpacity: 0.8
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e2e8f0",
                            vertical: false,
                            opacity: 0.5
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "mes",
                            tick: {
                                fill: '#64748b',
                                fontSize: 11
                            },
                            axisLine: {
                                stroke: '#cbd5e1'
                            },
                            tickLine: false,
                            dy: 8
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            tick: {
                                fill: '#64748b',
                                fontSize: 11
                            },
                            axisLine: false,
                            tickLine: false,
                            dx: -8
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CustomTooltip, {}, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                                lineNumber: 96,
                                columnNumber: 31
                            }, void 0),
                            cursor: {
                                fill: 'rgba(148, 163, 184, 0.1)',
                                radius: 4
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            wrapperStyle: {
                                paddingTop: '16px',
                                fontSize: '12px'
                            },
                            iconType: "circle",
                            iconSize: 8
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "preventivos",
                            fill: "url(#preventivosGradient)",
                            name: "Preventivos",
                            radius: [
                                6,
                                6,
                                0,
                                0
                            ],
                            maxBarSize: 60
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "correctivos",
                            fill: "url(#correctivosGradient)",
                            name: "Correctivos",
                            radius: [
                                6,
                                6,
                                0,
                                0
                            ],
                            maxBarSize: 60
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                            dataKey: "calibraciones",
                            fill: "url(#calibracionesGradient)",
                            name: "Calibraciones",
                            radius: [
                                6,
                                6,
                                0,
                                0
                            ],
                            maxBarSize: 60
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
                lineNumber: 56,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/bar-chart-monthly.tsx>",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = BarChartMonthly;
var _c, _c1;
__turbopack_refresh__.register(_c, "CustomTooltip");
__turbopack_refresh__.register(_c1, "BarChartMonthly");

})()),
"[project]/src/features/dashboard/components/trend-chart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TrendChart": ()=>TrendChart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/ReferenceArea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
// Datos simulados de cumplimiento por mes
const complianceData = [
    {
        mes: 'Ene',
        preventivos: 88,
        calibraciones: 82,
        objetivo: 90
    },
    {
        mes: 'Feb',
        preventivos: 91,
        calibraciones: 85,
        objetivo: 90
    },
    {
        mes: 'Mar',
        preventivos: 89,
        calibraciones: 84,
        objetivo: 90
    },
    {
        mes: 'Abr',
        preventivos: 93,
        calibraciones: 87,
        objetivo: 90
    },
    {
        mes: 'May',
        preventivos: 90,
        calibraciones: 86,
        objetivo: 90
    },
    {
        mes: 'Jun',
        preventivos: 94,
        calibraciones: 89,
        objetivo: 90
    },
    {
        mes: 'Jul',
        preventivos: 92,
        calibraciones: 88,
        objetivo: 90
    },
    {
        mes: 'Ago',
        preventivos: 90,
        calibraciones: 85,
        objetivo: 90
    },
    {
        mes: 'Sep',
        preventivos: 95,
        calibraciones: 90,
        objetivo: 90
    },
    {
        mes: 'Oct',
        preventivos: 88,
        calibraciones: 83,
        objetivo: 90
    },
    {
        mes: 'Nov',
        preventivos: 92,
        calibraciones: 86,
        objetivo: 90
    },
    {
        mes: 'Dic',
        preventivos: 94,
        calibraciones: 88,
        objetivo: 90
    }
];
const CustomTooltip = ({ active, payload, label })=>{
    if (active && payload && payload.length) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "rounded-xl border border-slate-200 bg-white p-3 shadow-lg",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mb-2 text-xs font-semibold text-slate-900",
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-1.5",
                    children: payload.map((entry, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center justify-between gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "h-2 w-2 rounded-full",
                                            style: {
                                                backgroundColor: entry.color
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-xs text-slate-600",
                                            children: entry.name
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xs font-semibold text-slate-900",
                                    children: [
                                        entry.value,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return null;
};
_c = CustomTooltip;
const CustomDot = (props)=>{
    const { cx, cy, fill } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("circle", {
        cx: cx,
        cy: cy,
        r: 4,
        fill: fill,
        stroke: "white",
        strokeWidth: 2,
        className: "transition-all hover:r-6"
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
_c1 = CustomDot;
function TrendChart() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "border-slate-200 bg-white shadow-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "h-[320px] w-full px-3 py-3 sm:px-4 sm:py-4",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: "100%",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: complianceData,
                    margin: {
                        top: 10,
                        right: 10,
                        left: -10,
                        bottom: 5
                    },
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("defs", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                    id: "preventivosAreaGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "5%",
                                            stopColor: "#10b981",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "95%",
                                            stopColor: "#10b981",
                                            stopOpacity: 0.05
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("linearGradient", {
                                    id: "calibracionesAreaGradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "5%",
                                            stopColor: "#06b6d4",
                                            stopOpacity: 0.3
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("stop", {
                                            offset: "95%",
                                            stopColor: "#06b6d4",
                                            stopOpacity: 0.05
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e2e8f0",
                            vertical: false,
                            opacity: 0.5
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "mes",
                            tick: {
                                fill: '#64748b',
                                fontSize: 11
                            },
                            axisLine: {
                                stroke: '#cbd5e1'
                            },
                            tickLine: false,
                            dy: 8
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            domain: [
                                60,
                                100
                            ],
                            tick: {
                                fill: '#64748b',
                                fontSize: 11
                            },
                            axisLine: false,
                            tickLine: false,
                            dx: -8,
                            label: {
                                value: '% Cumplimiento',
                                angle: -90,
                                position: 'insideLeft',
                                fill: '#64748b',
                                style: {
                                    fontSize: 11
                                }
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CustomTooltip, {}, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                lineNumber: 105,
                                columnNumber: 31
                            }, void 0)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                            wrapperStyle: {
                                paddingTop: '16px',
                                fontSize: '12px'
                            },
                            iconType: "circle",
                            iconSize: 8
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceArea"], {
                            y1: 90,
                            y2: 100,
                            fill: "#fee2e2",
                            fillOpacity: 0.2,
                            strokeOpacity: 0
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            type: "monotone",
                            dataKey: "objetivo",
                            stroke: "#ef4444",
                            strokeDasharray: "4 4",
                            strokeWidth: 2,
                            isAnimationActive: false,
                            dot: false,
                            activeDot: false,
                            legendType: "line",
                            name: "Meta 90%",
                            strokeOpacity: 0
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "preventivos",
                            stroke: "#10b981",
                            strokeWidth: 3,
                            fill: "url(#preventivosAreaGradient)",
                            name: "Preventivos",
                            dot: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CustomDot, {
                                fill: "#10b981"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                lineNumber: 136,
                                columnNumber: 20
                            }, void 0),
                            activeDot: {
                                r: 6,
                                stroke: 'white',
                                strokeWidth: 2
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "calibraciones",
                            stroke: "#06b6d4",
                            strokeWidth: 3,
                            fill: "url(#calibracionesAreaGradient)",
                            name: "Calibraciones",
                            dot: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](CustomDot, {
                                fill: "#06b6d4"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                                lineNumber: 146,
                                columnNumber: 20
                            }, void 0),
                            activeDot: {
                                r: 6,
                                stroke: 'white',
                                strokeWidth: 2
                            }
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                            y: 90,
                            stroke: "#ef4444",
                            strokeWidth: 2.5,
                            strokeDasharray: "4 4",
                            isFront: true
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
                lineNumber: 63,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/trend-chart.tsx>",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c2 = TrendChart;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "CustomTooltip");
__turbopack_refresh__.register(_c1, "CustomDot");
__turbopack_refresh__.register(_c2, "TrendChart");

})()),
"[project]/src/features/dashboard/components/metrics-indicators.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MetricsIndicators": ()=>MetricsIndicators
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__TrendingUp$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) {export default as TrendingUp}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__TrendingDown$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) {export default as TrendingDown}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) {export default as AlertCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) {export default as Settings}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SlidersHorizontal$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) {export default as SlidersHorizontal}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const indicators = [
    {
        title: 'Mantenimientos preventivos',
        percentage: 92,
        trend: '+2.5%',
        trendUp: true,
        total: 156,
        completados: 143,
        pendientes: 13,
        mes: 'Noviembre 2025',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"],
        color: 'blue'
    },
    {
        title: 'Calibraciones',
        percentage: 86,
        trend: '+3.1%',
        trendUp: true,
        total: 65,
        completados: 56,
        pendientes: 9,
        mes: 'Noviembre 2025',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SlidersHorizontal$7d$__["SlidersHorizontal"],
        color: 'teal'
    },
    {
        title: 'Mantenimientos correctivos',
        percentage: 78,
        trend: '-1.2%',
        trendUp: false,
        total: 27,
        completados: 21,
        pendientes: 6,
        mes: 'Noviembre 2025',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__["AlertCircle"],
        color: 'red'
    }
];
const colorClasses = {
    blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        icon: 'text-blue-600',
        border: 'border-blue-200'
    },
    red: {
        bg: 'bg-red-50',
        text: 'text-red-700',
        icon: 'text-red-600',
        border: 'border-red-200'
    },
    teal: {
        bg: 'bg-teal-50',
        text: 'text-teal-700',
        icon: 'text-teal-600',
        border: 'border-teal-200'
    }
};
function MetricsIndicators() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "grid gap-5 lg:grid-cols-3",
        children: indicators.map((indicator)=>{
            const colors = colorClasses[indicator.color];
            const Icon = indicator.icon;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: `border ${colors.border} ${colors.bg} shadow-sm`,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-start justify-between gap-3",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `rounded-lg p-1.5 ${colors.bg} border ${colors.border}`,
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                            className: `h-4 w-4 ${colors.icon}`
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 82,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                className: "text-xs font-semibold text-slate-900 leading-tight",
                                                children: indicator.title
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-xs text-slate-500",
                                                children: indicator.mes
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                lineNumber: 80,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mt-3 space-y-2",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: `text-3xl font-bold ${colors.text}`,
                                            children: [
                                                indicator.percentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: `flex items-center gap-0.5 text-xs font-medium ${indicator.trendUp ? 'text-emerald-600' : 'text-red-600'}`,
                                            children: [
                                                indicator.trendUp ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__TrendingUp$7d$__["TrendingUp"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__TrendingDown$7d$__["TrendingDown"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 100,
                                                    columnNumber: 23
                                                }, this),
                                                indicator.trend
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "grid grid-cols-3 gap-2 border-t border-slate-200/60 pt-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm font-semibold text-slate-900",
                                                    children: indicator.total
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Completados"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm font-semibold text-emerald-600",
                                                    children: indicator.completados
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Pendientes"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm font-semibold text-amber-600",
                                                    children: indicator.pendientes
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                    lineNumber: 78,
                    columnNumber: 13
                }, this)
            }, indicator.title, false, {
                fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
                lineNumber: 74,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/metrics-indicators.tsx>",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c = MetricsIndicators;
var _c;
__turbopack_refresh__.register(_c, "MetricsIndicators");

})()),
"[project]/src/features/dashboard/context/service-filter-context.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ServiceFilterProvider": ()=>ServiceFilterProvider,
    "useServiceFilter": ()=>useServiceFilter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
const ServiceFilterContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
function ServiceFilterProvider({ children }) {
    _s();
    const [selectedService, setSelectedService] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('all');
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](ServiceFilterContext.Provider, {
        value: {
            selectedService,
            setSelectedService
        },
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/context/service-filter-context.tsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ServiceFilterProvider, "mvNPRC4SkOlWIkBjkZIbERBDkME=");
_c = ServiceFilterProvider;
function useServiceFilter() {
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ServiceFilterContext);
    if (context === undefined) {
        throw new Error('useServiceFilter must be used within a ServiceFilterProvider');
    }
    return context;
}
_s1(useServiceFilter, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "ServiceFilterProvider");

})()),
"[project]/src/features/dashboard/components/maintenance-timeline.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MaintenanceTimeline": ()=>MaintenanceTimeline
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) {export default as Settings}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SlidersHorizontal$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) {export default as SlidersHorizontal}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-circle.js [app-client] (ecmascript) {export default as AlertCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/context/service-filter-context.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const allSchedule = [
    {
        title: 'Preventivo - Centrífuga HANIL FLETA 40P',
        sede: 'Hospital San Vicente',
        servicio: 'Laboratorio Clínico',
        servicioKey: 'laboratorio',
        technician: 'Carlos Méndez',
        type: 'preventivo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"],
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Preventivo - Microscopio Olympus CX31',
        sede: 'Clínica León XIII',
        servicio: 'Microbiología',
        servicioKey: 'microbiologia',
        technician: 'Ana Rodríguez',
        type: 'preventivo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"],
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Preventivo - Mesa Quirúrgica Motorizada',
        sede: 'Clínica León XIII',
        servicio: 'Quirófano',
        servicioKey: 'quirofano',
        technician: 'Técnico Biomédico',
        type: 'preventivo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"],
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        title: 'Calibración - Balanza Analítica A&D HR-200',
        sede: 'Hospital San Vicente',
        servicio: 'Farmacia',
        servicioKey: 'farmacia',
        technician: 'Laboratorio Metrotech',
        type: 'calibracion',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SlidersHorizontal$7d$__["SlidersHorizontal"],
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600'
    },
    {
        title: 'Calibración - Resonancia Magnética Siemens',
        sede: 'Hospital San Vicente',
        servicio: 'Imágenes Diagnósticas',
        servicioKey: 'imagenes',
        technician: 'Siemens Healthcare',
        type: 'calibracion',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__SlidersHorizontal$7d$__["SlidersHorizontal"],
        iconBg: 'bg-teal-100',
        iconColor: 'text-teal-600'
    },
    {
        title: 'Correctivo - Criostato Leica CM1860 UV',
        sede: 'Hospital Universitario',
        servicio: 'Patología',
        servicioKey: 'patologia',
        technician: 'Soporte externo',
        type: 'correctivo',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertCircle$7d$__["AlertCircle"],
        iconBg: 'bg-red-100',
        iconColor: 'text-red-600'
    }
];
function MaintenanceTimeline() {
    _s();
    const { selectedService } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServiceFilter"]();
    const filteredSchedule = selectedService === 'all' ? allSchedule : allSchedule.filter((item)=>item.servicioKey === selectedService);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        title: "Agenda de mantenimientos",
        description: `${filteredSchedule.length} intervenciones programadas`,
        className: "border-slate-200 bg-white shadow-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "space-y-3",
            children: filteredSchedule.length === 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "rounded-lg border border-slate-200 bg-slate-50 p-8 text-center",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-sm text-slate-600",
                    children: "No hay mantenimientos programados para este servicio"
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                    lineNumber: 92,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                lineNumber: 91,
                columnNumber: 11
            }, this) : filteredSchedule.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "group relative",
                    children: [
                        index < filteredSchedule.length - 1 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "absolute left-[18px] top-10 h-[calc(100%+0.25rem)] w-[2px] bg-gradient-to-b from-slate-200 to-transparent"
                        }, void 0, false, {
                            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                            lineNumber: 99,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 transition-all hover:border-slate-200 hover:bg-white hover:shadow-sm",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: `grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg ${item.iconBg}`,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](item.icon, {
                                        className: `h-4.5 w-4.5 ${item.iconColor}`,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "min-w-0 flex-1 space-y-1",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-sm font-semibold leading-tight text-slate-900",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-1.5 text-xs text-slate-600",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "font-medium",
                                                    children: item.sede
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "text-slate-400",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    children: item.servicio
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                            className: "text-xs text-slate-500",
                                            children: item.technician
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.title, true, {
                    fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
                    lineNumber: 96,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/maintenance-timeline.tsx>",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(MaintenanceTimeline, "JQxUgoUNwOlIU+ndlaxJyEErkRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServiceFilter"]
    ];
});
_c = MaintenanceTimeline;
var _c;
__turbopack_refresh__.register(_c, "MaintenanceTimeline");

})()),
"[project]/src/features/dashboard/components/status-summary.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StatusSummary": ()=>StatusSummary
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const items = [
    {
        label: 'Operativos',
        value: 142,
        dot: 'bg-emerald-500',
        bar: 'bg-emerald-500'
    },
    {
        label: 'En mantenimiento',
        value: 18,
        dot: 'bg-blue-500',
        bar: 'bg-blue-500'
    },
    {
        label: 'Fuera de servicio',
        value: 6,
        dot: 'bg-red-500',
        bar: 'bg-red-500'
    }
];
function StatusSummary() {
    const total = items.reduce((acc, item)=>acc + item.value, 0);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "space-y-3",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "grid grid-cols-1 gap-2.5",
            children: items.map((item)=>{
                const share = total > 0 ? Math.round(item.value / total * 100) : 0;
                return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "rounded-xl border border-slate-200 bg-white p-3",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: `h-2 w-2 rounded-full ${item.dot}`
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-[10px] font-semibold uppercase tracking-widest text-slate-500",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                            lineNumber: 39,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-lg font-bold text-slate-900",
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "h-1.5 flex-1 rounded-full bg-slate-100",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: `h-full rounded-full ${item.bar} transition-all`,
                                        style: {
                                            width: `${share}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "text-xs font-semibold text-slate-500",
                                    children: [
                                        share,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this)
                    ]
                }, item.label, true, {
                    fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
                    lineNumber: 35,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/status-summary.tsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = StatusSummary;
var _c;
__turbopack_refresh__.register(_c, "StatusSummary");

})()),
"[project]/src/features/dashboard/components/service-selector.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ServiceSelector": ()=>ServiceSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/context/service-filter-context.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
const services = [
    {
        value: 'all',
        label: 'Todos los servicios'
    },
    {
        value: 'laboratorio',
        label: 'Laboratorio Clínico'
    },
    {
        value: 'patologia',
        label: 'Patología'
    },
    {
        value: 'farmacia',
        label: 'Farmacia'
    },
    {
        value: 'microbiologia',
        label: 'Microbiología'
    },
    {
        value: 'imagenes',
        label: 'Imágenes Diagnósticas'
    },
    {
        value: 'quirofano',
        label: 'Quirófano'
    }
];
function ServiceSelector() {
    _s();
    const { selectedService, setSelectedService } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServiceFilter"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "rounded-xl border border-slate-200 bg-white p-4 shadow-sm",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                    htmlFor: "service-filter",
                    className: "mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500",
                    children: "Filtrar por servicio"
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/service-selector.tsx>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                    id: "service-filter",
                    value: selectedService,
                    onChange: (e)=>setSelectedService(e.target.value),
                    className: "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors hover:border-slate-300 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20",
                    children: services.map((service)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                            value: service.value,
                            children: service.label
                        }, service.value, false, {
                            fileName: "<[project]/src/features/dashboard/components/service-selector.tsx>",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/features/dashboard/components/service-selector.tsx>",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/features/dashboard/components/service-selector.tsx>",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/dashboard/components/service-selector.tsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(ServiceSelector, "KW5N6rT064Ih2t+jjJkZA5H8n2k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServiceFilter"]
    ];
});
_c = ServiceSelector;
var _c;
__turbopack_refresh__.register(_c, "ServiceSelector");

})()),
"[project]/src/app/(app)/dashboard/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DashboardPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$bar$2d$chart$2d$monthly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/bar-chart-monthly.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$trend$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/trend-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$metrics$2d$indicators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/metrics-indicators.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$maintenance$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/maintenance-timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$status$2d$summary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/status-summary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$service$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/components/service-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/dashboard/context/service-filter-context.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
function DashboardPage() {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$context$2f$service$2d$filter$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceFilterProvider"], {
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$metrics$2d$indicators$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MetricsIndicators"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$bar$2d$chart$2d$monthly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChartMonthly"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$trend$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrendChart"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$service$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServiceSelector"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$status$2d$summary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusSummary"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$components$2f$maintenance$2d$timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaintenanceTimeline"], {}, void 0, false, {
                            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/(app)/dashboard/page.tsx>",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = DashboardPage;
var _c;
__turbopack_refresh__.register(_c, "DashboardPage");

})()),
"[project]/src/app/(app)/dashboard/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_f041f4._.js.map