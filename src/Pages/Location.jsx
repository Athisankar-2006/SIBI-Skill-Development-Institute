
import React from "react";
 import instituteImage from "../assets/Courses.png";
import "../style/Location.css";

const Location = () => {
  return (
    <div className="location-container">

      {/* Top Banner */}
      <section className="location-nav">
        <h2>Our Location</h2>
        <p>Visit Us at Our Institute</p>
      </section>

      {/* Contact and Map Section */}
      <section className="location-content">

        {/* Contact Information */}
        <div className="location-body">
          <h2>Find Us Here</h2>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">📍</span>
              <span>
                123, Main Street, Green Park,
                <br />
                Your City - 123456
              </span>
            </li>

            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </li>

            <li>
              <span className="contact-icon">✉</span>
              <a href="mailto:info@sibiinstitute.com">
                info@sibiinstitute.com
              </a>
            </li>
          </ul>

          {/* Working Hours */}
          <div className="working-hours">
            <h3>
              <span className="hours-icon">◷</span>
              Working Hours
            </h3>

            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="location-map">
          <iframe
            title="SIBI Skill Development Institute Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3275.827628409543!2d77.98155833043555!3d10.35303267456618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIxJzEwLjkiTiA3N8KwNTgnNTkuMSJF!5e1!3m2!1sen!2sin!4v1792157476022!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <h3>Get Directions</h3>

          <a
            className="directions-btn"
            href="https://maps.app.goo.gl/dCZfG6JxMh6NdzZr6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>📍</span>
            Open in Google Maps
          </a>
        </div>

      </section>

      {/* Institute Image */}
      <section className="location-image">
        <img
          src={instituteImage}
          alt="SIBI Skill Development Institute building"
        />

        <div className="location-image-overlay">
          <p>Learn Today | Lead Tomorrow</p>
        </div>
      </section>

    </div>
  );
};

export default Location;