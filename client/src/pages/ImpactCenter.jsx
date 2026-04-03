
export default function ImpactCenter() {
    return (
        <div className="flex-1 overflow-y-auto h-full relative">
            <section className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-2xl text-white relative overflow-hidden shadow-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-on-primary-container" data-icon="auto_awesome">auto_awesome</span>
<h3 className="text-[0.75rem] uppercase tracking-[0.2em] font-bold text-on-primary-container">Civic Impact Pulse</h3>
</div>
<h4 className="text-2xl font-semibold mb-4 leading-snug">Current stability index remains high, but infrastructure fatigue in District 4 is trending towards critical.</h4>
<p className="text-on-primary-container/80 text-lg font-light leading-relaxed mb-6">
                                The Digital Diplomat AI has detected a 14% increase in sanitation-related reports concentrated in the East Gateway corridor. While resolution times remain within the SLA, the concentration of complaints suggests an underlying utility failure rather than isolated incidents. Verification coverage in this sector is 100%, confirming that 82% of reports are authentic civic grievances.
                            </p>
<div className="flex gap-4">
<button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors border border-white/20">Analyze Root Cause</button>
<button className="px-6 py-2 bg-on-primary-container text-primary font-semibold rounded-lg text-sm shadow-lg shadow-black/20 hover:scale-105 transition-transform">Deploy Resources</button>
</div>
</div>
</section>
        </div>
    );
}
