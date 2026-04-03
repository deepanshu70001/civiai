import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="bg-background text-on-surface flex min-h-screen overflow-hidden font-body">
      {/* SideNavBar */}
      <aside className="hidden lg:flex flex-col h-screen w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-6 px-4 shrink-0">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-sm">shield</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-slate-900 dark:text-white leading-none font-headline">CiviAI</h1>
            <p className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-bold mt-1">Digital Diplomat</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all rounded-lg flex items-center gap-3 ${
                isActive ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold translate-x-1 duration-200" : "text-slate-600 dark:text-slate-400"
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">analytics</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Impact Center</span>
          </NavLink>
          
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all rounded-lg flex items-center gap-3 ${
                isActive ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold translate-x-1 duration-200" : "text-slate-600 dark:text-slate-400"
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Dashboard</span>
          </NavLink>

          <NavLink
            to="/queue"
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all rounded-lg flex items-center gap-3 ${
                isActive ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold translate-x-1 duration-200" : "text-slate-600 dark:text-slate-400"
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Admin Queue</span>
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              `px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all rounded-lg flex items-center gap-3 ${
                isActive ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold translate-x-1 duration-200" : "text-slate-600 dark:text-slate-400"
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Report Issue</span>
          </NavLink>
        </nav>
        <div className="mt-auto flex flex-col gap-1 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Notifications</span>
          </button>
          <button className="text-slate-600 dark:text-slate-400 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all flex items-center gap-3">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="text-[0.75rem] uppercase tracking-wider font-semibold">Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* TopNavBar */}
        <header className="bg-slate-50 dark:bg-slate-950 docked full-width top-0 z-50 sticky">
          <div className="flex justify-between items-center w-full px-6 py-3 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-8">
              <span className="lg:hidden text-xl font-black tracking-tight text-slate-900 dark:text-white font-headline">CiviAI</span>
              <nav className="hidden md:flex gap-6">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `text-[0.75rem] uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isActive ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300"
                    }`
                  }
                >
                  Impact Center
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-[0.75rem] uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isActive ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/queue"
                  className={({ isActive }) =>
                    `text-[0.75rem] uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isActive ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300"
                    }`
                  }
                >
                  Admin Queue
                </NavLink>
                <NavLink
                  to="/report"
                  className={({ isActive }) =>
                    `text-[0.75rem] uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isActive ? "text-blue-700 dark:text-blue-400 font-bold border-b-2 border-blue-700 dark:border-blue-400 pb-1" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300"
                    }`
                  }
                >
                  Report Issue
                </NavLink>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <input className="bg-slate-100 dark:bg-slate-900 border-none rounded-full px-10 py-2 text-sm w-64 focus:ring-2 focus:ring-blue-500" placeholder="Search operations..." type="text"/>
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-sm">search</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 rounded-full transition-colors">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 rounded-full transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </button>
                <img alt="User profile" className="w-8 h-8 rounded-full ml-2 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP49n66AwdQ4bUJaSni-3-DzceJlUeZl4A4--DJIFgDUJk0NXt2JS4T0z2YsHEaKawWm2QZp60ubL2BVsSq72uQMWU1iApxdHLmp5A8XpJYRz_MnlYKzr_kN3TFsZTwnIu-474oedYgsI_mm4Rk-vZeiQIzJUuuk4bBkegAli7Ui0FqOyDlpeSyn_3JwFx9v51Z0gr7lfg2UHrdYlp_BIpGy_MFDHKyOAYwYa6Xut0X-rZU9gZJV6xMQJgUS_6brc62h4z0-7S2cM"/>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-hidden relative">
            <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-outline-variant/10 px-6 py-3 flex justify-between items-center z-[60]">
        <NavLink to="/dashboard" className={({isActive}) => `flex flex-col items-center gap-1 ${isActive ? "text-blue-700 font-bold" : "text-slate-500"}`}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Dashboard</span>
        </NavLink>
        <NavLink to="/" end className={({isActive}) => `flex flex-col items-center gap-1 ${isActive ? "text-blue-700 font-bold" : "text-slate-500"}`}>
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Impact</span>
        </NavLink>
        <NavLink to="/queue" className={({isActive}) => `flex flex-col items-center gap-1 ${isActive ? "text-blue-700 font-bold" : "text-slate-500"}`}>
          <span className="material-symbols-outlined">admin_panel_settings</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Queue</span>
        </NavLink>
        <NavLink to="/report" className={({isActive}) => `flex flex-col items-center gap-1 ${isActive ? "text-blue-700 font-bold" : "text-slate-500"}`}>
          <span className="material-symbols-outlined">add_circle</span>
          <span className="text-[10px] uppercase font-bold tracking-tighter">Report</span>
        </NavLink>
      </nav>
    </div>
  );
}
