import React from 'react'

const Location = () => {
  return (
    <>
    
    <div className="location-container">

      <div className="location-nav">
        <h2>OUR LOCATION</h2>
        <p>Visit Us At Our Location</p>
      </div>


      <div className="location">
        <div className="location-body">
                 <h2>Find Us Here</h2>

                 <ul>
                  <li>123,main street,green park,your city -12345</li>
                  <li>+91 233434848</li>
                  <li>athisankar@gmail.com</li>
                 </ul>

                 <div className="working-hours">
                  <h2> <span>watch logo</span>Working Hourse</h2>
                  <ul>
                    <li>Monday-Saturday</li>
                    <li>9.00Am -6.00PM</li>
                  </ul>
                 </div>
        </div>
        <div className="location-map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3275.827628409543!2d77.98155833043555!3d10.35303267456618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIxJzEwLjkiTiA3N8KwNTgnNTkuMSJF!5e1!3m2!1sen!2sin!4v1792157476022!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          <p>Get Direction</p>
          <a href="https://maps.app.goo.gl/dCZfG6JxMh6NdzZr6">
          <button>Open in Google Map</button>
          </a>
          
        </div>

      </div>



      <div className="location-image">
        <p>image </p>
      </div>
    </div>
    </>
  )
}

export default Location
