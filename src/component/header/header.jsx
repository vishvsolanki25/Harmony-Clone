import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="site-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <div className="profile-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Header
