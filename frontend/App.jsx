
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Login from './src/Login';
import Welcome from './src/Welcome';
import NotFound from './src/NotFound';


const AppRoutes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/user', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setAuthenticated(true);
          navigate('/welcome');
        } else {
          setAuthenticated(false);
        }
      });
  }, []);

  const handleLogout = () => {
    fetch('http://localhost:8080/logout', { method: 'POST', credentials: 'include' })
      .then(() => setAuthenticated(false));
  };

  return (
    <Routes>
      <Route path="/" element={authenticated ? <Welcome onLogout={handleLogout}/> : <Navigate to="/login" replace />} />
      <Route path="/login" element={authenticated ? <Navigate to="/welcome" replace /> : <Login />} />
      <Route path="/welcome" element={authenticated ? <Welcome onLogout={handleLogout}/> : <Navigate to="/login" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
