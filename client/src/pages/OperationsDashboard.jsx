
export default function OperationsDashboard() {
    return (
        <div className="flex-1 overflow-y-auto h-full relative">
            <section className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
{/* Page Heading & Overview */}
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
<div>
<h2 className="text-4xl font-extrabold text-on-surface tracking-tight font-headline">Operations Dashboard</h2>
<p className="text-secondary mt-1 max-w-md">Real-time oversight of urban maintenance requests and citizen-reported diplomatic resolutions.</p>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-highest text-on-surface px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-surface-dim transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="file_download">file_download</span>
                            Export Report
                        </button>
<button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            New Log
                        </button>
</div>
</div>
{/* Stats Bento Grid (Visual Context) */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] uppercase tracking-widest font-bold text-secondary">Active Pending</span>
<span className="material-symbols-outlined text-amber-500 text-[20px]" data-icon="pending_actions">pending_actions</span>
</div>
<div className="text-3xl font-black font-headline">142</div>
<div className="mt-2 flex items-center text-xs text-error font-medium">
<span className="material-symbols-outlined text-sm mr-1" data-icon="trending_up">trending_up</span> 12% from yesterday
                        </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] uppercase tracking-widest font-bold text-secondary">Critical Response</span>
<span className="material-symbols-outlined text-error text-[20px]" data-icon="warning">warning</span>
</div>
<div className="text-3xl font-black font-headline">08</div>
<div className="mt-2 flex items-center text-xs text-green-600 font-medium">
<span className="material-symbols-outlined text-sm mr-1" data-icon="verified">verified</span> Within SLA
                        </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] uppercase tracking-widest font-bold text-secondary">Resolved Today</span>
<span className="material-symbols-outlined text-blue-500 text-[20px]" data-icon="task_alt">task_alt</span>
</div>
<div className="text-3xl font-black font-headline">89</div>
<div className="mt-2 flex items-center text-xs text-blue-600 font-medium">
<span className="material-symbols-outlined text-sm mr-1" data-icon="bolt">bolt</span> Avg. 4.2h resolution
                        </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.65rem] uppercase tracking-widest font-bold text-secondary">Diplomacy Index</span>
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="public">public</span>
</div>
<div className="text-3xl font-black font-headline">98.4%</div>
<div className="mt-2 flex items-center text-xs text-green-600 font-medium">
<span className="material-symbols-outlined text-sm mr-1" data-icon="check_circle">check_circle</span> Optimized
                        </div>
</div>
</div>
{/* Filter Bar */}
<div className="glass-panel sticky top-4 z-40 p-4 rounded-2xl border border-outline-variant/20 shadow-sm mb-6 flex flex-wrap items-center gap-4">
<div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
<label className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary px-1">Status</label>
<select className="bg-surface-container border-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 py-2 px-3">
<option>All Statuses</option>
<option>Pending</option>
<option>In-Review</option>
<option>Assigned</option>
<option>Resolved</option>
<option>Rejected</option>
</select>
</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
<label className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary px-1">Issue Type</label>
<select className="bg-surface-container border-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 py-2 px-3">
<option>All Issues</option>
<option>Pothole</option>
<option>Garbage</option>
<option>Leak</option>
<option>Lighting</option>
<option>Other</option>
</select>
</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-[150px]">
<label className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary px-1">Severity</label>
<select className="bg-surface-container border-none text-sm rounded-lg focus:ring-2 focus:ring-blue-500 py-2 px-3">
<option>All Severity</option>
<option>Critical</option>
<option>High</option>
<option>Medium</option>
<option>Low</option>
</select>
</div>
<div className="flex items-end h-full self-end pb-0.5">
<button className="bg-surface-container-highest p-2 rounded-lg hover:bg-surface-dim transition-colors">
<span className="material-symbols-outlined text-on-surface" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/* Complaints List / Table */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Issue &amp; ID</th>
<th className="px-6 py-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Status</th>
<th className="px-6 py-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Severity</th>
<th className="px-6 py-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Location</th>
<th className="px-6 py-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/* Row 1 */}
<tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
<span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Main Water Pipe Leak</p>
<p className="text-[0.65rem] text-secondary font-mono tracking-tighter">CASE-#94021 • Today, 08:45 AM</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
                                            Pending
                                        </span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container text-on-error-container">
                                            Critical
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-sm text-secondary">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                                            42nd Ave &amp; Lexington St.
                                        </div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Deep Pothole Hazard</p>
<p className="text-[0.65rem] text-secondary font-mono tracking-tighter">CASE-#93988 • Yesterday, 02:15 PM</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                                            Assigned
                                        </span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                                            High
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-sm text-secondary">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                                            East Side Industrial Park
                                        </div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</button>
</td>
</tr>
{/* Row 3: Skeleton Loader Simulation */}
<tr className="animate-pulse">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container"></div>
<div className="space-y-2">
<div className="h-3 w-32 bg-surface-container rounded"></div>
<div className="h-2 w-20 bg-surface-container-low rounded"></div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="h-5 w-20 bg-surface-container rounded-full"></div>
</td>
<td className="px-6 py-5">
<div className="h-5 w-16 bg-surface-container rounded-full"></div>
</td>
<td className="px-6 py-5">
<div className="h-4 w-24 bg-surface-container rounded"></div>
</td>
<td className="px-6 py-5 text-right">
<div className="inline-block h-8 w-8 bg-surface-container rounded-lg"></div>
</td>
</tr>
{/* Row 4 */}
<tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-700">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Missed Garbage Collection</p>
<p className="text-[0.65rem] text-secondary font-mono tracking-tighter">CASE-#93822 • 2 days ago</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                                            Resolved
                                        </span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                                            Low
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-sm text-secondary">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                                            Westbury Residential Zone
                                        </div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="group hover:bg-surface-container-low transition-colors cursor-pointer border-none">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
<span className="material-symbols-outlined" data-icon="lightbulb">lightbulb</span>
</div>
<div>
<p className="font-bold text-sm text-on-surface">Street Light Outage</p>
<p className="text-[0.65rem] text-secondary font-mono tracking-tighter">CASE-#93776 • 3 days ago</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                                            In-Review
                                        </span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-high text-on-surface">
                                            Medium
                                        </span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1.5 text-sm text-secondary">
<span className="material-symbols-outlined text-[16px]" data-icon="location_on">location_on</span>
                                            Downtown Transit Plaza
                                        </div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-primary hover:bg-primary-container/10 p-2 rounded-lg transition-all active:scale-95">
<span className="material-symbols-outlined" data-icon="arrow_forward_ios">arrow_forward_ios</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="bg-surface-container-low/30 px-6 py-4 flex items-center justify-between">
<p className="text-xs text-secondary font-medium">Showing <span className="text-on-surface font-bold">1-10</span> of <span className="text-on-surface font-bold">1,244</span> cases</p>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors disabled:opacity-40" disabled="">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-bold transition-colors">2</button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-bold transition-colors">3</button>
<span className="px-1 text-secondary text-xs">...</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-bold transition-colors">125</button>
</div>
<button className="p-1.5 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Footer Context / Support */}
<footer className="mt-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-outline-variant/10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
</div>
<div>
<p className="text-sm font-bold text-on-surface">Need Technical Assistance?</p>
<p className="text-xs text-secondary">CiviAI Ops Team is online. <a className="text-blue-600 font-semibold underline underline-offset-2" href="#">Open Chat</a></p>
</div>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-slate-400 font-bold">
                        © 2024 CiviAI Digital Diplomat System. All rights reserved.
                    </div>
</footer>
</div>
</section>
        </div>
    );
}
