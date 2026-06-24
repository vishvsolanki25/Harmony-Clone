import React from 'react'
import { useNavigate } from 'react-router-dom'
import './EventDetails.css'
import cricket from '../../assets/cric.png'

const EventDetails = () => {
  const navigate = useNavigate()

  return (
    <div className="event-details-container">
      <div className="event-hero">
        <img 
          src={cricket}
          alt="Indian Premier League" 
          className="event-hero-img"
        />
      </div>
      
      <div className="event-content">
        <h1 className="event-title">INDIAN PREMIER LEAGUE</h1>
        <div className="event-info-row">
          <span className="event-price">₹2499</span>
          <button className="book-ticket-btn" onClick={() => navigate('/login')}>
            Book Ticket
          </button>
        </div>

        <h2 className="event-section-title">When and Where</h2>
        <div className="event-datetime-location-row">
          <div className="event-datetime-card">
            <div className="event-datetime-item">
              <span className="event-icon">🗓️</span>
              <div>
                <p className="event-datetime-label">Date and Time</p>
                <p className="event-datetime-value">Start Date: 2025-03-15</p>
                <p className="event-datetime-value">Start Time: 19:32</p>
              </div>
            </div>
          </div>
          <div className="event-datetime-card">
            <div className="event-datetime-item">
              <span className="event-icon">🗓️</span>
              <div>
                <p className="event-datetime-label">Date and Time</p>
                <p className="event-datetime-value">End Date: 2024-05-09</p>
                <p className="event-datetime-value">End Time: 11:11</p>
              </div>
            </div>
          </div>
        </div>
        <div className="event-location-card">
          <div className="event-location-item">
            <span className="event-icon">📍</span>
            <div>
              <p className="event-location-label">Location</p>
              <p className="event-location-value">Motera Stadium Ahemdabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
