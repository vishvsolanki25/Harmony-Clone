import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './adminlogin.css'
import LoginImg from '../../../assets/adminlogin.png'
import axios from "axios";

const AdminLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3046/api/v1/admin/login",
        {
          email,
          password
        }
      )

      alert(response.data.message)
      localStorage.setItem("adminToken", response.data.accessToken || "")
      localStorage.setItem("admin", JSON.stringify(response.data.admin || {}))
      navigate("/admin")

      console.log(response.data)

    } catch (error) {

      alert(error.response?.data?.message || error.message || "Login Failed")

      console.log(error)

    }

  }

  return (

    <div
      className='login1'
      style={{ backgroundImage: `url(${LoginImg})` }}
    >

      <div className='login-overlay'>

        <h1>LOGIN</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='remember'>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me ?</label>
        </div>

        <button onClick={handleLogin}>
          Log IN
        </button>

      </div>

    </div>
  )
}

export default AdminLogin
