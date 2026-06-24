import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/mountain.png'
import img from '../assets/info-1.png'
import img2 from '../assets/info-2.png'
import img3 from '../assets/info-3.png'
import img4 from '../assets/info-4.png'
import img5 from '../assets/info-5.png'
import img6 from '../assets/info-6.png'
import './eventhero.css'
const Eventhero = () => {
  const navigate = useNavigate()
  
  return ( <> 
    <div className='hero'>
      <img  className="hero-img" src={bg} alt="Mountain" />
    </div>
    <section className='event-info'>
      <div className='event-card' onClick={() => navigate('/event-details')} style={{ cursor: 'pointer' }}>
        <img src={img} alt='Event 1' />
        <h3>Cricket</h3>
      </div>
      <div className='event-card'>
        <img src={img2} alt='Event 2' />
        <h3>Office Party</h3>
      </div>
      <div className='event-card'>
        <img src={img6} alt='Event 3' />
        <h3>December Events</h3>
      </div>
      <div className='event-card'>
        <img src={img5} alt='Event 4' />
        <h3>Food Zone</h3>
      </div>
      <div className='event-card'>
        <img src={img3} alt='Event 5' />
        <h3>Garba</h3>
      </div>
      <div className='event-card'>
        <img src={img4} alt='Event 6' />
        <h3>Concert</h3>
      </div>
    </section>
        </>
  )
}

export default Eventhero

    
  
