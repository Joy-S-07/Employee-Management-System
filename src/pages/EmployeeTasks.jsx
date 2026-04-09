import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const EmployeeTasks = () => {
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
      .fromTo('.task-card', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-surface font-body text-on-surface antialiased min-h-screen relative overflow-hidden">
      {/* SideNavBar */}
      <aside className="sidebar h-screen w-64 fixed left-0 top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl flex flex-col py-8 px-4 border-r border-transparent shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] z-50">
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 font-headline">The Ethereal Workplace</h1>
        </div>
        <div className="flex flex-col space-y-2 mb-auto">
          <a onClick={() => navigate('/employee')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50">
            <span className="material-symbols-outlined pb-1">dashboard</span>
            <span className="tracking-wide text-sm font-label">Dashboard</span>
          </a>
          <a onClick={() => navigate('/employee/tasks')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full bg-sky-100/50">
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
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">My Objectives</h2>
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
        <section className="mb-10 content-header flex justify-between items-end">
           <div>
             <h3 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Active Assignments</h3>
             <p className="text-on-surface-variant font-medium mt-1 text-sm">Review, track, and complete your assigned objectives.</p>
           </div>
           
           <div className="flex space-x-2">
              <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md hover:bg-sky-700 transition">Active (4)</button>
              <button className="px-5 py-2 bg-white text-slate-500 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 transition border border-transparent">Completed</button>
           </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kanban / Task Columns */}
          <div className="space-y-4">
             <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-sky-900 border-l-4 border-slate-300 pl-2">To-Do</h4>
                <span className="text-xs font-bold text-slate-400">2</span>
             </div>
             
             {/* Task Card */}
             <div className="task-card glass-card p-5 rounded-2xl border-white/20 hover:cursor-pointer flex flex-col justify-between h-40">
                <div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="px-2 py-0.5 bg-error-container text-error rounded text-[10px] font-bold uppercase tracking-wider">Urgent</span>
                     <span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
                   </div>
                   <p className="font-bold text-primary leading-tight">Server Infrastructure Refactor</p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-xs text-on-surface-variant font-bold"><span className="material-symbols-outlined text-xs align-middle mr-1 text-slate-400">calendar_month</span>Oct 25</p>
                   <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefQ3gENP3Zro7D9PLtJ0x8ebiTrLnyDZKqfjaIRj4NFhEGRSlyRNK4faKSoQMfD0r10vHIk0LzdfOKNXHRtlfmyzkIgFOpyMlVgW65WUhK2ND-sGOPzDIKCotwrrHV3g1RHLz2jGi6UJayQQ5_q8-gGdu6SX85c1bmTxE5S0zjTdKiXW2g2RMXz1fb5-AK_b4-NIz2yQYeMgtj-slLGdwxWyOaqIVQXd-wrVBcgY0osNLgJrB93AZLwwHaRgM93ACBFqfaxNQ-DUl" alt="Assignee"/>
                </div>
             </div>

             <div className="task-card glass-card p-5 rounded-2xl border-white/20 hover:cursor-pointer flex flex-col justify-between h-40">
                <div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded text-[10px] font-bold uppercase tracking-wider">Design</span>
                     <span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
                   </div>
                   <p className="font-bold text-primary leading-tight">Update Crystalline UI Components</p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-xs text-on-surface-variant font-bold"><span className="material-symbols-outlined text-xs align-middle mr-1 text-slate-400">calendar_month</span>Oct 28</p>
                   <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefQ3gENP3Zro7D9PLtJ0x8ebiTrLnyDZKqfjaIRj4NFhEGRSlyRNK4faKSoQMfD0r10vHIk0LzdfOKNXHRtlfmyzkIgFOpyMlVgW65WUhK2ND-sGOPzDIKCotwrrHV3g1RHLz2jGi6UJayQQ5_q8-gGdu6SX85c1bmTxE5S0zjTdKiXW2g2RMXz1fb5-AK_b4-NIz2yQYeMgtj-slLGdwxWyOaqIVQXd-wrVBcgY0osNLgJrB93AZLwwHaRgM93ACBFqfaxNQ-DUl" alt="Assignee"/>
                </div>
             </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-sky-900 border-l-4 border-secondary pl-2">In Progress</h4>
                <span className="text-xs font-bold text-slate-400">1</span>
             </div>
             
             <div className="task-card glass-card p-5 rounded-2xl border-secondary/30 ring-2 ring-secondary/10 hover:cursor-pointer flex flex-col justify-between h-40">
                <div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] font-bold uppercase tracking-wider">Backend</span>
                     <span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
                   </div>
                   <p className="font-bold text-primary leading-tight">Refactor Authentication Hooks</p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-xs text-on-surface-variant font-bold"><span className="material-symbols-outlined text-xs align-middle mr-1 text-slate-400">calendar_month</span>Oct 24</p>
                   <img className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefQ3gENP3Zro7D9PLtJ0x8ebiTrLnyDZKqfjaIRj4NFhEGRSlyRNK4faKSoQMfD0r10vHIk0LzdfOKNXHRtlfmyzkIgFOpyMlVgW65WUhK2ND-sGOPzDIKCotwrrHV3g1RHLz2jGi6UJayQQ5_q8-gGdu6SX85c1bmTxE5S0zjTdKiXW2g2RMXz1fb5-AK_b4-NIz2yQYeMgtj-slLGdwxWyOaqIVQXd-wrVBcgY0osNLgJrB93AZLwwHaRgM93ACBFqfaxNQ-DUl" alt="Assignee"/>
                </div>
             </div>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-sky-900 border-l-4 border-primary pl-2">Review</h4>
                <span className="text-xs font-bold text-slate-400">1</span>
             </div>
             
             <div className="task-card glass-card p-5 rounded-2xl border-white/20 hover:cursor-pointer flex flex-col justify-between h-40 opacity-75 hover:opacity-100">
                <div>
                   <div className="flex justify-between items-start mb-2">
                     <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold uppercase tracking-wider">Marketing</span>
                     <span className="material-symbols-outlined text-outline text-sm">more_horiz</span>
                   </div>
                   <p className="font-bold text-primary leading-tight">Prepare Q4 Analytics Report</p>
                </div>
                <div className="flex justify-between items-end">
                   <p className="text-xs text-on-surface-variant font-bold"><span className="material-symbols-outlined text-xs align-middle mr-1 text-slate-400">calendar_month</span>Oct 20</p>
                   <div className="flex -space-x-2">
                      <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBefQ3gENP3Zro7D9PLtJ0x8ebiTrLnyDZKqfjaIRj4NFhEGRSlyRNK4faKSoQMfD0r10vHIk0LzdfOKNXHRtlfmyzkIgFOpyMlVgW65WUhK2ND-sGOPzDIKCotwrrHV3g1RHLz2jGi6UJayQQ5_q8-gGdu6SX85c1bmTxE5S0zjTdKiXW2g2RMXz1fb5-AK_b4-NIz2yQYeMgtj-slLGdwxWyOaqIVQXd-wrVBcgY0osNLgJrB93AZLwwHaRgM93ACBFqfaxNQ-DUl" alt="Assignee"/>
                      <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE4lEzz5xp_29ucpMmxORAzZyMqhu7lvpN3MzWHCHeZSiKi1RJloXqHanXF5jFMam7mrkHL459VxwIMyXrbTe8q6qXCiamzJ1drld0wr5wIIWh073GMumvlh3jkNhIS63G4Wzj7cwYRYL_nAv40bR8zw2PslbMh1hG6TfC5IPUa2bsX2kOpwyYl4kvwTYPAjZOS_TylS9g4g_bot8ftHV96jPHFldQddvQx8EtqYtvgFB53AGK2T-Effunh8YSVF3fm_NQn0gyE0o" alt="Assignee"/>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default EmployeeTasks;
