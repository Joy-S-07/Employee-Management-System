import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import TaskManagement from './pages/TaskManagement';
import OrganizationRegistration from './pages/OrganizationRegistration';
import Profile from './pages/Profile';
import EmployeeTasks from './pages/EmployeeTasks';

const ProtectedAdminRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') return <Navigate to="/login" replace />;
  return children;
};

const ProtectedEmployeeRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== 'employee') return <Navigate to="/login" replace />;
  return children;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<OrganizationRegistration />} />
        <Route path="/login" element={user ? <Navigate to={user.role === 'admin' ? "/admin" : "/employee"} replace /> : <Login />} />
        
        <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
        <Route path="/admin/tasks" element={<ProtectedAdminRoute><TaskManagement /></ProtectedAdminRoute>} />
        <Route path="/admin/profile" element={<ProtectedAdminRoute><Profile /></ProtectedAdminRoute>} />
        
        <Route path="/employee" element={<ProtectedEmployeeRoute><EmployeeDashboard /></ProtectedEmployeeRoute>} />
        <Route path="/employee/tasks" element={<ProtectedEmployeeRoute><EmployeeTasks /></ProtectedEmployeeRoute>} />
        <Route path="/employee/profile" element={<ProtectedEmployeeRoute><Profile /></ProtectedEmployeeRoute>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;