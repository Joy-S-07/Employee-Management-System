import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const TaskManagement = () => {
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
      .fromTo('.header', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .fromTo('.bento-item', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.3")
      .fromTo('.task-list-item', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2")
      .fromTo('.side-panel', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-surface-container-low min-h-screen font-body text-on-surface relative overflow-hidden">
      {/* SideNavBar Component */}
      <aside className="sidebar h-screen w-64 fixed left-0 top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl flex flex-col py-8 px-4 border-r border-transparent shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] z-50">
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 uppercase">Ethereal Workplace</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Crystalline Executive</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a onClick={() => navigate('/admin')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">dashboard</span>
            <span className="font-label text-sm tracking-wider">Dashboard</span>
          </a>
          <a onClick={() => navigate('/admin/tasks')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full bg-sky-100/50 dark:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">assignment</span>
            <span className="font-label text-sm tracking-wider">Tasks</span>
          </a>
          <a onClick={() => navigate('/admin/profile')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">person</span>
            <span className="font-label text-sm tracking-wider">Profile</span>
          </a>
          <a onClick={() => navigate('/admin/employees')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">groups</span>
            <span className="font-label text-sm tracking-wider">Personnel</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 space-y-2 border-t border-slate-200/20">
          <button className="w-full bg-primary-container text-white py-4 rounded-xl font-bold tracking-wide mb-6 hover:brightness-110 transition-all shadow-lg shadow-primary/10">
            <span className="material-symbols-outlined text-sm align-middle mr-2">add</span>
            New Entry
          </button>
          
          <button onClick={handleLogout} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-error font-medium hover:bg-error-container/50">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label text-sm tracking-wider uppercase">Sign Out</span>
          </button>

          <div className="flex items-center space-x-3 px-2 mt-2 pt-6 border-t border-slate-200/20">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center overflow-hidden">
              <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjIBS8Q9gBRQVjlciX3w5GNF1HYQkPUKFH8593_--r0KDVq2PAMJGcBYUTnWww3AFQOQGIynl5WPAQhvIbJLCD-yG2Y2KnpY-84TWn8ya_lBfKWgKafikde3aAwTSd5mdpQXFajvmGq5Do8C0PWiFN2E5v6r5zpZdVoo7slwRi49EwgnbT8LwskUP91rrkzj8OJzV56cHkp_TPaDw-1zGdQqExRHaPkEgbZGK2QyNh0Gxes_IJ21g78VauTBmOfwRepnvukULfaH9I" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate text-sky-900">{user?.name || 'Executive Profile'}</p>
              <p className="text-[10px] truncate text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Component */}
      <header className="topbar fixed top-0 right-0 left-64 h-16 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">Task Management</h2>
          <span className="h-6 w-[1px] bg-slate-200"></span>
          <nav className="flex space-x-6">
            <a className="text-sky-900 border-b-2 border-sky-900 font-label text-sm font-bold pb-1 tracking-wide" href="#">Tasks</a>
            <a className="text-slate-500 hover:text-sky-700 transition-colors font-label text-sm font-medium pb-1 tracking-wide" href="#">Overview</a>
            <a className="text-slate-500 hover:text-sky-700 transition-colors font-label text-sm font-medium pb-1 tracking-wide" href="#">Reporting</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative hidden lg:block group">
            <input className="bg-surface-container border-none rounded-full px-5 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search tasks or people..." type="text"/>
            <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400">search</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-500 hover:text-sky-700 transition-colors relative">
              <span className="material-symbols-outlined pt-1">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 bg-secondary-container">
              <img className="w-full h-full object-cover" alt="User Top Bar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsMU2cuoakcVFluJkap0k5UMA2r16dkAumb6XbXzmVdP7QjmxPc3jrQ_05mX5IICgwymAvNzXihus7pvSBK01K6YoNpi_SaNyFdVh_vyYNZvkT3i1Exoas6-BxV-Lv9XQ0RRwdyFc-WuoU5rJoYVBWye_FW6kMbnH7MFDD74iA_L6T-bfzqXa2Otkwne7ZKxebEUX5PyJilzAVSDbziXk_rDaDC_AlnbUzNiXeD5RlzZxHPgZ9Zcb8zIIANp8G9-5zi3WP_rRTK_F4"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen space-y-8">
        
        {/* Header & FAB */}
        <div className="flex justify-between items-end mb-4 header">
          <div>
            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">Workforce Objectives</h2>
            <p className="font-body text-on-surface-variant text-sm mt-1">Manage and delegate crystalline tasks across the executive chain.</p>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 shadow-[0_12px_24px_-8px_rgba(0,67,112,0.4)] hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-sm align-middle">add</span>
            <span className="font-label uppercase tracking-widest text-xs">New Entry</span>
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Task Grid / List */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            
            <div className="glass-card p-4 rounded-2xl flex items-center justify-between space-x-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
              <div className="flex space-x-2 drop-shadow-sm">
                <button className="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed-variant rounded-lg text-xs font-bold tracking-wide">All Tasks</button>
                <button className="px-4 py-2 hover:bg-surface-container-high rounded-lg text-xs font-medium text-slate-500 transition-all">In Progress</button>
                <button className="px-4 py-2 hover:bg-surface-container-high rounded-lg text-xs font-medium text-slate-500 transition-all">Completed</button>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs font-label uppercase tracking-widest text-slate-400">Sort by:</span>
                <select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0 outline-none">
                  <option>Recent First</option>
                  <option>Deadline</option>
                  <option>Priority</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-12 px-6 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/60">
              <div className="col-span-5">Employee & Task Name</div>
              <div className="col-span-2">Deadline</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Q4 Strategic Refraction', by: 'Aria Montgomery • Marketing', date: 'Oct 24, 2024', timeLeft: '2 days left', status: 'In Progress', statusColor: 'bg-secondary-container text-on-secondary-container', dotColor: 'bg-green-500', timeColor: 'text-error', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsfroVKweJWBHM46OzvHvJqX9UMF3oeucWYlB8X-N8maqxZSR8E_QQKZpuv7eIZJJPm3rYOe-qMWSxAYi2Rz9QuBTXpnclBS2yMJRbRpExxm8vy--dMGsp9NzEsS9ApsRNSiRFnn4SHc9S95QK-9iAatAEutoSy6vulAoga7AR0h3y0JwFSRdio5ZM9XINsVHGc61J0p6d632VZE64xTDzTtw8apInpk7oTPWeM2lwasHASesLZks00QTwvYbTB4yRLTT91QzA5m3z' },
                { name: 'Infrastructure Crystallization', by: 'Julian Drake • DevOps', date: 'Nov 02, 2024', timeLeft: '9 days left', status: 'Draft', statusColor: 'bg-surface-variant text-on-surface-variant', dotColor: 'bg-slate-300', timeColor: 'text-on-surface-variant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFDbl6LryiADgeCkqfzsftUyMDfs2cVb6WOR6QTBZ3BbS4BnqtAAUnCRUAmPelZVdHDEUFQ-JqTkliOIN9g1t8Ofu3fdGAY8t4cj3mlwWCRfvk9AyVBsKSbHM94idsS0k4rPtLULhwTTxSaJQ3otJsdDFQd6Q9CbbjWiJdnBfsJZjnkrj0yqVqdwYy4J9Wx92wJYcJblvG5DBFv7SnQq_mxU3SlEVK4yRy6dOVG-ckbsjOOmRnt-O8UThYIlzbuLeMlQZ5HyQWLdLz' },
                { name: 'Policy Transparency Audit', by: 'Sarah Chen • Compliance', date: 'Oct 21, 2024', timeLeft: 'Completed', status: 'Verified', statusColor: 'bg-tertiary-fixed text-tertiary-fixed-dim border-2 border-white', dotColor: 'bg-green-500', timeColor: 'text-green-600', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzXXdVvIuW5EpWyMKUpRhAVrDvGMLJbFJLDW9Yu76K-qPSw3KLMb2Q9ZLlcQ_qI3E-RglXEIBSjWb8fTp5Jq5CtZFbbbbtoU8TXWQoljdxg40r5JE0TRl8vaueTxoUpywQFrJnzjL3qGbQ3VskRjv3AWON-mrtmdjGya0I7vEiCVOH4jNjCXMmdKJfSctKNGAChBJWc3-owgij_Tizc5UXtxcgLb6FSzPPfCUIekMn99ryWS4UkWGUe00Ct7uytm-VMiopXbNW07-R' }
              ].map((task, idx) => (
                <div key={idx} className="task-list-item glass-card p-6 rounded-2xl grid grid-cols-12 items-center hover:bg-surface-bright transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20">
                  <div className="col-span-5 flex items-center space-x-4">
                    <div className="relative">
                      <img className="w-10 h-10 rounded-xl object-cover" alt="Avatar" src={task.img} />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${task.dotColor}`}></div>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-primary text-sm tracking-tight">{task.name}</h4>
                      <p className="text-xs text-on-surface-variant">{task.by}</p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs font-bold font-label text-on-surface">{task.date}</p>
                    <p className={`text-[10px] font-medium ${task.timeColor}`}>{task.timeLeft}</p>
                  </div>
                  <div className="col-span-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${task.statusColor}`}>{task.status}</span>
                  </div>
                  <div className="col-span-2 flex justify-end space-x-2">
                    <button className="p-2 hover:bg-primary-fixed/20 rounded-lg text-primary transition-colors">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                    <button className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors">
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Task Side Panel */}
          <div className="col-span-12 lg:col-span-4 side-panel">
            <div className="glass-card sticky top-24 p-8 xl:p-10 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,67,112,0.1)] overflow-hidden border border-white/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 blur-3xl -z-10"></div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-headline text-xl font-extrabold text-primary tracking-tight">Assign Objective</h3>
                <span className="material-symbols-outlined text-primary/40">auto_awesome</span>
              </div>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Primary Assignee</label>
                  <div className="relative">
                    <select className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 appearance-none outline-none cursor-pointer text-sky-900 font-medium">
                      <option>Select an employee</option>
                      <option>Aria Montgomery</option>
                      <option>Julian Drake</option>
                      <option>Sarah Chen</option>
                      <option>Marcus Aurelius</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none text-sm">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Objective Title</label>
                  <input className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium placeholder:font-normal" placeholder="e.g. Q4 Refraction Audit" type="text"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Deadline</label>
                    <input className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all outline-none font-medium cursor-pointer" type="date"/>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Priority</label>
                    <div className="relative">
                      <select className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 appearance-none outline-none cursor-pointer font-medium">
                        <option>Medium</option>
                        <option>High</option>
                        <option>Critical</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-3 text-slate-400 pointer-events-none text-sm">priority_high</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Description & Constraints</label>
                  <textarea className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all resize-none outline-none font-medium" placeholder="Detail the expected crystalline outcome..." rows="4"></textarea>
                </div>
                <div className="pt-4 flex flex-col space-y-4">
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold font-label uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform" type="submit">
                    Deploy Objective
                  </button>
                  <button className="w-full py-2 text-slate-400 hover:text-slate-600 font-medium text-xs transition-all tracking-wider uppercase" type="reset">
                    Clear Draft
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Metrics Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
          <div className="bento-item glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/40 group hover:bg-white/90 transition-all">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Total Managed</p>
            <div className="flex items-end justify-between">
              <span className="font-headline text-4xl font-extrabold text-primary">124</span>
              <span className="text-xs font-bold text-green-600 mb-1">+12%</span>
            </div>
          </div>
          <div className="bento-item glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/40 group hover:bg-white/90 transition-all">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Completion Rate</p>
            <div className="flex items-end justify-between">
              <span className="font-headline text-4xl font-extrabold text-primary">94.2%</span>
              <div className="w-12 h-1 bg-surface-variant rounded-full overflow-hidden mb-2">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>
          </div>
          <div className="bento-item glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/40 group hover:bg-white/90 transition-all">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Active Refractions</p>
            <div className="flex items-end justify-between">
              <span className="font-headline text-4xl font-extrabold text-primary">18</span>
              <span className="material-symbols-outlined text-primary/20">lens_blur</span>
            </div>
          </div>
          <div className="bento-item glass-card p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-white/40 group hover:bg-white/90 transition-all">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Critical Bottlenecks</p>
            <div className="flex items-end justify-between">
              <span className="font-headline text-4xl font-extrabold text-error">03</span>
              <span className="material-symbols-outlined text-error/20">warning</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default TaskManagement;
