import React from 'react'
import landsurvey from "../assets/landsurvey.jpeg"
import "../style/Register.css"

import {
  UserRound,
  Mail,
  Phone,
  BookOpen,
  Clock,
  MapPin,
  MessageSquare,
  GraduationCap,
  Wrench,
  Wallet,
  CalendarDays,
  Award,
  BriefcaseBusiness,
  Headset,
} from "lucide-react";

import landsurvey from "../assets/landsurvey.jpeg";
import "../style/Register.css";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your backend API here to save the registration.
    alert("Form submitted! Connect your backend to save registration details.");
  };

  return (
    <main className="register-container">
      {/* HEADER BANNER */}
      <header className="register-nav">
        <div className="register-banner-content">
          <h1>Register Now</h1>
          <p>Start Your Skill Development Journey</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="register-content">
        {/* LEFT: REGISTRATION FORM */}
        <section className="form-section">
          <div className="form-heading">
            <h2>Student Registration Form</h2>
            <p>
              Fill in your details to enroll in your preferred course.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="student-form">
            <label className="register-field">
              <span className="field-icon">
                <UserRound size={19} />
              </span>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                aria-label="Full Name"
                autoComplete="name"
                required
              />
            </label>

            <label className="register-field">
              <span className="field-icon">
                <Mail size={19} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                autoComplete="email"
                required
              />
            </label>

            <label className="register-field">
              <span className="field-icon">
                <Phone size={19} />
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                autoComplete="tel"
                pattern="[0-9+() -]{7,20}"
                title="Enter a valid phone number"
                required
              />
            </label>

            <label className="register-field">
              <span className="field-icon">
                <BookOpen size={19} />
              </span>
              <select name="course" defaultValue="" required>
                <option value="" disabled>
                  Select Course
                </option>
                <option value="land-survey">Land Surveying</option>
                <option value="mobile-service">Mobile Servicing</option>
                <option value="laptop-service">Laptop Servicing</option>
              </select>
            </label>

            <label className="register-field">
              <span className="field-icon">
                <Clock size={19} />
              </span>
              <select name="batch" defaultValue="" required>
                <option value="" disabled>
                  Preferred Batch
                </option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </label>

            <label className="register-field">
              <span className="field-icon">
                <MapPin size={19} />
              </span>
              <input
                type="text"
                name="address"
                placeholder="Address"
                aria-label="Address"
                autoComplete="street-address"
                required
              />
            </label>

            <label className="register-field register-message">
              <span className="field-icon">
                <MessageSquare size={19} />
              </span>
              <textarea
                name="message"
                placeholder="Message (Optional)"
                aria-label="Message (Optional)"
                rows={3}
              />
            </label>

            <button type="submit" className="register-submit">
              Submit Registration
            </button>
          </form>
        </section>

        {/* RIGHT: INFORMATION PANELS */}
        <aside className="info-section">
          <section className="why-register">
            <h2>Why Register with SIBI?</h2>

            <ul>
              <li>
                <GraduationCap />
                <span>Get expert training</span>
              </li>
              <li>
                <Wrench />
                <span>Hands-on practical sessions</span>
              </li>
              <li>
                <Wallet />
                <span>Affordable fees</span>
              </li>
              <li>
                <CalendarDays />
                <span>Flexible batch timings</span>
              </li>
              <li>
                <Award />
                <span>Certificate after completion</span>
              </li>
              <li>
                <BriefcaseBusiness />
                <span>Career support &amp; guidance</span>
              </li>
            </ul>
          </section>

          <section className="help">
            <div className="help-icon">
              <Headset size={28} />
            </div>

            <div className="help-content">
              <h3>Need Help?</h3>
              <p>
                Call us at <strong>+91 98765 43210</strong>
                <br />
                or visit our campus for more details.
              </p>
            </div>
          </section>

          <div className="image-box">
            <img
              src={landsurvey}
              alt="Students learning practical technical skills at SIBI"
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Register;
