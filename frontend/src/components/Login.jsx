// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import API from "../services/api"

// function Login() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     try {
//       const { data } = await API.post("/auth/login", { email, password })
//       localStorage.setItem("token", data.token)
//       navigate("/dashboard")
//     } catch (error) {
//       console.error(error.response?.data || error.message)
//     }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input 
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input 
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={() => navigate("/register")}>Go to Register</button>
//     </div>
//   )
// }

// export default Login


import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import "./login.css"         // <-- Import the CSS file here

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { data } = await API.post("/auth/login", { email, password })
      localStorage.setItem("token", data.token)
      navigate("/dashboard")
    } catch (error) {
      console.error(error.response?.data || error.message)
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="register-btn" onClick={() => navigate("/register")}>
        Go to Register
      </button>
    </div>
  )
}

export default Login

