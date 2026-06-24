import React from 'react'
import Home from '../assets/home.jpg'
import './homehero.css'

const Homehero = () => {
  return (
    <>  
    <div className='home-hero'>
      <img className='home-hero-img' src={Home} alt="Event background" />

      <div className='home-overlay'>
        <h1>One Stop Event</h1>
        <h1>Planet</h1>

        <p>
          Yet bad any for travelling assistance indulgence unpleasing.
          Not enough all excercise blessing.indulgence way everything
          joy alteration boisterous the attachment. Party we years to
          Order allow asked of.
        </p>

        <p>Every event shout be perfect.</p>

        <div className="email-box">
          <input type="email" placeholder="enter your email" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-top'>
          <div className='about-left'>
            <h4>What is Harmoni</h4>
            <h4>Event</h4>

            <h2>Your Event Will be Beyond your Imagination</h2>
          </div>

          <div className='about-right'>
            <p>
              We so opinion me message as delight.Whole front do of Plate heard oh ought. His defective nor convinced
              recidence own.Connection has put impossile own apartments boisterousAtjointure ladyship an insisted
              so humanity he.Friendly bechlour entrance to on by.
            </p>
            <a>Explore the Library</a>
          </div>
        </div>

        <div className='about-cards'>
          <div className='about-card'>
            <span></span>
            <h3>Chatbots</h3>
            <p>
              We so opinion friend me msj as delight.
              Whole front do of Plate heard oh ought.
            </p>
          </div>
          <div className='about-card'>
            <span></span>
            <h3>Knowledgebase</h3>
            <p>
              At jointure ladyship an insisted so humanity
              he.Friendly bechlour entrance to on by.As put
              impossile ow apartments b.
            </p>
          </div>
          <div className='about-card'>
            <span></span>
            <h3>Education</h3>
            <p>
              At jointure ladyship an insisted so
              he.Friendty bechlour entrance to on by.As put
              impossile ow apartments b
            </p>
          </div>
        </div>
      </div>
    </section>

         

      <section className="service-section">
        <div className="service-container">

          <div className="service-left">
            <h2>
              Harmony Event Management firm & Wedding Planner is a group of creative minds
              who would like to make weddings, birthday & any kind of events courteous &
              a better place for our clients to celebrate important moment of their lives...
            </h2>

            <a >Request Early Access to get Started</a>       
            </div>

          <div className="service-middle">
            <div className="service-name">
              <span></span>
              <h3>Photography</h3>
            </div>

            <div className="service-name">
              <span></span>
              <h3>cinematography or <br /> Videography service</h3>
            </div>

            <div className="service-name">
              <span></span>
              <h3>Full venue Decoration <br /> Service</h3>
            </div>

            <div className="service-name">
              <span></span>
              <h3>Home Decoration</h3>
            </div>
          </div>

          <div className="service-right">
            <p>A Team of 3 talented Photographers are ready to snap the best moments of your ceremony</p>
            <p>Creative full HD 1080p Video. a different space of your ceremony</p>
            <p>A Blend of out-of-box ideas to decore your precious date</p>
            <p>just call us and get total event solution under one roof...</p>
          </div>

        </div>
      </section>

     </>
  )
}

export default Homehero
