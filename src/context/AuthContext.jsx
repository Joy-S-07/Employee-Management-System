import React, { createContext, useContext, useState, useEffect } from 'react';
import initialUserData from '../utils/userData.json';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Manage Logged In User
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    // Seed/Manage local Employees Array
    const localEmployees = localStorage.getItem('employeesData');
    if (localEmployees) {
      setEmployees(JSON.parse(localEmployees));
    } else {
      setEmployees(initialUserData.employees);
      localStorage.setItem('employeesData', JSON.stringify(initialUserData.employees));
    }

    // Seed local Admins Array
    const localAdmins = localStorage.getItem('adminsData');
    if (localAdmins) {
      setAdmins(JSON.parse(localAdmins));
    } else {
      setAdmins(initialUserData.admin);
      localStorage.setItem('adminsData', JSON.stringify(initialUserData.admin));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  // Allow admin and employees to update their current logged in fields
  const updateProfile = (updatedData) => {
    const freshUser = { ...user, ...updatedData };
    setUser(freshUser);
    localStorage.setItem('loggedInUser', JSON.stringify(freshUser));

    if (freshUser.role === 'admin') {
      const newAdmins = admins.map(a => a.id === freshUser.id ? freshUser : a);
      setAdmins(newAdmins);
      localStorage.setItem('adminsData', JSON.stringify(newAdmins));
    } else {
      const newEmployees = employees.map(e => e.id === freshUser.id ? freshUser : e);
      setEmployees(newEmployees);
      localStorage.setItem('employeesData', JSON.stringify(newEmployees));
    }
  };

  // CRUD for Employees (Admin restricted)
  const updateEmployee = (empId, updatedFields) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === empId ? { ...emp, ...updatedFields } : emp
    );
    setEmployees(updatedEmployees);
    localStorage.setItem('employeesData', JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (empId) => {
    const updatedEmployees = employees.filter(emp => emp.id !== empId);
    setEmployees(updatedEmployees);
    localStorage.setItem('employeesData', JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      employees, 
      admins,
      login, 
      logout,
      updateProfile,
      updateEmployee,
      deleteEmployee
    }}>
      {children}
    </AuthContext.Provider>
  );
};
