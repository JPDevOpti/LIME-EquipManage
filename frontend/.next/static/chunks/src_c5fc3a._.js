(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c5fc3a._.js", {

"[project]/src/features/maintenance/components/maintenance-calendar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MaintenanceCalendar": ()=>MaintenanceCalendar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) {export default as Settings}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertTriangle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) {export default as AlertTriangle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Gauge$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) {export default as Gauge}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function MaintenanceCalendar({ months, isLoading, onSelectMonth, onShowEvents }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "bg-white rounded-xl border border-slate-200 overflow-hidden",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "p-4 relative",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
                    children: months.map((month)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            onClick: ()=>onSelectMonth?.(month.number),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("relative bg-white border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md", month.isCurrent ? 'border-blue-500 ring-1 ring-blue-200' : 'border-slate-200 hover:border-slate-300'),
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("mb-3 -mx-4 -mt-4 px-4 pt-3 pb-3 rounded-t-lg border-b-2", month.isCurrent ? 'bg-emerald-50 border-emerald-400' : 'bg-cyan-50 border-cyan-400'),
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("text-base font-bold", month.isCurrent ? 'text-emerald-700' : 'text-cyan-800'),
                                                children: month.name
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                lineNumber: 45,
                                                columnNumber: 19
                                            }, this),
                                            month.isCurrent && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-white",
                                                children: "Actual"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onShowEvents?.(month.number, 'Preventivo');
                                            },
                                            className: "flex items-center justify-between text-sm p-2 rounded-md bg-cyan-50/30 border border-cyan-200/30 cursor-pointer hover:bg-cyan-50/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"], {
                                                            className: "w-4 h-4 text-cyan-800"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 74,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "text-slate-700 font-medium",
                                                            children: "Preventivos"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 75,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 73,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "font-bold text-cyan-800",
                                                    children: month.preventivos
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onShowEvents?.(month.number, 'Correctivo');
                                            },
                                            className: "flex items-center justify-between text-sm p-2 rounded-md bg-orange-50/50 border border-orange-100/50 cursor-pointer hover:bg-orange-50/70 transition-colors",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertTriangle$7d$__["AlertTriangle"], {
                                                            className: "w-4 h-4 text-orange-600"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "text-slate-700 font-medium",
                                                            children: "Correctivos"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "font-bold text-orange-600",
                                                    children: month.correctivos
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                onShowEvents?.(month.number, 'Calibración');
                                            },
                                            className: "flex items-center justify-between text-sm p-2 rounded-md bg-emerald-50/50 border border-emerald-200/50 cursor-pointer hover:bg-emerald-50/70 transition-colors",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Gauge$7d$__["Gauge"], {
                                                            className: "w-4 h-4 text-emerald-600"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "text-slate-700 font-medium",
                                                            children: "Calibraciones"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "font-bold text-emerald-600",
                                                    children: month.calibraciones
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "mt-3 pt-3 border-t border-slate-200",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-xs font-medium text-slate-500 uppercase tracking-wide",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-lg font-bold text-slate-900",
                                                children: month.total
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, month.number, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                isLoading && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-xl",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "w-12 h-12 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-sm text-slate-600 font-medium",
                                children: "Cargando datos..."
                            }, void 0, false, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
                    lineNumber: 124,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/maintenance/components/maintenance-calendar.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = MaintenanceCalendar;
var _c;
__turbopack_refresh__.register(_c, "MaintenanceCalendar");

})()),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function Button({ className, variant = 'primary', size = 'md', loading = false, asChild = false, children, disabled, ...props }, ref) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Comp, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"](baseStyles, variantStyles[variant], sizeStyles[size], className),
        disabled: disabled || loading,
        ...props,
        children: loading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                    className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/button.tsx>",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
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
_c1 = Button;
var _c, _c1;
__turbopack_refresh__.register(_c, "Button$forwardRef");
__turbopack_refresh__.register(_c1, "Button");

})()),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Input": ()=>Input
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function Input({ className, error, fullWidth = true, type = 'text', ...props }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
        ref: ref,
        type: type,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('flex h-10 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900', 'placeholder:text-slate-400', 'transition-colors', 'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20', 'disabled:cursor-not-allowed disabled:opacity-50', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', fullWidth && 'w-full', className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/input.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
});
_c1 = Input;
var _c, _c1;
__turbopack_refresh__.register(_c, "Input$forwardRef");
__turbopack_refresh__.register(_c1, "Input");

})()),
"[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Textarea": ()=>Textarea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = function Textarea({ className, error, fullWidth = true, ...props }, ref) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("textarea", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('flex min-h-[80px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900', 'placeholder:text-slate-400', 'transition-colors', 'focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20', 'disabled:cursor-not-allowed disabled:opacity-50', 'resize-y', error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20', fullWidth && 'w-full', className),
        ...props
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/textarea.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
});
_c1 = Textarea;
var _c, _c1;
__turbopack_refresh__.register(_c, "Textarea$forwardRef");
__turbopack_refresh__.register(_c1, "Textarea");

})()),
"[project]/src/features/maintenance/components/maintenance-complete-modal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MaintenanceCompleteModal": ()=>MaintenanceCompleteModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check-circle.js [app-client] (ecmascript) {export default as CheckCircle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Upload$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) {export default as Upload}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) {export default as FileText}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function MaintenanceCompleteModal({ isOpen, event, onClose, onComplete }) {
    _s();
    const fileInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [selectedFile, setSelectedFile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isDragOver, setIsDragOver] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        exactCompletionDate: '',
        reportNumber: '',
        completionNotes: ''
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setFormData({
                exactCompletionDate: `${year}-${month}-${day}T${hours}:${minutes}`,
                reportNumber: '',
                completionNotes: ''
            });
            setSelectedFile(null);
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const isFormValid = !!formData.exactCompletionDate;
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = ()=>{
        setIsDragOver(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };
    const triggerFileInput = ()=>{
        fileInputRef.current?.click();
    };
    const handleFileSelect = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFile(files[0]);
        }
    };
    const handleFile = (file)=>{
        // Validar tipo de archivo
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        if (!allowedTypes.includes(file.type)) {
            alert('Formato de archivo no válido. Solo se permiten PDF, DOC y DOCX.');
            return;
        }
        // Validar tamaño (10MB)
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('El archivo es demasiado grande. El tamaño máximo es 10MB.');
            return;
        }
        setSelectedFile(file);
    };
    const removeFile = ()=>{
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    };
    const handleSubmit = ()=>{
        if (!event || !isFormValid) return;
        onComplete({
            eventId: event.id,
            exactCompletionDate: formData.exactCompletionDate,
            reportNumber: formData.reportNumber || undefined,
            reportFile: selectedFile || undefined,
            completionNotes: formData.completionNotes || undefined
        });
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-[10002] flex items-center justify-center p-4 bg-black/40",
        onClick: onClose,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__["CheckCircle"], {
                                                className: "w-5 h-5 text-emerald-600"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                className: "text-lg font-bold text-slate-900",
                                                children: "Completar Mantenimiento"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-slate-600 text-xs mt-1",
                                                children: "Complete la información del mantenimiento realizado"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: onClose,
                                className: "flex-shrink-0 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 text-slate-600 hover:text-slate-800",
                                title: "Cerrar",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "bg-slate-50 rounded-lg p-4 border border-slate-200",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                    className: "text-sm font-semibold text-slate-900 mb-2",
                                    children: "Equipo"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-base font-medium text-slate-900",
                                    children: event?.equipmentName
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-sm text-slate-600 font-mono",
                                    children: event?.equipmentCode
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Fecha Exacta de Completado"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "datetime-local",
                                    value: formData.exactCompletionDate,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                exactCompletionDate: e.target.value
                                            })),
                                    required: true
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Número de Informe"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    type: "text",
                                    placeholder: "Ej: INF-2025-001",
                                    value: formData.reportNumber,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                reportNumber: e.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Subir Informe"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("border border-dashed border-slate-300 rounded-lg bg-slate-50 p-6 hover:border-emerald-500 transition-colors cursor-pointer", isDragOver && "border-emerald-500 bg-emerald-50/50"),
                                    onDragOver: handleDragOver,
                                    onDragLeave: handleDragLeave,
                                    onDrop: handleDrop,
                                    onClick: triggerFileInput,
                                    children: [
                                        selectedFile ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center justify-center gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__FileText$7d$__["FileText"], {
                                                        className: "w-8 h-8 text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "text-left",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-sm font-medium text-slate-900",
                                                                children: selectedFile.name
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                                lineNumber: 223,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                                className: "text-xs text-slate-500",
                                                                children: formatFileSize(selectedFile.size)
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                        lineNumber: 222,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            removeFile();
                                                        },
                                                        className: "ml-2 p-1 rounded-full hover:bg-red-100 text-red-600 transition-colors",
                                                        title: "Eliminar archivo",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Upload$7d$__["Upload"], {
                                                        className: "w-6 h-6"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm font-medium text-slate-700 mb-1",
                                                    children: "Haz clic para seleccionar o arrastra el archivo aquí"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-xs text-slate-500",
                                                    children: "Formatos aceptados: PDF, DOC, DOCX. Tamaño máximo: 10MB"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            className: "hidden",
                                            accept: ".pdf,.doc,.docx",
                                            onChange: handleFileSelect
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("label", {
                                    className: "block text-sm font-medium text-slate-700 mb-2",
                                    children: "Observaciones"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    rows: 4,
                                    placeholder: "Ingrese las observaciones del mantenimiento realizado...",
                                    value: formData.completionNotes,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                completionNotes: e.target.value
                                            }))
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex-shrink-0 flex items-center justify-end gap-3 pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            children: "Cancelar"
                        }, void 0, false, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubmit,
                            disabled: !isFormValid,
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__CheckCircle$7d$__["CheckCircle"], {
                                    className: "w-4 h-4 mr-2"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                "Completar Mantenimiento"
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
                    lineNumber: 272,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
            lineNumber: 139,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/features/maintenance/components/maintenance-complete-modal.tsx>",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(MaintenanceCompleteModal, "annlTvI4w1avKOSpSy0/6lZUQYc=");
_c = MaintenanceCompleteModal;
var _c;
__turbopack_refresh__.register(_c, "MaintenanceCompleteModal");

})()),
"[project]/src/features/maintenance/components/maintenance-events-modal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MaintenanceEventsModal": ()=>MaintenanceEventsModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) {export default as Settings}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertTriangle$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/alert-triangle.js [app-client] (ecmascript) {export default as AlertTriangle}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Gauge$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) {export default as Gauge}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$complete$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/components/maintenance-complete-modal.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
function MaintenanceEventsModal({ isOpen, events, type, month, year, onClose, onUpdateProcess, onComplete }) {
    _s();
    const [selectedEventForComplete, setSelectedEventForComplete] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [isCompleteModalOpen, setIsCompleteModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const selectRefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!isOpen) {
            setSelectedEventForComplete(null);
            setIsCompleteModalOpen(false);
        }
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const modalTitle = type && month !== null ? `${type}s - ${monthNames[month]} ${year || new Date().getFullYear()}` : 'Eventos de Mantenimiento';
    const modalSubtitle = `Lista de eventos de mantenimiento ${type?.toLowerCase() || ''}`;
    const headerIcon = type === 'Preventivo' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Settings$7d$__["Settings"] : type === 'Correctivo' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$alert$2d$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__AlertTriangle$7d$__["AlertTriangle"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Gauge$7d$__["Gauge"];
    const headerIconClass = type === 'Preventivo' ? 'bg-cyan-50' : type === 'Correctivo' ? 'bg-orange-50' : 'bg-emerald-50';
    const headerIconColorClass = type === 'Preventivo' ? 'text-cyan-800' : type === 'Correctivo' ? 'text-orange-600' : 'text-emerald-600';
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };
    const getEquipmentStatusClass = (status)=>{
        const statusClasses = {
            'Operativo': 'bg-green-100 text-green-800',
            'Inactivo': 'bg-slate-100 text-slate-800',
            'Reparación': 'bg-orange-100 text-orange-800'
        };
        return statusClasses[status || ''] || 'bg-slate-100 text-slate-800';
    };
    const getProcessSelectClass = (process)=>{
        const processClasses = {
            'En proceso': 'bg-blue-100 text-blue-800 px-3 py-1.5',
            'Pendiente': 'bg-yellow-100 text-yellow-800 px-3 py-1.5',
            'Completado': 'bg-green-100 text-green-800 px-3 py-1.5'
        };
        return processClasses[process || ''] || 'bg-slate-100 text-slate-800 px-3 py-1.5';
    };
    const handleProcessChange = async (eventId, process, event)=>{
        if (process === 'Completado') {
            setSelectedEventForComplete(event);
            setIsCompleteModalOpen(true);
            // Restaurar el valor anterior del select
            const selectElement = selectRefs.current[eventId];
            if (selectElement) {
                selectElement.value = event.process || '';
            }
        } else if (process && (process === 'En proceso' || process === 'Pendiente')) {
            onUpdateProcess?.(eventId, process);
        } else {
            onUpdateProcess?.(eventId, '');
        }
    };
    const handleComplete = (data)=>{
        // Primero actualizar el proceso a Completado
        onUpdateProcess?.(data.eventId, 'Completado');
        // Luego emitir el evento de completado con los datos adicionales
        onComplete?.(data);
        // Cerrar el modal
        setIsCompleteModalOpen(false);
        setSelectedEventForComplete(null);
    };
    const closeCompleteModal = ()=>{
        setIsCompleteModalOpen(false);
        setSelectedEventForComplete(null);
    };
    const Icon = headerIcon;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40",
                onClick: onClose,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex-shrink-0 px-6 py-5 border-b border-slate-200 bg-white rounded-t-2xl",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("w-10 h-10 rounded-full flex items-center justify-center", headerIconClass),
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("w-5 h-5", headerIconColorClass)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "text-lg font-bold text-slate-900",
                                                        children: modalTitle
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-slate-600 text-xs mt-1",
                                                        children: modalSubtitle
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        onClick: onClose,
                                        className: "flex-shrink-0 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-200 text-slate-600 hover:text-slate-800",
                                        title: "Cerrar",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex-1 overflow-y-auto p-6",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "overflow-hidden rounded-xl border border-slate-200 bg-white",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("table", {
                                        className: "min-w-full divide-y divide-slate-200",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("thead", {
                                                className: "bg-slate-50",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Equipo / Código"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Sede / Servicio"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Marca / Modelo / Serie"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 187,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Proveedor"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Estado"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Costo"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider",
                                                            children: "Proceso"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                lineNumber: 179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tbody", {
                                                className: "bg-white divide-y divide-slate-200",
                                                children: [
                                                    events.map((event)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                            className: "hover:bg-slate-50 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "text-sm font-medium text-slate-900",
                                                                            children: event.equipmentName
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                            lineNumber: 211,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "text-xs text-slate-500 font-mono",
                                                                            children: event.equipmentCode
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                            lineNumber: 212,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 210,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: [
                                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "text-sm text-slate-900 font-medium",
                                                                            children: event.sede
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                            lineNumber: 215,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        event.service ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "text-xs text-slate-500",
                                                                            children: event.service
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                            lineNumber: 217,
                                                                            columnNumber: 29
                                                                        }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                            className: "text-xs text-slate-400 italic",
                                                                            children: "Sin servicio"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                            lineNumber: 219,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 214,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3",
                                                                    children: event.brand ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "text-sm text-slate-900 font-medium",
                                                                                children: event.brand
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 225,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            event.model && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "text-xs text-slate-700 mt-0.5",
                                                                                children: event.model
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 226,
                                                                                columnNumber: 47
                                                                            }, this),
                                                                            event.serialNumber && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                                className: "text-xs text-slate-500 font-mono mt-0.5",
                                                                                children: event.serialNumber
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 228,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "text-sm text-slate-400",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                        lineNumber: 232,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 222,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "text-sm text-slate-900",
                                                                        children: event.supplier || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                        lineNumber: 236,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 235,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", getEquipmentStatusClass(event.equipmentStatus)),
                                                                        children: event.equipmentStatus || 'N/A'
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                        lineNumber: 239,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 238,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "text-sm text-slate-900 font-medium",
                                                                        children: event.cost ? formatCurrency(event.cost) : '-'
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                        lineNumber: 249,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 248,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                                    className: "px-4 py-3 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                                                                        ref: (el)=>{
                                                                            if (el) selectRefs.current[event.id] = el;
                                                                        },
                                                                        value: event.process || '',
                                                                        onChange: (e)=>handleProcessChange(event.id, e.target.value, event),
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("text-xs font-medium rounded-full border-0 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1", getProcessSelectClass(event.process)),
                                                                        children: [
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                                value: "",
                                                                                children: "Seleccionar"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 265,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                                value: "En proceso",
                                                                                children: "En proceso"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 266,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                                value: "Pendiente",
                                                                                children: "Pendiente"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 267,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                                                                value: "Completado",
                                                                                children: "Completado"
                                                                            }, void 0, false, {
                                                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                                lineNumber: 268,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                        lineNumber: 254,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                                    lineNumber: 253,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, event.id, true, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 206,
                                                            columnNumber: 23
                                                        }, this)),
                                                    events.length === 0 && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("tr", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("td", {
                                                            colSpan: 7,
                                                            className: "px-4 py-8 text-center text-slate-500",
                                                            children: "No hay eventos para mostrar"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                            lineNumber: 275,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                        lineNumber: 274,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                        lineNumber: 178,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex-shrink-0 flex items-center justify-between pt-3 border-t border-slate-200 px-6 pb-4 bg-white rounded-b-2xl",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "text-sm text-slate-600",
                                    children: [
                                        "Total: ",
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "font-semibold text-slate-900",
                                            children: events.length
                                        }, void 0, false, {
                                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                            lineNumber: 289,
                                            columnNumber: 22
                                        }, this),
                                        " evento",
                                        events.length !== 1 ? 's' : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: onClose,
                                    children: "Cerrar"
                                }, void 0, false, {
                                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$complete$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaintenanceCompleteModal"], {
                isOpen: isCompleteModalOpen,
                event: selectedEventForComplete,
                onClose: closeCompleteModal,
                onComplete: handleComplete
            }, void 0, false, {
                fileName: "<[project]/src/features/maintenance/components/maintenance-events-modal.tsx>",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MaintenanceEventsModal, "JczFhm7fmDkHJduw6HZ1xkxSnkY=");
_c = MaintenanceEventsModal;
var _c;
__turbopack_refresh__.register(_c, "MaintenanceEventsModal");

})()),
"[project]/src/features/maintenance/services/maintenanceApi.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "maintenanceApi": ()=>maintenanceApi
});
// Función para generar eventos de mantenimiento para todos los meses
function generateMockEvents() {
    const events = [];
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const equipmentList = [
        {
            id: '1',
            name: 'Criostato',
            code: '109414'
        },
        {
            id: '2',
            name: 'Equipo de IHQ',
            code: '111251'
        },
        {
            id: '3',
            name: 'Micrótomo de rotación',
            code: '114982'
        },
        {
            id: '4',
            name: 'Citocentrífuga',
            code: '122967'
        },
        {
            id: '5',
            name: 'Estación de inclusión',
            code: '178684'
        },
        {
            id: '6',
            name: 'Horno de Laboratorio',
            code: '111251'
        },
        {
            id: '7',
            name: 'Criostato',
            code: '187701'
        },
        {
            id: '8',
            name: 'Balanza Analítica',
            code: '109414'
        },
        {
            id: '9',
            name: 'Autoclave',
            code: '198765'
        },
        {
            id: '10',
            name: 'Centrífuga',
            code: '145678'
        }
    ];
    const technicians = [
        'Carlos Méndez',
        'Ana Rodríguez',
        'Pedro Jiménez',
        'María González'
    ];
    const locations = [
        'Histoquímica',
        'Histotécnica',
        'Cuarto criostato',
        'Laboratorio Central'
    ];
    const sedes = [
        'San Vicente',
        'Prado',
        'SIU'
    ];
    const types = [
        'Preventivo',
        'Correctivo',
        'Calibración'
    ];
    const statuses = [
        'Completado',
        'Pendiente',
        'En Proceso',
        'Vencido'
    ];
    const priorities = [
        'Alta',
        'Media',
        'Baja'
    ];
    let eventId = 1;
    // Generar eventos para cada mes del año actual
    for(let month = 0; month < 12; month++){
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();
        // Generar entre 3 y 8 eventos por mes
        const eventsPerMonth = Math.floor(Math.random() * 6) + 3;
        for(let i = 0; i < eventsPerMonth; i++){
            const day = Math.floor(Math.random() * daysInMonth) + 1;
            const equipment = equipmentList[Math.floor(Math.random() * equipmentList.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            // Distribuir estados: más completados en meses pasados, más pendientes en meses futuros
            let status;
            if (month < currentMonth) {
                // Meses pasados: más completados
                const rand = Math.random();
                status = rand < 0.6 ? 'Completado' : rand < 0.8 ? 'En Proceso' : rand < 0.9 ? 'Pendiente' : 'Vencido';
            } else if (month === currentMonth) {
                // Mes actual: mezcla
                const rand = Math.random();
                status = rand < 0.3 ? 'Completado' : rand < 0.5 ? 'En Proceso' : rand < 0.8 ? 'Pendiente' : 'Vencido';
            } else {
                // Meses futuros: más pendientes
                const rand = Math.random();
                status = rand < 0.7 ? 'Pendiente' : rand < 0.85 ? 'En Proceso' : rand < 0.95 ? 'Completado' : 'Vencido';
            }
            const scheduledDate = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const priority = priorities[Math.floor(Math.random() * priorities.length)];
            const technician = technicians[Math.floor(Math.random() * technicians.length)];
            const location = locations[Math.floor(Math.random() * locations.length)];
            const sede = sedes[Math.floor(Math.random() * sedes.length)];
            const event = {
                id: String(eventId++),
                equipmentId: equipment.id,
                equipmentName: equipment.name,
                equipmentCode: equipment.code,
                type,
                status,
                scheduledDate,
                sede,
                location,
                technician,
                priority,
                estimatedDuration: type === 'Calibración' ? 3 : type === 'Correctivo' ? 4 : 2
            };
            // Agregar costo para algunos eventos
            if (Math.random() > 0.3) {
                event.cost = type === 'Calibración' ? Math.floor(Math.random() * 200000) + 200000 : type === 'Correctivo' ? Math.floor(Math.random() * 300000) + 150000 : Math.floor(Math.random() * 100000) + 100000;
            }
            // Si está completado, agregar fecha de completado
            if (status === 'Completado') {
                const completedDay = Math.min(day + Math.floor(Math.random() * 3), daysInMonth);
                event.completedDate = `${currentYear}-${String(month + 1).padStart(2, '0')}-${String(completedDay).padStart(2, '0')}`;
                if (Math.random() > 0.5) {
                    event.notes = type === 'Preventivo' ? 'Limpieza y lubricación completa' : type === 'Calibración' ? 'Calibración exitosa' : 'Reparación completada';
                }
            } else if (status === 'En Proceso' && Math.random() > 0.5) {
                event.notes = 'En proceso de ejecución';
            } else if (status === 'Vencido') {
                event.notes = type === 'Calibración' ? 'Calibración atrasada' : 'Mantenimiento atrasado';
            }
            events.push(event);
        }
    }
    return events;
}
// Generar datos mock de mantenimientos
const mockMaintenanceEvents = generateMockEvents();
const maintenanceApi = {
    // Obtener eventos de mantenimiento con filtros
    async getMaintenanceEvents (filters) {
        await new Promise((resolve)=>setTimeout(resolve, 50));
        let filtered = [
            ...mockMaintenanceEvents
        ];
        // Filtrar por mes y año
        filtered = filtered.filter((event)=>{
            const eventDate = new Date(event.scheduledDate);
            return eventDate.getMonth() === filters.selectedMonth && eventDate.getFullYear() === filters.selectedYear;
        });
        // Filtrar por tipo
        if (filters.selectedType !== 'all') {
            filtered = filtered.filter((event)=>event.type === filters.selectedType);
        }
        // Filtrar por estado
        if (filters.selectedStatus !== 'all') {
            filtered = filtered.filter((event)=>event.status === filters.selectedStatus);
        }
        // Filtrar por sede
        if (filters.selectedSede && filters.selectedSede !== 'all') {
            filtered = filtered.filter((event)=>event.sede === filters.selectedSede);
        }
        // Búsqueda por texto
        if (filters.searchQuery.trim()) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter((event)=>event.equipmentName.toLowerCase().includes(query) || event.equipmentCode.toLowerCase().includes(query) || event.technician?.toLowerCase().includes(query) || event.location.toLowerCase().includes(query));
        }
        return filtered;
    },
    // Obtener estadísticas del mes
    async getMonthlyStats (month, year) {
        await new Promise((resolve)=>setTimeout(resolve, 200));
        const events = mockMaintenanceEvents.filter((event)=>{
            const eventDate = new Date(event.scheduledDate);
            return eventDate.getMonth() === month && eventDate.getFullYear() === year;
        });
        return {
            total: events.length,
            preventivo: events.filter((e)=>e.type === 'Preventivo').length,
            correctivo: events.filter((e)=>e.type === 'Correctivo').length,
            calibracion: events.filter((e)=>e.type === 'Calibración').length,
            pendiente: events.filter((e)=>e.status === 'Pendiente').length,
            enProceso: events.filter((e)=>e.status === 'En Proceso').length,
            completado: events.filter((e)=>e.status === 'Completado').length,
            vencido: events.filter((e)=>e.status === 'Vencido').length
        };
    },
    // Obtener detalles de un evento específico
    async getMaintenanceEvent (id) {
        await new Promise((resolve)=>setTimeout(resolve, 200));
        return mockMaintenanceEvents.find((event)=>event.id === id) || null;
    },
    // Crear nuevo evento de mantenimiento
    async createMaintenanceEvent (event) {
        await new Promise((resolve)=>setTimeout(resolve, 300));
        const newEvent = {
            ...event,
            id: `${Date.now()}`
        };
        mockMaintenanceEvents.push(newEvent);
        return newEvent;
    },
    // Actualizar evento de mantenimiento
    async updateMaintenanceEvent (id, updates) {
        await new Promise((resolve)=>setTimeout(resolve, 300));
        const index = mockMaintenanceEvents.findIndex((event)=>event.id === id);
        if (index === -1) throw new Error('Evento no encontrado');
        mockMaintenanceEvents[index] = {
            ...mockMaintenanceEvents[index],
            ...updates
        };
        return mockMaintenanceEvents[index];
    },
    // Eliminar evento de mantenimiento
    async deleteMaintenanceEvent (id) {
        await new Promise((resolve)=>setTimeout(resolve, 300));
        const index = mockMaintenanceEvents.findIndex((event)=>event.id === id);
        if (index !== -1) {
            mockMaintenanceEvents.splice(index, 1);
        }
    }
};

})()),
"[project]/src/features/maintenance/hooks/useYearlyMaintenanceCalendar.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useYearlyMaintenanceCalendar": ()=>useYearlyMaintenanceCalendar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$services$2f$maintenanceApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/services/maintenanceApi.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
function useYearlyMaintenanceCalendar() {
    _s();
    const currentDate = new Date();
    const [selectedYear, setSelectedYear] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](currentDate.getFullYear());
    const [events, setEvents] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selectedMonth, setSelectedMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Nombres de meses
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];
    // Título del calendario
    const calendarTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return `Año ${selectedYear}`;
    }, [
        selectedYear
    ]);
    // Generar datos por mes
    const months = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        return monthNames.map((name, index)=>{
            // Filtrar eventos del mes
            const monthEvents = events.filter((event)=>{
                const eventDate = new Date(event.scheduledDate);
                return eventDate.getMonth() === index && eventDate.getFullYear() === selectedYear;
            });
            // Contar por tipo
            const preventivos = monthEvents.filter((e)=>e.type === 'Preventivo').length;
            const correctivos = monthEvents.filter((e)=>e.type === 'Correctivo').length;
            const calibraciones = monthEvents.filter((e)=>e.type === 'Calibración').length;
            return {
                number: index,
                name,
                preventivos,
                correctivos,
                calibraciones,
                total: monthEvents.length,
                isCurrent: index === currentMonth && selectedYear === currentYear
            };
        });
    }, [
        events,
        selectedYear
    ]);
    // Cargar eventos
    async function loadEvents() {
        setIsLoading(true);
        try {
            // Cargar todos los eventos del año
            const allEvents = [];
            for(let month = 0; month < 12; month++){
                const monthEvents = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$services$2f$maintenanceApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maintenanceApi"].getMaintenanceEvents({
                    selectedMonth: month,
                    selectedYear: selectedYear,
                    selectedType: 'all',
                    selectedStatus: 'all',
                    selectedSede: 'all',
                    searchQuery: ''
                });
                allEvents.push(...monthEvents);
            }
            setEvents(allEvents);
        } catch (error) {
            console.error('Error cargando eventos:', error);
        } finally{
            setIsLoading(false);
        }
    }
    // Navegación
    function previousYear() {
        setSelectedYear((prev)=>prev - 1);
    }
    function nextYear() {
        setSelectedYear((prev)=>prev + 1);
    }
    function goToToday() {
        setSelectedYear(currentDate.getFullYear());
    }
    function selectMonth(month) {
        setSelectedMonth(month);
        console.log('Mes seleccionado:', monthNames[month], selectedYear);
    }
    // Función para obtener eventos filtrados por mes y tipo
    function getEventsByMonthAndType(month, type) {
        return events.filter((event)=>{
            const eventDate = new Date(event.scheduledDate);
            return eventDate.getMonth() === month && eventDate.getFullYear() === selectedYear && event.type === type;
        });
    }
    // Cargar eventos cuando cambia el año
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        loadEvents();
    }, [
        selectedYear
    ]);
    return {
        calendarTitle,
        months,
        isLoading,
        selectedYear,
        selectedMonth,
        events,
        loadEvents,
        previousYear,
        nextYear,
        goToToday,
        selectMonth,
        getEventsByMonthAndType
    };
}
_s(useYearlyMaintenanceCalendar, "zcf/WCll6M8WaRzEZslfYt6YUiw=");

})()),
"[project]/src/app/(app)/maintenance/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>MaintenancePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/components/maintenance-calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$events$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/components/maintenance-events-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$hooks$2f$useYearlyMaintenanceCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/hooks/useYearlyMaintenanceCalendar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$services$2f$maintenanceApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/maintenance/services/maintenanceApi.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function MaintenancePage() {
    _s();
    const { months, isLoading, selectedYear, loadEvents, getEventsByMonthAndType } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$hooks$2f$useYearlyMaintenanceCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useYearlyMaintenanceCalendar"]();
    const [isModalOpen, setIsModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selectedEvents, setSelectedEvents] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [selectedType, setSelectedType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedMonth, setSelectedMonth] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    function handleShowEvents(month, type) {
        setSelectedMonth(month);
        setSelectedType(type);
        const events = getEventsByMonthAndType(month, type);
        setSelectedEvents(events);
        setIsModalOpen(true);
    }
    function closeModal() {
        setIsModalOpen(false);
        setSelectedType(null);
        setSelectedMonth(null);
        setSelectedEvents([]);
    }
    async function handleProcessUpdate(eventId, process) {
        try {
            // Actualizar en el API
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$services$2f$maintenanceApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maintenanceApi"].updateMaintenanceEvent(eventId, {
                process: process || undefined
            });
            // Recargar eventos para sincronizar
            if (selectedMonth !== null && selectedType) {
                const updatedEvents = getEventsByMonthAndType(selectedMonth, selectedType);
                setSelectedEvents(updatedEvents);
            }
        } catch (error) {
            console.error('Error actualizando proceso:', error);
        }
    }
    async function handleMaintenanceComplete(data) {
        try {
            // Actualizar en el API
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$services$2f$maintenanceApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maintenanceApi"].updateMaintenanceEvent(data.eventId, {
                process: 'Completado',
                completedDate: data.exactCompletionDate.split('T')[0],
                exactCompletionDate: data.exactCompletionDate,
                reportNumber: data.reportNumber,
                completionNotes: data.completionNotes,
                reportFile: data.reportFile ? data.reportFile.name : undefined
            });
            // Recargar eventos para sincronizar
            if (selectedMonth !== null && selectedType) {
                const updatedEvents = getEventsByMonthAndType(selectedMonth, selectedType);
                setSelectedEvents(updatedEvents);
            }
            // Recargar todos los eventos del año
            loadEvents();
        } catch (error) {
            console.error('Error completando mantenimiento:', error);
            alert('Error al completar el mantenimiento. Por favor, inténtelo de nuevo.');
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-full space-y-8 pb-8",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-4",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaintenanceCalendar"], {
                    months: months,
                    isLoading: isLoading,
                    onSelectMonth: (month)=>console.log('Mes seleccionado:', month),
                    onShowEvents: handleShowEvents
                }, void 0, false, {
                    fileName: "<[project]/src/app/(app)/maintenance/page.tsx>",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(app)/maintenance/page.tsx>",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$components$2f$maintenance$2d$events$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaintenanceEventsModal"], {
                isOpen: isModalOpen,
                events: selectedEvents,
                type: selectedType,
                month: selectedMonth,
                year: selectedYear,
                onClose: closeModal,
                onUpdateProcess: handleProcessUpdate,
                onComplete: handleMaintenanceComplete
            }, void 0, false, {
                fileName: "<[project]/src/app/(app)/maintenance/page.tsx>",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(app)/maintenance/page.tsx>",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_s(MaintenancePage, "Zf6UziW5JS6gLfpYzlXbTyhplTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$maintenance$2f$hooks$2f$useYearlyMaintenanceCalendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useYearlyMaintenanceCalendar"]
    ];
});
_c = MaintenancePage;
var _c;
__turbopack_refresh__.register(_c, "MaintenancePage");

})()),
"[project]/src/app/(app)/maintenance/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_c5fc3a._.js.map