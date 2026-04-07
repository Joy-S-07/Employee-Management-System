import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import userData from '../../utils/userData.json';
const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [empEmail, setEmpEmail] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmployeeLogin = (e) => {
    e.preventDefault();
    setError('');
    const user = userData.employees.find(emp => emp.email === empEmail && emp.password === empPassword);
    if (user) {
      login({ ...user, role: 'employee' });
      navigate('/employee');
    } else {
      setError('Invalid employee credentials');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError('');
    const admin = userData.admin.find(adm => adm.id === adminId && adm.password === adminPassword);
    if (admin) {
      login({ ...admin, role: 'admin' });
      navigate('/admin');
    } else {
      setError('Invalid admin credentials');
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    
    if (isAdmin) {
      tl.to('.employee-form-elements', { 
        xPercent: -20, 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.inOut",
        onComplete: () => gsap.set('.employee-form-elements', { display: 'none' })
      })
      .fromTo('.admin-form-elements', 
        { xPercent: 20, opacity: 0, display: 'block' }, 
        { xPercent: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" }, 
        "<0.1"
      );
    } else {
      tl.to('.admin-form-elements', { 
        xPercent: 20, 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.inOut",
        onComplete: () => gsap.set('.admin-form-elements', { display: 'none' })
      })
      .fromTo('.employee-form-elements', 
        { xPercent: -20, opacity: 0, display: 'block' }, 
        { xPercent: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" }, 
        "<0.1"
      );
    }
  }, { dependencies: [isAdmin], scope: containerRef });

  return (
    <>
      {/* Background Image (Lifted outside motion.div so 'fixed/absolute inset' positioning remains relative to the viewport) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none w-full h-full"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
      </div>
      
      {/* Heavy background blur explicitly for the login page */}
      <div className="fixed inset-0 z-0 backdrop-blur-xl"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 font-sans relative selection:bg-indigo-500/30 overflow-hidden"
      >



      {/* Main Container */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden min-h-[750px] border border-white/20"
      >
        
        {/* LEFT SIDE: Vibrant Backdrop Filter Glass */}
        <div className="relative flex flex-col justify-between p-12 lg:p-16 text-white bg-indigo-900/40 backdrop-blur-[30px] border-b md:border-b-0 md:border-r border-white/20">
          
          {/* Top Logo Area */}
          <div className="relative z-10">
            <h1 className="text-3xl font-black tracking-tighter flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-white/90 text-indigo-800 flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </span>
              Employee Task Management 
            </h1>
          </div>

          <div className="relative z-10 mt-auto drop-shadow-lg">
            <h2 className="text-5xl font-black leading-[1.1] mb-6 tracking-tight">
              {isAdmin ? 'System Administration.' : 'Accelerate Your Work.'}
            </h2>
            <p className="text-white/90 text-lg font-medium max-w-md leading-relaxed">
              {isAdmin 
                ? 'Authorized access only. Log in to manage internal infrastructure, personnel systems, and enterprise controls.'
                : 'Welcome to your employee portal. Log in to track milestones, manage your schedule, and collaborate seamlessly.'}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: White Backdrop Filter Glass Form */}
        <div className="flex flex-col justify-center p-8 lg:p-20 relative bg-white/50 backdrop-blur-[40px]">
          
          <div className="mb-8 relative z-10 drop-shadow-sm">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Welcome Back</h2>
            <p className="text-slate-800 font-medium text-lg">Sign in to continue to your dashboard.</p>
            {error && (
              <div className="mt-4 p-3 bg-rose-100/80 border border-rose-300 text-rose-700 rounded-lg text-sm font-bold flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}
          </div>

          {/* Toggle Button */}
          <div className="flex p-1.5 bg-white/40 backdrop-blur-md rounded-2xl mb-12 shadow-inner border border-white/60 relative z-10">
            <button 
              onClick={() => setIsAdmin(false)}
              className={`flex-1 py-3.5 px-4 text-sm font-bold tracking-wide rounded-xl transition-all duration-300 ${
                !isAdmin 
                ? 'bg-white/90 text-indigo-700 shadow-md border border-white/60' 
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/30'
              }`}
            >
              Employee Access
            </button>
            <button 
              onClick={() => setIsAdmin(true)}
              className={`flex-1 py-3.5 px-4 text-sm font-bold tracking-wide rounded-xl transition-all duration-300 ${
                isAdmin 
                ? 'bg-white/90 text-rose-700 shadow-md border border-white/60' 
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/30'
              }`}
            >
              Manager Console
            </button>
          </div>

          <div className="relative flex-1 z-10">
            
            {/* Employee Login Container */}
            <div className="employee-form-elements absolute inset-0 w-full">
              <form className="flex flex-col gap-6" onSubmit={handleEmployeeLogin}>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Work Email</label>
                  <input 
                    type="email" 
                    value={empEmail}
                    onChange={(e) => setEmpEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-white/70 backdrop-blur-md text-slate-900 rounded-xl border border-white/60 focus:border-indigo-500 focus:bg-white/90 focus:ring-4 focus:ring-indigo-500/20 transition-all font-semibold placeholder:text-slate-500 outline-none shadow-sm"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Password</label>
                  <input 
                    type="password" 
                    value={empPassword}
                    onChange={(e) => setEmpPassword(e.target.value)}
                    className="w-full px-5 py-4 bg-white/70 backdrop-blur-md text-slate-900 rounded-xl border border-white/60 focus:border-indigo-500 focus:bg-white/90 focus:ring-4 focus:ring-indigo-500/20 transition-all font-semibold placeholder:text-slate-500 outline-none shadow-sm"
                    placeholder="••••••••"
                  />
                  <div className="flex justify-end mt-3">
                    <a href="#" className="flex items-center text-sm font-bold text-indigo-700 hover:text-indigo-900 transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                
                <button type="submit" className="w-full mt-2 py-4 bg-indigo-600/90 hover:bg-indigo-700 backdrop-blur-md active:scale-[0.98] rounded-xl text-white font-bold text-lg transition-all shadow-[0_8px_20px_rgba(79,70,229,0.3)] border border-indigo-500/50">
                  Sign In to Pulse
                </button>
                <button 
                  type="button"
                  onClick={() => navigate('/')} 
                  className="w-full mt-1 py-3 bg-transparent hover:bg-indigo-50/50 text-slate-600 hover:text-indigo-800 border border-transparent hover:border-indigo-200 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Return to Portal
                </button>
              </form>
            </div>

            {/* Admin Login Container */}
            <div className="admin-form-elements absolute inset-0 w-full opacity-0 hidden">
              <form className="flex flex-col gap-6" onSubmit={handleAdminLogin}>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Admin Identifier</label>
                  <input 
                    type="text" 
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="w-full px-5 py-4 bg-white/70 backdrop-blur-md text-slate-900 rounded-xl border border-white/60 focus:border-rose-500 focus:bg-white/90 focus:ring-4 focus:ring-rose-500/20 transition-all font-mono font-semibold placeholder:text-slate-500 outline-none shadow-sm"
                    placeholder="ADM-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Security Passcode</label>
                  <input 
                    type="password" 
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full px-5 py-4 bg-white/70 backdrop-blur-md text-slate-900 rounded-xl border border-white/60 focus:border-rose-500 focus:bg-white/90 focus:ring-4 focus:ring-rose-500/20 transition-all font-semibold placeholder:text-slate-500 outline-none shadow-sm tracking-[0.2em]"
                    placeholder="••••••••"
                  />
                </div>
                
                <button type="submit" className="w-full mt-2 py-4 bg-rose-600/90 hover:bg-rose-700 backdrop-blur-md active:scale-[0.98] rounded-xl text-white font-bold text-lg transition-all shadow-[0_8px_20px_rgba(225,29,72,0.3)] border border-rose-500/50">
                  Authorize & Access
                </button>
                <button 
                  type="button"
                  onClick={() => navigate('/')} 
                  className="w-full mt-1 py-3 bg-transparent hover:bg-rose-50/50 text-slate-600 hover:text-rose-800 border border-transparent hover:border-rose-200 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Return to Portal
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Login;
