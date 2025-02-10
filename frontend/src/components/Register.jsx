import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons
import "./register.css"; // Ensure the CSS file is linked

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { username, email, password });
      navigate("/");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <span className="icon">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
