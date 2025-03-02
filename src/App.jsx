import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

function App() {

  const [user, setUser] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      console.log('authData:', authData);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
    } else if (authData && authData.employees.find((e) => {
      return email === e.email && password === e.password;
    })) {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;