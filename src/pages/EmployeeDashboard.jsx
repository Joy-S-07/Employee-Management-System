import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
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
      .fromTo('.stat-card', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.3")
      .fromTo('.task-row', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-surface font-body text-on-surface antialiased min-h-screen relative overflow-hidden">
      {/* SideNavBar */}
      <aside className="sidebar h-screen w-64 fixed left-0 top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl flex flex-col py-8 px-4 border-r border-transparent shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] z-50">
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 font-headline">The Ethereal Workplace</h1>
        </div>
        <div className="flex flex-col space-y-2 mb-auto">
          {/* Dashboard Active */}
          <a onClick={() => navigate('/employee')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full bg-sky-100/50">
            <span className="material-symbols-outlined pb-1">dashboard</span>
            <span className="tracking-wide text-sm font-label">Dashboard</span>
          </a>
          <a onClick={() => navigate('/employee/tasks')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50">
            <span className="material-symbols-outlined pb-1">assignment</span>
            <span className="tracking-wide text-sm font-label">Tasks</span>
          </a>
          <a onClick={() => navigate('/employee/profile')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50">
            <span className="material-symbols-outlined pb-1">person</span>
            <span className="tracking-wide text-sm font-label">Profile</span>
          </a>
        </div>
        <div className="mt-auto border-t border-surface-variant/20 pt-6 space-y-2">
          <button className="w-full mb-6 bg-gradient-to-r from-primary to-primary-container text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-primary/10 transition-all hover:scale-[1.02]">
            <span className="material-symbols-outlined pb-1">add</span>
            <span>New Entry</span>
          </button>
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-error font-medium hover:bg-error-container/50">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label text-sm tracking-wider uppercase">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="topbar fixed top-0 right-0 left-64 h-16 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md flex items-center justify-between px-8 w-full shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">Ethereal Workplace</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search tasks..." type="text"/>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-sky-900 hover:text-sky-700 transition-colors relative">
              <span className="material-symbols-outlined pt-1">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center space-x-3 pl-4 border-l border-surface-variant/30">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-sky-900 leading-none">{user?.name || 'Employee'}</p>
                <p className="text-[10px] text-on-surface-variant tracking-wider uppercase">{user?.title || 'Professional'}</p>
              </div>
              <img alt="User" className="w-10 h-10 rounded-full border-2 border-primary/10 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefQ3gENP3Zro7D9PLtJ0x8ebiTrLnyDZKqfjaIRj4NFhEGRSlyRNK4faKSoQMfD0r10vHIk0LzdfOKNXHRtlfmyzkIgFOpyMlVgW65WUhK2ND-sGOPzDIKCotwrrHV3g1RHLz2jGi6UJayQQ5_q8-gGdu6SX85c1bmTxE5S0zjTdKiXW2g2RMXz1fb5-AK_b4-NIz2yQYeMgtj-slLGdwxWyOaqIVQXd-wrVBcgY0osNLgJrB93AZLwwHaRgM93ACBFqfaxNQ-DUl"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 pb-16 px-8 min-h-screen bg-surface-container-low">
        {/* Welcome Header */}
        <section className="mb-10 content-header">
          <p className="text-on-surface-variant text-sm font-label tracking-widest uppercase mb-1">Monday, May 24</p>
          <h3 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Good Morning, {user?.name?.split(' ')[0] || 'System User'}</h3>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Key Metric: Total Progress */}
          <div className="stat-card col-span-12 lg:col-span-4 glass-card p-8 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] flex flex-col justify-between hover:scale-[1.01] transition-transform">
            <div>
              <h4 className="font-headline text-xl font-bold mb-6 text-sky-900">Personal Progress</h4>
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="text-surface-container-high" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                  <circle className="text-primary transition-all duration-1000" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="70.6" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-headline font-extrabold text-primary tracking-tighter">75%</span>
                  <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Target</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Efficiency Rate</span>
                <span className="font-bold text-sky-900">+12% vs last week</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary w-[85%] h-full rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="stat-card col-span-12 lg:col-span-8 glass-card p-8 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)]">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline text-xl font-bold text-sky-900">Notifications</h4>
              <button className="text-xs font-label text-primary font-bold uppercase tracking-widest hover:underline transition-all">Mark all as read</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start p-4 rounded-2xl hover:bg-surface-bright transition-all group cursor-pointer border border-transparent hover:border-primary/5">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-container mr-4 flex-shrink-0">
                  <span className="material-symbols-outlined">assignment_late</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h5 className="text-sm font-bold text-sky-900">New Task Assigned</h5>
                    <span className="text-[10px] text-on-surface-variant font-medium">2m ago</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">System Architecture Review for Q3 Pipeline has been assigned to you by Sarah Jenkins.</p>
                </div>
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-2xl hover:bg-surface-bright transition-all group cursor-pointer border border-transparent hover:border-primary/5">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container mr-4 flex-shrink-0">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h5 className="text-sm font-bold text-sky-900">New Message</h5>
                    <span className="text-[10px] text-on-surface-variant font-medium">1h ago</span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">"Alexander, could you double-check the budget figures for the Ethereal launch?"</p>
                </div>
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-outline text-sm">chevron_right</span>
                </div>
              </div>
            </div>
          </div>

          {/* My Tasks Section */}
          <div className="stat-card col-span-12 glass-card p-10 rounded-3xl shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
              <div>
                <h4 className="font-headline text-2xl font-bold text-sky-900">My Tasks</h4>
                <p className="text-on-surface-variant text-sm mt-1">Focus on your primary objectives for this sprint.</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-4">
                <thead className="text-left text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  <tr>
                    <th className="pb-4 px-6 font-semibold">Task Name</th>
                    <th className="pb-4 px-6 font-semibold">Status</th>
                    <th className="pb-4 px-6 font-semibold">Deadline</th>
                    <th className="pb-4 px-6 font-semibold">Priority</th>
                    <th className="pb-4 px-6 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Refactor Authentication Hooks', icon: 'terminal', status: 'In Progress', date: 'May 28', priority: 'Critical', bg: 'bg-secondary-container' },
                    { name: 'UI Kit Glassmorphism Audit', icon: 'design_services', status: 'Done', date: 'May 22', priority: 'Medium', bg: 'bg-surface-container-highest' },
                    { name: 'Engagement Metrics Dashboard', icon: 'insights', status: 'In Progress', date: 'June 02', priority: 'High', bg: 'bg-secondary-container' }
                  ].map((task, idx) => (
                    <tr key={idx} className="task-row group hover:bg-secondary-fixed/40 transition-all duration-300 rounded-2xl cursor-pointer">
                      <td className="py-6 px-6 rounded-l-2xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">{task.icon}</span>
                          </div>
                          <span className="font-bold text-sky-900">{task.name}</span>
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <span className={`px-3 py-1 rounded-full ${task.bg} text-[10px] font-black uppercase tracking-wider`}>{task.status}</span>
                      </td>
                      <td className="py-6 px-6 text-sm text-on-surface-variant font-medium">{task.date}</td>
                      <td className="py-6 px-6">
                        <div className={`flex items-center font-bold text-xs uppercase tracking-tighter ${task.priority === 'Critical' ? 'text-error' : 'text-primary'}`}>
                          <span className="material-symbols-outlined text-sm mr-1">{task.priority === 'Critical' ? 'stat_3' : 'stat_1'}</span>
                          {task.priority}
                        </div>
                      </td>
                      <td className="py-6 px-6 rounded-r-2xl text-right">
                        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">more_vert</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
