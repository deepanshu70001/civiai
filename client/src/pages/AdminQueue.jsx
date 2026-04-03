
export default function AdminQueue() {
    return (
        <div className="flex-1 overflow-y-auto h-full relative">
            <main className="flex-1 p-6 md:p-8 space-y-8 max-w-[1440px] mx-auto w-full">
{/* Page Header & Metrics */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Admin Queue</h2>
<p className="text-secondary font-medium mt-1">Manage and resolve reported civic issues through bulk operations.</p>
</div>
<div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<div className="bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm border-l-4 border-amber-500 min-w-[120px]">
<p className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary mb-1">Pending</p>
<p className="text-2xl font-black font-headline text-on-surface leading-tight">142</p>
</div>
<div className="bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm border-l-4 border-blue-500 min-w-[120px]">
<p className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary mb-1">Assigned</p>
<p className="text-2xl font-black font-headline text-on-surface leading-tight">86</p>
</div>
<div className="bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm border-l-4 border-purple-500 min-w-[120px]">
<p className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary mb-1">In-Review</p>
<p className="text-2xl font-black font-headline text-on-surface leading-tight">41</p>
</div>
<div className="bg-surface-container-lowest px-4 py-3 rounded-xl shadow-sm border-l-4 border-emerald-500 min-w-[120px]">
<p className="text-[0.65rem] uppercase tracking-wider font-bold text-secondary mb-1">Resolved</p>
<p className="text-2xl font-black font-headline text-on-surface leading-tight">1.2k</p>
</div>
</div>
</div>
{/* Bulk Actions & Filters Row */}
<div className="bg-surface-container px-4 py-3 rounded-xl flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 pr-4 border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Select All</span>
</div>
<div className="flex items-center gap-2">
<button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="assignment_ind">assignment_ind</span>
                            Bulk Assign
                        </button>
<button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="published_with_changes">published_with_changes</span>
                            Change Status
                        </button>
<button className="bg-error-container hover:opacity-90 text-on-error-container text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="delete_sweep">delete_sweep</span>
                            Archive
                        </button>
</div>
</div>
<div className="flex items-center gap-3">
<select className="bg-surface-container-lowest border-none rounded-lg text-xs font-semibold px-3 py-2 outline-none focus:ring-2 focus:ring-primary/10">
<option>Department: All</option>
<option>Sanitation</option>
<option>Public Safety</option>
<option>Infrastructure</option>
</select>
<select className="bg-surface-container-lowest border-none rounded-lg text-xs font-semibold px-3 py-2 outline-none focus:ring-2 focus:ring-primary/10">
<option>Urgency: High</option>
<option>Urgency: Med</option>
<option>Urgency: Low</option>
</select>
<button className="p-2 bg-primary-container text-on-primary-container rounded-lg">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
{/* High-Density Data Grid */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/15">
<th className="py-4 px-4 w-10"></th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Case ID</th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Issue Type</th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Department</th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Reported</th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary">Status</th>
<th className="py-4 px-4 text-[0.65rem] uppercase tracking-widest font-black text-secondary text-right">Fast Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
{/* Row 1 */}
<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
</td>
<td className="py-3 px-4">
<span className="font-mono text-sm font-bold text-on-surface">CIV-88421</span>
</td>
<td className="py-3 px-4">
<div>
<p className="text-sm font-semibold text-on-surface">Illegal Dumping Site</p>
<p className="text-[0.65rem] text-secondary">Main St &amp; 4th Ave</p>
</div>
</td>
<td className="py-3 px-4">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[0.6rem] font-bold uppercase tracking-wider">Sanitation</span>
</td>
<td className="py-3 px-4">
<p className="text-xs text-on-surface-variant font-medium">2h ago</p>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-xs font-bold text-on-surface">Pending</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded transition-colors" title="Approve">
<span className="material-symbols-outlined text-[18px]" data-icon="check_circle">check_circle</span>
</button>
<button className="p-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors" title="Assign">
<span className="material-symbols-outlined text-[18px]" data-icon="person_add">person_add</span>
</button>
<button className="p-1.5 bg-error-container text-on-error-container hover:opacity-80 rounded transition-colors" title="Reject">
<span className="material-symbols-outlined text-[18px]" data-icon="cancel">cancel</span>
</button>
</div>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
</td>
<td className="py-3 px-4">
<span className="font-mono text-sm font-bold text-on-surface">CIV-88390</span>
</td>
<td className="py-3 px-4">
<div>
<p className="text-sm font-semibold text-on-surface">Damaged Fire Hydrant</p>
<p className="text-[0.65rem] text-secondary">Industrial Zone B</p>
</div>
</td>
<td className="py-3 px-4">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[0.6rem] font-bold uppercase tracking-wider">Public Safety</span>
</td>
<td className="py-3 px-4">
<p className="text-xs text-on-surface-variant font-medium">5h ago</p>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-bold text-on-surface">Assigned</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded transition-colors" title="Complete">
<span className="material-symbols-outlined text-[18px]" data-icon="done_all">done_all</span>
</button>
<button className="p-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors" title="Reassign">
<span className="material-symbols-outlined text-[18px]" data-icon="swap_horiz">swap_horiz</span>
</button>
<button className="p-1.5 bg-amber-100 text-amber-700 hover:bg-amber-200 rounded transition-colors" title="Flag">
<span className="material-symbols-outlined text-[18px]" data-icon="flag">flag</span>
</button>
</div>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
</td>
<td className="py-3 px-4">
<span className="font-mono text-sm font-bold text-on-surface">CIV-88312</span>
</td>
<td className="py-3 px-4">
<div>
<p className="text-sm font-semibold text-on-surface">Streetlight Outage</p>
<p className="text-[0.65rem] text-secondary">Oak Ridge Residential</p>
</div>
</td>
<td className="py-3 px-4">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[0.6rem] font-bold uppercase tracking-wider">Infrastructure</span>
</td>
<td className="py-3 px-4">
<p className="text-xs text-on-surface-variant font-medium">1d ago</p>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-xs font-bold text-on-surface">Pending</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded transition-colors" title="Approve">
<span className="material-symbols-outlined text-[18px]" data-icon="check_circle">check_circle</span>
</button>
<button className="p-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors" title="Assign">
<span className="material-symbols-outlined text-[18px]" data-icon="person_add">person_add</span>
</button>
<button className="p-1.5 bg-error-container text-on-error-container hover:opacity-80 rounded transition-colors" title="Reject">
<span className="material-symbols-outlined text-[18px]" data-icon="cancel">cancel</span>
</button>
</div>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container/30 transition-colors group">
<td className="py-3 px-4">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox"/>
</td>
<td className="py-3 px-4">
<span className="font-mono text-sm font-bold text-on-surface">CIV-88204</span>
</td>
<td className="py-3 px-4">
<div>
<p className="text-sm font-semibold text-on-surface">Pothole Expansion</p>
<p className="text-[0.65rem] text-secondary">Exit 22 Northbound</p>
</div>
</td>
<td className="py-3 px-4">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[0.6rem] font-bold uppercase tracking-wider">Infrastructure</span>
</td>
<td className="py-3 px-4">
<p className="text-xs text-on-surface-variant font-medium">2d ago</p>
</td>
<td className="py-3 px-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-bold text-on-surface">In-Review</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded transition-colors" title="Approve">
<span className="material-symbols-outlined text-[18px]" data-icon="check_circle">check_circle</span>
</button>
<button className="p-1.5 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded transition-colors" title="Assign">
<span className="material-symbols-outlined text-[18px]" data-icon="person_add">person_add</span>
</button>
<button className="p-1.5 bg-error-container text-on-error-container hover:opacity-80 rounded transition-colors" title="Reject">
<span className="material-symbols-outlined text-[18px]" data-icon="cancel">cancel</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant/10 flex items-center justify-between">
<p className="text-xs font-semibold text-secondary">Showing 1 to 25 of 142 results</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded hover:bg-surface-container-high text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded hover:bg-surface-container-high text-xs font-bold">2</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded hover:bg-surface-container-high text-xs font-bold">3</button>
<button className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest border border-outline-variant/30 rounded hover:bg-surface-container-high text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Contextual Insight (Bento Element) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-primary-container p-6 rounded-2xl md:col-span-2 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<h3 className="text-on-primary-container text-xl font-bold font-headline mb-2">Automated Dispatcher Status</h3>
<p className="text-on-primary-container/70 text-sm max-w-md">CiviAI is currently routing high-priority safety reports automatically to the Fire and Police departments. 89% precision rate today.</p>
</div>
<div className="relative z-10 mt-6 flex items-center gap-4">
<div className="flex flex-col">
<span className="text-[0.6rem] uppercase tracking-widest font-black text-on-primary-container/50">Load Balance</span>
<span className="text-xl font-headline font-black text-on-primary-container">Optimal</span>
</div>
<div className="h-8 w-px bg-on-primary-container/20"></div>
<div className="flex flex-col">
<span className="text-[0.6rem] uppercase tracking-widest font-black text-on-primary-container/50">Uptime</span>
<span className="text-xl font-headline font-black text-on-primary-container">99.98%</span>
</div>
</div>
{/* Decorative Background */}
<div className="absolute -right-12 -bottom-12 w-64 h-64 bg-on-primary-container/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
</div>
<div className="bg-surface-container-high p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner">
<span className="material-symbols-outlined text-3xl text-primary" data-icon="monitoring">monitoring</span>
</div>
<div>
<h3 className="font-headline font-bold text-on-surface">Queue Velocity</h3>
<p className="text-xs text-secondary mt-1">Average time to initial assignment</p>
</div>
<div className="w-full">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-black uppercase text-secondary">Target: 4h</span>
<span className="text-[10px] font-black uppercase text-primary">Current: 2.8h</span>
</div>
<div className="h-2 w-full bg-secondary-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[70%]"></div>
</div>
</div>
</div>
</div>
</main>
        </div>
    );
}
