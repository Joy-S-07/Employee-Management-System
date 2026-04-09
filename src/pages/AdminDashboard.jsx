import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const containerRef = useRef(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.sidebar', { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .fromTo('.topbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo('.content-header', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .fromTo('.stat-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.3")
      .fromTo('.activity-item', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2")
      .fromTo('.side-widget', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-background text-on-surface min-h-screen font-body relative overflow-hidden">
      {/* SideNavBar Component */}
      <aside className="sidebar h-screen w-64 fixed left-0 top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl flex flex-col py-8 px-4 border-r border-transparent shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] z-50">
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 uppercase">Ethereal Workplace</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Crystalline Executive</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full hover:bg-sky-100/50 dark:hover:bg-sky-800/30" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label text-sm tracking-wider">Dashboard</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30" href="#">
            <span className="material-symbols-outlined">assignment</span>
            <span className="font-label text-sm tracking-wider">Tasks</span>
          </a>
          <a className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label text-sm tracking-wider">Profile</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 space-y-2 border-t border-slate-200/20">
          <button className="w-full bg-primary-container text-primary-fixed py-4 rounded-xl font-bold tracking-wide mb-6 hover:brightness-110 transition-all shadow-lg shadow-primary/10 text-white">
            New Entry
          </button>
          
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-error font-medium hover:bg-error-container/50">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label text-sm tracking-wider uppercase">Sign Out</span>
          </button>

          <div className="flex items-center space-x-3 px-2 mt-2 pt-6 border-t border-slate-200/20">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE4lEzz5xp_29ucpMmxORAzZyMqhu7lvpN3MzWHCHeZSiKi1RJloXqHanXF5jFMam7mrkHL459VxwIMyXrbTe8q6qXCiamzJ1drld0wr5wIIWh073GMumvlh3jkNhIS63G4Wzj7cwYRYL_nAv40bR8zw2PslbMh1hG6TfC5IPUa2bsX2kOpwyYl4kvwTYPAjZOS_TylS9g4g_bot8ftHV96jPHFldQddvQx8EtqYtvgFB53AGK2T-Effunh8YSVF3fm_NQn0gyE0o" />
            </div>
            <div>
              <p className="text-xs font-bold text-sky-900">{user?.name || 'Admin Executive'}</p>
              <p className="text-[10px] text-slate-400">System Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Component */}
      <header className="topbar fixed top-0 right-0 left-64 h-16 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">Admin Dashboard</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Global search..." type="text"/>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-sky-900">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 ml-2">
              <img className="w-full h-full object-cover" alt="User Top Bar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv8xr5H9R-XvnxhDjE3qfCVbDfY6wcrIQ6a-07MVDJ4ZOHwq1jANApl5KChyF9dsXlcqZ2mJZrlS_Zt9q0nxOrmMkyvGS1Pt8LQPO0TU4q42niSHulXVHXloHzwGLth6pR44fIr4T4Dz_9e2nQtYh89A4E6F-FrUctCPllEz9VvEN2zfwban8XLFX66O6OguCvHZAWA6Qdc-OG1iJvlMM-2dJiBdnp3JM5HYu8PujhwuKvD9UXlhZBW27L7l-_CEY8goshMMqhVUSD"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
        {/* Welcome Header */}
        <div className="mb-10 content-header">
          <h3 className="font-headline text-3xl font-extrabold text-primary mb-1">Morning, {user?.name?.split(' ')[0] || 'Executive'}.</h3>
          <p className="text-on-surface-variant font-medium tracking-wide">The workspace is fluid. You have 4 high-priority tasks pending.</p>
        </div>

        {/* High-Level Stats Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="stat-card glass-card p-8 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] relative overflow-hidden group border border-white/20">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">Total Employees</p>
            <div className="flex items-baseline space-x-2">
              <span className="font-headline text-5xl font-black text-primary">1,284</span>
              <span className="text-secondary font-bold text-sm">+12%</span>
            </div>
          </div>
          
          <div className="stat-card glass-card p-8 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] border border-white/20">
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-2">Tasks Pending</p>
            <div className="flex items-baseline space-x-2">
              <span className="font-headline text-5xl font-black text-primary">42</span>
              <span className="bg-error-container text-on-error-container px-2 py-0.5 rounded font-label text-[10px] font-bold">URGENT</span>
            </div>
            <div className="mt-6 h-2 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[65%] rounded-full"></div>
            </div>
            <p className="mt-2 text-[10px] text-slate-400 font-medium">65% OF CAPACITY REACHED</p>
          </div>
          
          <div className="stat-card glass-card p-8 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] border border-white/20 bg-primary text-white">
            <p className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-primary-fixed mb-2">Completed Tasks</p>
            <div className="flex items-baseline space-x-2">
              <span className="font-headline text-5xl font-black">948</span>
              <span className="text-secondary-fixed font-bold text-sm">↑ 4%</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-all backdrop-blur-sm">View Report</button>
              <span className="material-symbols-outlined text-secondary-fixed">analytics</span>
            </div>
          </div>
        </div>

        {/* Main Dashboard Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Recent Activity Feed (Left) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-headline text-xl font-bold text-primary">Recent Activity</h4>
              <button className="text-xs font-bold text-secondary hover:underline tracking-wider uppercase">Export Logs</button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'New Hire: Sarah Jenkins', desc: 'Onboarding phase initiated for Product Design', icon: 'person_add', bg: 'bg-secondary-container', color: 'text-primary', time: '2m ago' },
                { title: 'Payroll Finalized', desc: 'Q3 Bonus structures have been approved', icon: 'verified', bg: 'bg-tertiary-fixed', color: 'text-tertiary', time: '45m ago' },
                { title: 'Server Latency Alert', desc: 'East Coast data nodes reporting 400ms lag', icon: 'warning', bg: 'bg-error-container', color: 'text-on-error-container', time: '2h ago' },
                { title: 'Archive Maintenance', desc: '2023 Employee records migrated to cold storage', icon: 'folder', bg: 'bg-surface-container-high', color: 'text-surface-variant', time: 'Yesterday' }
              ].map((activity, idx) => (
                <div key={idx} className="activity-item glass-card p-5 rounded-2xl border border-white/30 flex items-center justify-between hover:bg-surface-bright transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-2xl ${activity.bg} flex items-center justify-center ${activity.color}`}>
                      <span className="material-symbols-outlined">{activity.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">{activity.title}</p>
                      <p className="text-xs text-on-surface-variant">{activity.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-on-surface">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Insights (Right) */}
          <div className="lg:col-span-4 space-y-6">
            <button className="side-widget w-full bg-primary text-white p-6 rounded-3xl shadow-xl shadow-primary/20 flex flex-col items-center justify-center space-y-3 group hover:scale-[1.02] transition-all">
              <div className="p-3 bg-white/20 rounded-2xl group-hover:rotate-90 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl">add_task</span>
              </div>
              <span className="text-lg font-bold tracking-tight">Assign New Task</span>
            </button>

            <div className="side-widget glass-card p-6 rounded-3xl border border-white/20 relative overflow-hidden">
              <h5 className="text-sm font-bold text-primary mb-4 flex items-center">
                <span className="material-symbols-outlined text-sm mr-2">lightbulb</span> Executive Insight
              </h5>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Employee retention is up <span className="text-secondary font-bold">14.2%</span> since implementing the crystalline workflow. Peak productivity is recorded between <span className="font-bold">10 AM — 12 PM</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
