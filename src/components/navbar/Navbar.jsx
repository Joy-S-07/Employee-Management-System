import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [hoveredTab, setHoveredTab] = useState(null);
  const tabs = ['Overview', 'Active Tasks', 'Directory', 'Settings'];
  const { user } = useAuth();

  const currentPill = hoveredTab || activeTab;

  const initials = user ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'JS';


  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/40 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/50 rounded-[2rem] px-6 py-3">
        
        {/* Left: EMS Logo */}
        <div className="flex items-center shrink-0 cursor-pointer drop-shadow-sm">
          <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            EMS.
          </span>
        </div>

        {/* Center: Task Dashboard Navigation */}
        <div 
          className="hidden md:flex items-center justify-center gap-2 mx-8 relative"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              onMouseEnter={() => setHoveredTab(tab)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 ${
                activeTab === tab || hoveredTab === tab
                  ? "text-indigo-900" 
                  : "text-slate-800"
              }`}
            >
              {currentPill === tab && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-[3px] bg-indigo-800 rounded-t-md z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Right: Profile Section */}
        <div className="flex items-center gap-3 shrink-0 cursor-pointer hover:bg-white/60 transition-all py-1.5 pl-1.5 pr-4 rounded-full border border-white/40 shadow-sm hover:border-white/80">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-inner">
            {initials}
          </div>
          <div className="hidden sm:block text-left relative z-10 drop-shadow-sm">
            <p className="text-sm font-bold text-slate-900 leading-none">{user ? user.name : 'Guest'}</p>
            <p className="text-xs font-semibold text-slate-600 mt-1 capitalize">{user ? user.role : 'Visitor'}</p>
          </div>
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>

        {/* Mobile Menu Button  */}
        <div className="md:hidden flex items-center ml-4">
          <button className="text-slate-800 hover:text-indigo-900 focus:outline-none bg-white/50 p-2 rounded-lg border border-white/40">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
