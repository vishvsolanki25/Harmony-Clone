import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    // Placeholder: hook up your auth logic here
    console.log({ email, password })
  }

  return (
    <div className="login-page" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '60px 100px 80px 40px', minHeight: '100vh', background: '#fff' }}>
      <div className="login-card" style={{ width: '100%', maxWidth: '280px', background: '#ffffff', padding: '0', textAlign: 'center' }}>
        <h1>Login</h1>
        <p className="login-sub">Welcome back. Please enter your details.</p>

        <form onSubmit={onSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </label>

          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </form>

        <div className="login-footer">
          <span>Need an account?</span>
          <Link to="/" className="link">Go to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

