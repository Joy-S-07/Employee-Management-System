import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Admin = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none w-full h-full"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="min-h-screen w-full relative z-10 font-sans selection:bg-rose-500/30 overflow-x-hidden p-4 sm:p-8 lg:p-12"
      >
        <div className="max-w-7xl mx-auto pb-24 flex flex-col gap-12 pt-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-white drop-shadow-xl max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter leading-tight text-transparent bg-clip-text bg-linear-to-r from-rose-200 to-rose-100/70">
                System Administration.
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
                Welcome back, Administrator. <br className="hidden md:block"/> Oversee operations, manage personnel, and monitor enterprise activity.
              </p>
            </div>
            
            <button 
              onClick={logout}
              className="shrink-0 px-8 py-4 bg-rose-600/20 hover:bg-rose-600/40 backdrop-blur-md transition-all text-rose-100 text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(225,29,72,0.2)] border border-rose-500/40 flex items-center gap-3 active:scale-95"
            >
              Secure Logout
              <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-900 flex items-center justify-center shadow-inner">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
            </button>
          </div>

          {/* Admin Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-rose-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black text-white/80 uppercase tracking-wide">Total Employees</h3>
                  </div>
                  <p className="text-6xl font-black text-rose-100 tracking-tighter drop-shadow-sm mb-2">1,204</p>
                  <p className="text-sm text-rose-200/80 font-bold">+12 this month</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-black text-white/80 uppercase tracking-wide">System Load</h3>
                  </div>
                  <p className="text-6xl font-black text-emerald-300 tracking-tighter drop-shadow-sm mb-2">24%</p>
                  <p className="text-sm text-emerald-200/80 font-bold">Optimal performance</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group hover:-translate-y-2 transition-all duration-300 md:col-span-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-black text-white/80 uppercase tracking-wide mb-2">Security Events</h3>
                    <p className="text-4xl font-black text-white tracking-tighter drop-shadow-sm mb-2">0</p>
                    <p className="text-sm text-white/60 font-bold">No breaches detected.</p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                     <svg className="w-8 h-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
              </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col h-full">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Employee Directory
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 px-6 text-white/60 font-bold uppercase text-xs tracking-wider">Employee ID</th>
                    <th className="py-4 px-6 text-white/60 font-bold uppercase text-xs tracking-wider">Name</th>
                    <th className="py-4 px-6 text-white/60 font-bold uppercase text-xs tracking-wider">Role</th>
                    <th className="py-4 px-6 text-white/60 font-bold uppercase text-xs tracking-wider">Status</th>
                    <th className="py-4 px-6 text-white/60 font-bold uppercase text-xs tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-sm text-rose-300">EMP-001</td>
                    <td className="py-4 px-6 font-bold">Sarah Jenkins</td>
                    <td className="py-4 px-6 text-sm text-white/70">Senior Developer</td>
                    <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active</span></td>
                    <td className="py-4 px-6 text-right cursor-pointer text-indigo-300 hover:text-indigo-100 font-semibold text-sm">Manage</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-sm text-rose-300">EMP-002</td>
                    <td className="py-4 px-6 font-bold">Marcus Webb</td>
                    <td className="py-4 px-6 text-sm text-white/70">Product Manager</td>
                    <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Active</span></td>
                    <td className="py-4 px-6 text-right cursor-pointer text-indigo-300 hover:text-indigo-100 font-semibold text-sm">Manage</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-sm text-rose-300">EMP-003</td>
                    <td className="py-4 px-6 font-bold">Alex Chen</td>
                    <td className="py-4 px-6 text-sm text-white/70">UX Designer</td>
                    <td className="py-4 px-6"><span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">Suspended</span></td>
                    <td className="py-4 px-6 text-right cursor-pointer text-indigo-300 hover:text-indigo-100 font-semibold text-sm">Manage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Admin;
