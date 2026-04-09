import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import userData from '../utils/userData.json';

const Login = () => {
  const [role, setRole] = useState('admin');
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (role === 'admin') {
      const admin = userData.admin.find(adm => adm.id === emailOrId && adm.password === password);
      if (admin) {
        login({ ...admin, role: 'admin' });
        navigate('/admin');
      } else {
        setError('Invalid admin credentials');
      }
    } else {
      const user = userData.employees.find(emp => emp.email === emailOrId && emp.password === password);
      if (user) {
        login({ ...user, role: 'employee' });
        navigate('/employee');
      } else {
        setError('Invalid employee credentials');
      }
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.abstract-blobs', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );
    tl.fromTo('.login-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" },
      "-=1.5"
    );
    tl.fromTo('.form-element',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="font-body bg-background text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 abstract-blobs">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-tertiary/5 rounded-full blur-[100px]"></div>
        <img 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay" 
          alt="Modern high-end office interior" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVAf68cAd7ReDKRanaJE_MljpX69Ob3C_JLl-D-_jF4jQhxLjFWzEBmigQQQmsptm-pM_UC7nrWAQ42KWx592ihvBM9gp32u6Y65-1opHr3gPN7t221R7gkUsx6uVToP1_JILR1gFQOomLufzAqDeiQuNV0tNyF5i2kPsuPajeHEH0Sr3026EMzsIoqX9HV0qrRWhZSpmGAwhxjdeECmx3o8ptU7kxGm9HgCYYdw6frhP7X2oUcXtSIcPju3QGWRM4euYbv29xLpn" 
        />
      </div>

      {/* Login Container */}
      <main className="relative z-10 w-full max-w-lg px-6">
        {/* Brand Header */}
        <div className="text-center mb-12 form-element">
          <h1 className="font-headline font-extrabold text-4xl tracking-tighter text-primary mb-2 text-glow">
            Ethereal Workplace
          </h1>
          <p className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-medium">
            Crystalline Executive Portal
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="login-card glass-card rounded-[2rem] p-10 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,67,112,0.15)] relative z-20">
          <div className="mb-10 text-center form-element">
            <h2 className="font-headline font-bold text-2xl text-on-surface">Welcome Back</h2>
            <p className="text-on-surface-variant text-sm mt-1">Please enter your executive credentials</p>
            {error && <p className="text-error text-sm font-bold mt-2">{error}</p>}
          </div>
          
          <form onSubmit={handleLogin} className="space-y-8">
            {/* Role Selector (Bento Style Chips) */}
            <div className="form-element">
              <label className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-4 ml-1">
                Select Identity Role
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="role" 
                    value="admin" 
                    checked={role === 'admin'} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="peer sr-only" 
                  />
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low transition-all duration-300 peer-checked:bg-primary peer-checked:text-white border border-transparent peer-checked:shadow-lg hover:bg-surface-container">
                    <span className="material-symbols-outlined mb-2 text-2xl">admin_panel_settings</span>
                    <span className="font-label text-xs font-semibold tracking-wide">Admin</span>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input 
                    type="radio" 
                    name="role" 
                    value="employee" 
                    checked={role === 'employee'} 
                    onChange={(e) => setRole(e.target.value)} 
                    className="peer sr-only" 
                  />
                  <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low transition-all duration-300 peer-checked:bg-primary peer-checked:text-white border border-transparent peer-checked:shadow-lg hover:bg-surface-container">
                    <span className="material-symbols-outlined mb-2 text-2xl">badge</span>
                    <span className="font-label text-xs font-semibold tracking-wide">Employee</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-6">
              <div className="relative group form-element">
                <label htmlFor="emailOrId" className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-2 ml-1">
                  {role === 'admin' ? 'Admin ID' : 'Professional Email'}
                </label>
                <div className="relative">
                  <input 
                    type={role === 'admin' ? 'text' : 'email'} 
                    id="emailOrId" 
                    value={emailOrId}
                    onChange={(e) => setEmailOrId(e.target.value)}
                    placeholder={role === 'admin' ? 'ADM-XXXX' : 'executive@ethereal.com'} 
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary px-1 py-3 transition-all duration-300 outline-none text-on-surface font-medium placeholder:text-outline-variant placeholder:font-normal focus:bg-primary-fixed/5" 
                    required 
                  />
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline text-lg">
                    {role === 'admin' ? 'badge' : 'alternate_email'}
                  </span>
                </div>
              </div>
              
              <div className="relative group form-element">
                <label htmlFor="password" className="block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold mb-2 ml-1">
                  Secure Access Key
                </label>
                <div className="relative">
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary px-1 py-3 transition-all duration-300 outline-none text-on-surface font-medium placeholder:text-outline-variant placeholder:font-normal focus:bg-primary-fixed/5" 
                    required 
                  />
                  <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline text-lg">lock</span>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-2 form-element">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative w-5 h-5 flex items-center justify-center rounded border-2 border-outline-variant group-hover:border-primary transition-colors">
                  <input type="checkbox" className="sr-only peer" />
                  <span className="material-symbols-outlined text-xs text-primary opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                </div>
                <span className="text-xs font-medium text-on-surface-variant tracking-tight">Remember Device</span>
              </label>
              <a href="#" className="text-xs font-semibold text-primary hover:text-primary-container transition-colors">
                Forgot Key?
              </a>
            </div>

            {/* CTA Button */}
            <button type="submit" className="form-element w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold text-lg shadow-[0_20px_40px_-10px_rgba(0,67,112,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,67,112,0.4)] transition-all duration-500 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
              Access Workplace
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </form>
          
          <div className="mt-8 text-center form-element">
            <p className="text-on-surface-variant text-[11px] font-medium tracking-wide">
              SECURED BY ETHEREAL QUANTUM ENCRYPTION
            </p>
          </div>
        </div>

        {/* Footer Links */}
        <footer className="mt-12 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant opacity-60 form-element">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Compliance</a>
        </footer>
      </main>

      {/* Floating Background Card Decals */}
      <div className="absolute top-[15%] right-[20%] w-32 h-32 glass-card rounded-3xl -rotate-12 blur-[1px] opacity-20 pointer-events-none abstract-blobs"></div>
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 glass-card rounded-2xl rotate-45 blur-[2px] opacity-10 pointer-events-none abstract-blobs"></div>
    </div>
  );
};

export default Login;
