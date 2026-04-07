import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Login from './components/login/Login'
import WebDashboard from './components/dashBoard/WebDashboard'
import Admin from './components/dashBoard/Admin'
import Employee from './components/dashBoard/Employee'
import { AuthProvider, useAuth } from './context/AuthContext'

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
        <Route path="/" element={<WebDashboard />} />
        <Route path="/login" element={user ? <Navigate to={user.role === 'admin' ? "/admin" : "/employee"} replace /> : <Login />} />
        <Route path="/admin" element={<ProtectedAdminRoute><Admin /></ProtectedAdminRoute>} />
        <Route path="/employee" element={<ProtectedEmployeeRoute><Employee /></ProtectedEmployeeRoute>} />
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
  )
}

export default App