import React from 'react';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const WebDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <>
      {/* Fixed Background Image that won't scroll 
          (Must be outside motion.div so CSS transform doesn't break 'fixed' positioning) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none w-full h-full"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="min-h-screen w-full relative z-10 font-sans selection:bg-indigo-500/30 overflow-x-hidden"
      >

      {/* Floating Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Scrollable Main Content Area */}
      <div className="relative z-10 pt-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto pb-24 flex flex-col gap-12">
        
        {/* Freestanding Floating Header over Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-white drop-shadow-xl max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter leading-tight text-transparent bg-clip-text bg-linear-to-r from-white to-white/70">
              {user ? `Welcome back, ${user.name.split(' ')[0]}.` : 'Accelerate Your Workflow.'}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md">
              {user ? `Your role as ${user.role} is vital. Track milestones, manage your schedule, and collaborate seamlessly.` : 'Your central hub for tracking corporate milestones, managing pending reviews, and engaging with new priority tasks effortlessly.'}
            </p>
          </div>
          
          <button 
            onClick={() => user ? navigate(`/${user.role}`) : navigate('/login')}
            className="shrink-0 px-8 py-4 bg-rose-500/80 hover:bg-rose-600 backdrop-blur-md transition-all text-white text-lg font-bold rounded-2xl shadow-[0_8px_30px_rgba(225,29,72,0.3)] border border-rose-400/50 flex items-center gap-3 active:scale-95"
          >
            {user ? 'Go to Dashboard' : 'Sign In / Manage'}
            <span className="w-8 h-8 rounded-full bg-white text-rose-900 flex items-center justify-center shadow-inner">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                {user ? (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                 ) : (
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 )}
              </svg>
            </span>
          </button>
        </div>

        {/* Heavy Glassmorphism Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-wide">Completed</h3>
                  <span className="w-12 h-12 flex flex-col items-center justify-center bg-white/70 backdrop-blur-md rounded-xl shadow-sm text-emerald-600 border border-white/60">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                </div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter drop-shadow-sm mb-2">124</p>
                <p className="text-base text-slate-800 font-bold">Tasks resolved successfully</p>
            </div>
            
            <div className="bg-indigo-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-white uppercase tracking-wide drop-shadow-md">Pending</h3>
                  <span className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl shadow-inner text-amber-300 border border-white/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </span>
                </div>
                <p className="text-5xl font-black text-white tracking-tighter drop-shadow-lg mb-2">8</p>
                <p className="text-base text-white/90 font-bold drop-shadow-md">Awaiting final review</p>
            </div>

            <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-wide">New Items</h3>
                  <span className="w-12 h-12 flex items-center justify-center bg-white/70 backdrop-blur-md rounded-xl shadow-sm text-blue-600 border border-white/60">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  </span>
                </div>
                <p className="text-5xl font-black text-slate-900 tracking-tighter drop-shadow-sm mb-2">14</p>
                <p className="text-base text-slate-800 font-bold">Action required today</p>
            </div>
        </div>

        {/* Extended Content: Recent Activity Feed & Team Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
          {/* Recent Activity Log - Takes up 2 columns out of 3 */}
          <div className="lg:col-span-2 bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col h-full">
            <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Recent Platform Activity
            </h2>
            
            <div className="flex-1 space-y-6">
              {[
                { name: "Sarah Jenkins", action: "approved project proposal", time: "2 hours ago", color: "bg-emerald-500" },
                { name: "Marcus Webb", action: "uploaded Q3 financial reports", time: "4 hours ago", color: "bg-blue-500" },
                { name: "Alex Chen", action: "requested time off", time: "5 hours ago", color: "bg-amber-500" },
                { name: "System Automator", action: "archived stale tasks and ran cleanup", time: "1 day ago", color: "bg-purple-500" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/40 hover:bg-white/60 transition-colors border border-white/30 shadow-sm">
                  <div className={`w-3 h-3 mt-1.5 rounded-full ${activity.color} shadow-sm`}></div>
                  <div className="flex-1">
                    <p className="text-slate-800 font-bold text-base leading-tight">
                      {activity.name} <span className="font-semibold text-slate-700">{activity.action}</span>
                    </p>
                    <p className="text-sm font-bold text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 font-bold text-indigo-800 hover:bg-white/40 border border-white/40 rounded-xl transition-colors">
              View All Logs
            </button>
          </div>

          {/* Quick Actions & Status */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-indigo-900/40 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <h2 className="text-xl font-black text-white mb-6 drop-shadow-md">Department Load</h2>
              <div className="space-y-5">
                {[
                  { dept: "Engineering", load: "85%", color: "bg-rose-400" },
                  { dept: "Marketing", load: "45%", color: "bg-blue-400" },
                  { dept: "Operations", load: "60%", color: "bg-emerald-400" }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-white text-sm font-bold mb-2">
                      <span>{stat.dept}</span>
                      <span>{stat.load}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className={`${stat.color} h-2 rounded-full shadow-[0_0_10px_currentColor]`} style={{ width: stat.load }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center text-center cursor-pointer hover:bg-white/50 transition-colors group">
               <div>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600/90 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform shadow-[0_8px_20px_rgba(79,70,229,0.3)]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-800">Assign New Task</h3>
                  <p className="text-slate-700 font-medium text-sm mt-1">Open assignment modal</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
    </>
  );
};

export default WebDashboard;
