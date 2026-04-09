import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const EmployeeManagement = () => {
  const containerRef = useRef(null);
  const { user, employees, logout, updateEmployee, deleteEmployee } = useAuth();
  const navigate = useNavigate();

  const [editingEmp, setEditingEmp] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleExportCSV = () => {
    if (!employees || employees.length === 0) return;
    
    // Build CSV Headers
    const headers = ['ID', 'Name', 'Email/ID', 'Role'];
    const rows = employees.map(emp => [
      emp.id,
      emp.name,
      emp.email || emp.id,
      emp.role
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "employees_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
    document.body.removeChild(link);
  };

  const handleEditClick = (emp) => {
    setEditingEmp(emp);
    setEditFormData({ name: emp.name, email: emp.email || '', role: emp.role || '' });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingEmp) {
      updateEmployee(editingEmp.id, editFormData);
      setEditingEmp(null);
    }
  };

  const handleRemoveClick = (empId) => {
    if (window.confirm("Are you sure you want to permanently delete this employee?")) {
      deleteEmployee(empId);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('.sidebar', { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .fromTo('.topbar', { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo('.header', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2")
      .fromTo('.emp-card', { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-surface font-body text-on-surface antialiased min-h-screen relative overflow-hidden">
      {/* SideNavBar */}
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
          <a onClick={() => navigate('/admin/tasks')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">assignment</span>
            <span className="font-label text-sm tracking-wider">Tasks</span>
          </a>
          <a onClick={() => navigate('/admin/profile')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-slate-500 dark:text-slate-400 font-medium hover:bg-sky-100/50 dark:hover:bg-sky-800/30">
            <span className="material-symbols-outlined pb-1">person</span>
            <span className="font-label text-sm tracking-wider">Profile</span>
          </a>
          <a onClick={() => navigate('/admin/employees')} className="cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-sky-900 dark:text-sky-100 relative before:content-[''] before:absolute before:left-0 before:w-1 before:h-8 before:bg-sky-900 dark:before:bg-sky-400 before:rounded-full bg-sky-100/50 dark:bg-sky-800/30">
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
        </div>
      </aside>

      {/* TopNavBar */}
      <header className="topbar fixed top-0 right-0 left-64 h-16 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md flex items-center justify-between px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-black text-sky-900 dark:text-sky-100 font-headline">Enterprise Roster</h2>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen bg-surface-container-low relative">
        {/* Header & FAB */}
        <div className="flex justify-between items-end mb-10 header">
          <div>
            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">Active Employees</h2>
            <p className="font-body text-on-surface-variant text-sm mt-1">Manage, update, and export operational datasets.</p>
          </div>
          <button onClick={handleExportCSV} className="bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 shadow-lg hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-sm align-middle">cloud_download</span>
            <span className="font-label uppercase tracking-widest text-xs">Export to CSV</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {employees.map((emp) => (
              <div key={emp.id} className="emp-card glass-card p-6 rounded-3xl group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 transition-all hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img className="w-full h-full object-cover" src={`https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&background=random`} alt={emp.name} />
                    </div>
                    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button onClick={() => handleEditClick(emp)} className="p-2 bg-surface-variant text-on-surface-variant rounded-lg hover:bg-primary-container hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm pt-0.5">edit</span>
                       </button>
                       <button onClick={() => handleRemoveClick(emp.id)} className="p-2 bg-error-container text-error rounded-lg hover:bg-error hover:text-white transition-colors">
                          <span className="material-symbols-outlined text-sm pt-0.5">delete</span>
                       </button>
                    </div>
                 </div>
                 
                 <h4 className="font-headline font-bold text-xl text-primary">{emp.name}</h4>
                 <p className="text-secondary font-bold text-sm tracking-wide mb-1">{emp.role || 'Unspecified Role'}</p>
                 <span className="inline-block px-3 py-1 bg-surface-container text-[10px] font-bold text-on-surface-variant rounded-full mt-2 uppercase tracking-wider">{emp.id}</span>
                 
                 <div className="mt-6 pt-4 border-t border-slate-200/50 flex flex-col space-y-2">
                    <div className="flex items-center space-x-3 text-sm text-slate-500">
                       <span className="material-symbols-outlined text-sm">alternate_email</span>
                       <p className="truncate font-medium">{emp.email || 'No email registered'}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* Edit Modal (Glassmorphism overlay) */}
        {editingEmp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
             <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setEditingEmp(null)}></div>
             <div className="relative glass-card bg-surface w-full max-w-md p-8 rounded-3xl shadow-2xl border border-white/50 z-10 animate-in fade-in zoom-in-95 duration-200">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="font-headline font-bold text-xl text-primary">Edit Organization Member</h3>
                 <button onClick={() => setEditingEmp(null)} className="text-slate-400 hover:text-error transition"><span className="material-symbols-outlined">close</span></button>
               </div>
               
               <form onSubmit={handleEditSubmit} className="space-y-4">
                 <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Assignee Name</label>
                    <input type="text" value={editFormData.name} onChange={(e) => setEditFormData({...editFormData, name: e.target.value})} className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" required />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Corporate Title</label>
                    <input type="text" value={editFormData.role} onChange={(e) => setEditFormData({...editFormData, role: e.target.value})} className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" required />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-2">Email Identity</label>
                    <input type="email" value={editFormData.email} onChange={(e) => setEditFormData({...editFormData, email: e.target.value})} className="w-full bg-white/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/10 transition-all font-medium text-primary outline-none" required />
                 </div>
                 
                 <div className="pt-6">
                   <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold font-label uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                      Save Context
                   </button>
                 </div>
               </form>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EmployeeManagement;
