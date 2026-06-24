import './contacthero.css'
import mountain from '../assets/mountain.png'
import { Link } from 'react-router-dom'

const ContactHero = () => {
  return (
    <>
      <div className="contact-hero">
        <img className="contact-hero-img" src={mountain} alt="Mountain event background" />
        <div className="contact-overlay">
          <h3>CONTACT US NOW</h3>

          <div className="contact-title">
            <span>KEEP</span>
            <span>IN TOUCH</span>
          </div>

          <div className="contact-breadcrumb">
            <span><Link to="/">Home</Link></span>
            <span>|</span>
            <span><Link to="/contact">Contact Us</Link></span>
          </div>
        </div>
      </div>

      <section className="contact-form-section">
        <div className="contact-form-box">
          <div className="contact-icon" aria-hidden="true"></div>
          <h2>Contact Us</h2>

          <form>
            <input type="text" placeholder="name *" required />
            <input type="email" placeholder="email *" required />
            <input type="tel" placeholder="phone *" required />
            <input type="text" placeholder="message *" required />
            <button className="submit" type="submit">SEND</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactHero
