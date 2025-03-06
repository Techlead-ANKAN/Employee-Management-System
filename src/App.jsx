import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { setLocalStorage } from './utils/LocalStorage';
import { getLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';
import Home from './components/Home/Home';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [showLogin, setShowLogin] = useState(false);

  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser    = localStorage.getItem("loggedInUser   ", "")
    
    if(loggedInUser   ){
      const userData = JSON.parse(loggedInUser   )
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser   ", JSON.stringify({ role: "admin" }))
    } 
    else if (authData) {
      const employee = authData[0].find((e) => email == e.email && password == e.password)
      if(employee){
        setUser("employee");
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser   ", JSON.stringify({ role: "employee" , data: employee}))
      }
    } 
    else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser   ");
    setShowLogin(false);
  };

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  return (
    <>
      {user === null && !showLogin ? 
        <Home handleGetStarted={handleGetStarted} /> : 
        user === null && showLogin ? 
          <Login handleLogin={handleLogin} /> : 
          user === "admin" ? 
            <AdminDashboard changeUser   ={handleLogout} /> : 
            user === "employee" ? 
              <EmployeeDashboard changeUser   ={handleLogout} data={loggedInUserData}/> : 
              null
      }
    </>
  );
}

export default App;