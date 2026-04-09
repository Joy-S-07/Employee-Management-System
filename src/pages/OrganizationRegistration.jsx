import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';

const OrganizationRegistration = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.bg-abstract', { opacity: 0 }, { opacity: 0.6, duration: 2 })
      .fromTo('.glass-panel', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.5)" }, "-=1.5")
      .fromTo('.form-element', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.4");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-background font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen relative overflow-x-hidden flex flex-col">
      {/* Background Abstract Layer */}
      <div className="fixed inset-0 z-0 bg-abstract opacity-0">
        <img alt="Abstract" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6N2GeiHzwhlUXZ8uWvJjOO8CTX_Qr5hQyP7r0HBgdLvshYzYvgIN6v6AdOw4kzsq91DviDzFWi1w87-4llMsL1nyFIZEjmZw7QueAD4qV8HOADmtVs5_j2CROMnBJ6rU6QeaOZTR_3ykb8OvJq-S2YAw02tcP8Pd_xukjDvY1VPlLZ8SF3PJgILt6rFwhLOvZes2cSWEZCXv8exAoPJFw_TT8fZEY2dx4-19knC9awUThnP2gMNJ7ubfDUJBuBupFIUgiIeJsKbx"/>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary/5"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-8 py-6 flex justify-between items-center max-w-[1920px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-primary font-headline">Ethereal Workplace</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label text-on-surface-variant font-medium tracking-wider uppercase text-[0.75rem]">Support</span>
          <span className="material-symbols-outlined text-primary cursor-pointer">help</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="glass-panel w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] shadow-[0_32px_64px_-12px_rgba(0,67,112,0.12)] border border-white/40">
          
          {/* Left Side */}
          <div className="md:col-span-4 bg-primary-container p-10 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="relative z-10 form-element">
              <h1 className="font-headline font-bold text-3xl leading-tight mb-4">Establish Your Digital Atrium</h1>
              <p className="text-on-primary-container text-sm leading-relaxed opacity-90">Transform workforce orchestration into a seamless executive experience. Start by defining your organization's core identity.</p>
            </div>
            <div className="relative z-10 space-y-6 form-element mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">domain</span>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-widest text-on-primary-container font-semibold">Step 01</p>
                  <p className="font-semibold">Company Profile</p>
                </div>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <span className="material-symbols-outlined text-white">admin_panel_settings</span>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-widest text-on-primary-container font-semibold">Step 02</p>
                  <p className="font-semibold">Executive Setup</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-8 p-10 md:p-12">
            <div className="mb-10 form-element">
              <h2 className="font-headline font-bold text-2xl text-primary">Organization Setup</h2>
              <p className="text-on-surface-variant text-sm mt-1">Provide the essential details to configure your workspace.</p>
            </div>

            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); navigate('/login'); }}>
              <div className="space-y-6">
                <div className="group form-element">
                  <label className="block text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary">
                    Organization Name
                    <input type="text" className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 text-on-surface placeholder:text-outline placeholder:opacity-50 font-medium text-lg outline-none" placeholder="e.g. Luminara Global" required />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group form-element">
                    <label className="block text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary">
                      Industry
                      <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 text-on-surface font-medium cursor-pointer outline-none" required>
                        <option value="">Select industry...</option>
                        <option>Technology & Innovation</option>
                        <option>Financial Services</option>
                        <option>Healthcare & Life Sciences</option>
                        <option>Creative & Media</option>
                        <option>Architecture & Design</option>
                      </select>
                    </label>
                  </div>
                  <div className="group form-element">
                    <label className="block text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary">
                      Employee Count
                      <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 text-on-surface font-medium cursor-pointer outline-none" required>
                        <option value="">Expected size...</option>
                        <option>1 - 50 (Emerging)</option>
                        <option>51 - 250 (Scaling)</option>
                        <option>251 - 1000 (Enterprise)</option>
                        <option>1000+ (Global)</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-surface-container-high my-8 form-element"></div>

              <div className="form-element">
                <h3 className="font-headline font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">person</span> Primary Administrator
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary">
                      Full Name
                      <input type="text" className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 text-on-surface font-medium outline-none" placeholder="Executive Name" required />
                    </label>
                  </div>
                  <div className="group">
                    <label className="block text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-2 transition-colors group-focus-within:text-primary">
                      Work Email
                      <input type="email" className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all py-3 px-0 text-on-surface font-medium outline-none" placeholder="name@company.com" required />
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 form-element">
                <div onClick={() => navigate('/login')} className="flex items-center gap-2 text-on-surface-variant group cursor-pointer hover:text-primary transition-colors">
                  <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                  <span className="text-sm font-medium">Back to Login</span>
                </div>
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold tracking-wide shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  Initialize Workspace <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
            <span className="text-[0.7rem] uppercase tracking-widest font-bold">Enterprise Grade Security</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">cloud_done</span>
            <span className="text-[0.7rem] uppercase tracking-widest font-bold">Azure Vitrum Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">lock</span>
            <span className="text-[0.7rem] uppercase tracking-widest font-bold">GDPR & SOC2 Compliant</span>
          </div>
        </div>
      </main>

      <footer className="relative z-10 bg-surface-container-low py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 gap-4 max-w-[1920px] mx-auto">
          <div className="text-on-surface-variant font-label text-[0.75rem] tracking-wider uppercase">
            © 2024 Ethereal Workplace. Crystalline Executive Experience.
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant text-[0.75rem] tracking-wider uppercase hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant text-[0.75rem] tracking-wider uppercase hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant text-[0.75rem] tracking-wider uppercase hover:text-primary transition-colors" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrganizationRegistration;
