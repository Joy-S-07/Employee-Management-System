import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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
      .fromTo('.profile-header', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .fromTo('.profile-card', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.3")
      .fromTo('.profile-field', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  const getDashboardRoute = () => user?.role === 'admin' ? '/admin' : '/employee';
  const getTasksRoute = () => user?.role === 'admin' ? '/admin/tasks' : '/employee/tasks';
  const getProfileRoute = () => user?.role === 'admin' ? '/admin/profile' : '/employee/profile';

  return (
    <div ref={containerRef} className="bg-surface font-body text-on-surface antialiased min-h-screen relative overflow-hidden">
      {/* SideNavBar Component */}
      <aside className="sidebar h-screen w-64 fixed left-0 top-0 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-xl flex flex-col py-8 px-4 border-r border-transparent shadow-[32px_0_32px_-10px_rgba(0,67,112,0.04)] z-50">
        <div className="mb-10 px-2">
          <h1 className="text-xl font-bold tracking-tight text-sky-900 dark:text-sky-100 uppercase">Ethereal Workplace</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">Crystalline Executive</p>
        </div>
        <nav className="flex-1 space-y-2">
          <a onClick={() => navigate(getDashboardRoute())} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">dashboard</span>
            <span className="font-label text-sm tracking-wider">Dashboard</span>
          </a>
          <a onClick={() => navigate(getTasksRoute())} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">assignment</span>
            <span className="font-label text-sm tracking-wider">Tasks</span>
          </a>
          <a onClick={() => navigate(getProfileRoute())} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full bg-sky-100/50 dark:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">person</span>
            <span className="font-label text-sm tracking-wider">Profile</span>
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
              <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE4lEzz5xp_29ucpMmxORAzZyMqhu7lvpN3MzWHCHeZSiKi1RJloXqHanXF5jFMam7mrkHL459VxwIMyXrbTe8q6qXCiamzJ1drld0wr5wIIWh073GMumvlh3jkNhIS63G4Wzj7cwYRYL_nAv40bR8zw2PslbMh1hG6TfC5IPUa2bsX2kOpwyYl4kvwTYPAjZOS_TylS9g4g_bot8ftHV96jPHFldQddvQx8EtqYtvgFB53AGK2T-Effunh8YSVF3fm_NQn0gyE0o" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate text-sky-900">{user?.name || 'Executive Profile'}</p>
              <p className="text-[10px] truncate text-slate-400 capitalize">{user?.role || 'Administrator'}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopNavBar Component */}
      <header className="topbar fixed top-0 right-0 left-64 h-16 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">Crystalline Profile</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative hidden lg:block group">
            <input className="bg-surface-container border-none rounded-full px-5 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Search..." type="text"/>
            <span className="material-symbols-outlined absolute right-3 top-2 text-slate-400">search</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-slate-500 hover:text-sky-700 transition-colors relative">
              <span className="material-symbols-outlined pt-1">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 bg-secondary-container">
              <img className="w-full h-full object-cover" alt="User Top Bar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE4lEzz5xp_29ucpMmxORAzZyMqhu7lvpN3MzWHCHeZSiKi1RJloXqHanXF5jFMam7mrkHL459VxwIMyXrbTe8q6qXCiamzJ1drld0wr5wIIWh073GMumvlh3jkNhIS63G4Wzj7cwYRYL_nAv40bR8zw2PslbMh1hG6TfC5IPUa2bsX2kOpwyYl4kvwTYPAjZOS_TylS9g4g_bot8ftHV96jPHFldQddvQx8EtqYtvgFB53AGK2T-Effunh8YSVF3fm_NQn0gyE0o"/>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen bg-surface-container-low">
        
        {/* Header */}
        <section className="mb-10 profile-header">
          <h3 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Executive Profile</h3>
          <p className="text-on-surface-variant font-medium text-sm mt-1">Manage your identity and authentication preferences.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Identity Card */}
          <div className="profile-card col-span-12 md:col-span-4 glass-card p-10 rounded-3xl text-center border-white/20">
             <div className="relative w-32 h-32 mx-auto mb-6">
                <img className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE4lEzz5xp_29ucpMmxORAzZyMqhu7lvpN3MzWHCHeZSiKi1RJloXqHanXF5jFMam7mrkHL459VxwIMyXrbTe8q6qXCiamzJ1drld0wr5wIIWh073GMumvlh3jkNhIS63G4Wzj7cwYRYL_nAv40bR8zw2PslbMh1hG6TfC5IPUa2bsX2kOpwyYl4kvwTYPAjZOS_TylS9g4g_bot8ftHV96jPHFldQddvQx8EtqYtvgFB53AGK2T-Effunh8YSVF3fm_NQn0gyE0o" />
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-sky-700 transition">
                   <span className="material-symbols-outlined text-sm">edit</span>
                </button>
             </div>
             <h4 className="font-headline font-black text-2xl text-primary">{user?.name || 'Administrator'}</h4>
             <p className="text-on-surface-variant uppercase tracking-widest text-[10px] font-bold mt-2">{user?.title || 'Executive Level'}</p>
             <div className="mt-8 pt-8 border-t border-slate-200/50 flex justify-around">
                <div className="text-center">
                   <p className="text-3xl font-black text-primary">12</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active Tasks</p>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div className="text-center">
                   <p className="text-3xl font-black text-primary">A+</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Performance</p>
                </div>
             </div>
          </div>

          {/* Details Card */}
          <div className="profile-card col-span-12 md:col-span-8 glass-card p-10 rounded-3xl border-white/20">
             <h4 className="font-headline text-xl font-bold text-sky-900 mb-8 border-b border-surface-container pb-4">Personal Details</h4>
             
             <form className="space-y-6 max-w-2xl">
                <div className="profile-field grid grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Full Name</label>
                     <input type="text" className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" defaultValue={user?.name || ''} />
                   </div>
                   <div>
                     <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Role</label>
                     <input type="text" className="w-full bg-white/30 border-none rounded-xl px-4 py-3 text-sm transition-all font-medium text-slate-500 capitalize outline-none" disabled defaultValue={user?.role || ''} />
                   </div>
                </div>
                
                <div className="profile-field space-y-2">
                   <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Email Address</label>
                   <input type="email" className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" defaultValue={user?.email || 'admin@ethereal.work'} />
                </div>

                <div className="profile-field space-y-2">
                   <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Authentication Password</label>
                   <div className="relative group">
                     <input type="password" placeholder="•••••••••" className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" />
                     <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary font-bold text-xs uppercase tracking-widest hover:underline">Reset</button>
                   </div>
                </div>

                <div className="profile-field pt-6">
                   <button type="submit" className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                      Update Profile
                   </button>
                </div>
             </form>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Profile;
