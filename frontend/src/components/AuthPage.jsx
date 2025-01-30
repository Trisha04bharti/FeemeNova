import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthPage({ setToken }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <Login setToken={setToken} /> : <Register />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default AuthPage;

