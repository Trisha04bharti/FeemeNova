import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import AuthPage from './components/AuthPage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/'); // Redirect to Home when authenticated
    }
  }, [token, navigate]);

  return (
    <Routes>
      <Route path="/" element={token ? <Home /> : <Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage setToken={setToken} />} />
    </Routes>
  );
}

export default App;


