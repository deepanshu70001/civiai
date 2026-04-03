
export default function ComplaintDetail() {
    return (
        <div className="flex-1 overflow-y-auto h-full relative">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Before Image Card */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
<div className="relative h-64 overflow-hidden">
<img alt="Evidence of pothole" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close-up photo of a deep dangerous pothole in an asphalt city street with grey overcast lighting and rain puddles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZYAyLIwhwyZPFDZJlPib5E7jGenCTLPriOjqAKJVrtQ9MAsizq589i3_RaRwIc8-HOMwGsG9SGwG61H1ReaBmbmCmC79NGmpm5Bdmd1dpmLIj-Ytf8oP9njIlM0n_ffpOc28nbhY08nz4NzN5TcVyhjP8hIfzOVVc8xLX2NsOCcjhRTaev-0bUkor5lgX6-ifB2c5dtBiyrD7BY1hjTCZWNTypttP4OeivJ07H5faBGD52Td46eqxOn1sD1jkhUA0M7pMYZE_rvE"/>
<div className="absolute top-4 left-4">
<span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest">Evidence: Before</span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
<span className="material-symbols-outlined text-blue-600 text-sm" data-icon="verified" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="text-[0.65rem] font-bold text-slate-800">Metadata Verified</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-500 text-sm" data-icon="calendar_today">calendar_today</span>
</div>
<span className="text-xs font-semibold text-slate-600">Oct 24, 2023 · 09:12 AM</span>
</div>
<button className="text-blue-700 text-xs font-bold hover:underline">View Metadata</button>
</div>
</div>
{/* Map Card */}
<div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
<div className="flex-1 bg-slate-200 relative min-h-[200px]">
{/* Placeholder for Map */}
<img alt="Location Map" className="w-full h-full object-cover opacity-80" data-alt="stylized architectural map of a city intersection with clean lines and a soft blue color palette" data-location="New York" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc9ZdGA7qTYtiJpJov2nSBuDnSwGv0JLG-yA28eNN9oRh2VI7YIleQmDnYz7M9mYDbxyb7tVWaSRikVlRM4ez1t9EAX0ALGMMvOaBqfRJnhvyN-s2QVPJJ-ZZAuDj51WeTvZUSbDVGslH6ImWfkdnCWTbxCNegNMhHDCSJyap81CUOyTKZoaIyLXdzxIi_YaCpP_tZCMzthfHqi4EK6-9jBJdChVItNQozBtoeq8gsKxEu3SK_4ONlTsRlxa2COeLrWiLjldGU7ik"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
<div className="w-4 h-4 bg-primary rounded-full"></div>
</div>
</div>
</div>
<div className="p-4 space-y-1 bg-surface-container-lowest">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-sm" data-icon="location_on" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
<h4 className="text-sm font-bold text-slate-800">5th Ave &amp; Madison St</h4>
</div>
<p className="text-[0.7rem] text-slate-500 pl-6 uppercase tracking-wider font-medium">Lat: 40.7128 | Long: -74.0060</p>
</div>
</div>
</section>
        </div>
    );
}
