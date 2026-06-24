import './aboutHero.css'
import mountain from '../../assets/mountain.png'  
import { Link } from 'react-router-dom'

const aboutHero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={mountain} alt="Mountain event background" />
      <div className="overlay">

        <h3>ALL YOU NEED TO</h3>

        <h2 className="yellow">ABOUT</h2>

        <h1>HARMONI</h1>

        <div className="zz">
          <span > <Link to="/">HOME</Link></span>
          <span>|</span>
          <span > <Link to="/about">ABOUT US</Link></span>
        </div>

      </div>
    </div>
  );
};

export default aboutHero
