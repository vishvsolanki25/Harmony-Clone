import AboutHero from '../hero/aboutHero'
import './about.css'

const About = () => {
  const cards = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <AboutHero />

      <section className="home-info">
        <div className="info">
          <p>We are harmoni</p>
          <h1>No.1 Events</h1>
          <h1>Management</h1>
          <h6>Get Started!</h6>
        </div>

        <div className="info-card">
          <div className="section-title">
            <h2>our mission</h2>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor site amet the best consectuer adipiscing elites sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat insignia the consectuer adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor site amet the best consectuer adipiscing elites sed
            diam nonummy nibh euismod tincidunt.
          </p>
        </div>

        <div className="info-card">
          <div className="section-title">
            <h2>our vision</h2>
            <span></span>
          </div>
          <p>
            Lorem ipsum dolor site amet the best consectuer adipiscing elites sed
            diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat insignia the consectuer adipiscing elit.
          </p>
          <p>
            Lorem ipsum dolor site amet the best consectuer adipiscing elites sed
            diam nonummy nibh euismod tincidunt.
          </p>
        </div>
      </section>

      <section className="container">
        {cards.map((card) => (
          <div className="box" key={card}>
            <h2>study with us</h2>

            <p>
              Visit Our World class Facility <br />
              for bSouth African Scientist <br />
              and Spectrum
            </p>
          </div>
        ))}
      </section>
    </>
  )
}

export default About
