import React from 'react'
import "../style/CourseDetail.css"
import { Link } from 'react-router-dom'

const MobileService = () => {
  return (
    <>
     <div className="course-container">
      <h1>Mobile Service Course</h1>
      <p>Master smartphone repair and maintenance.</p>

      <section className="about-course">
        <h2>About This Course</h2>
        <p>
          This course provides hands‑on training in mobile phone servicing,
          covering hardware and software troubleshooting, circuit analysis,
          and advanced repair techniques for Android and iOS devices.
        </p>
      </section>

      <section className="what-you-learn">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Mobile hardware components and circuit basics</li>
          <li>Software flashing and OS installation</li>
          <li>Diagnosing and fixing charging, display, and network issues</li>
          <li>Data recovery and backup techniques</li>
          <li>Advanced soldering and IC replacement</li>
          <li>Customer service and repair workflow</li>
        </ul>
      </section>

      <section className="course-highlights">
        <h2>Course Highlights</h2>
        <ul>
          <li>Duration: 2–3 Months</li>
          <li>Mode: Offline (Workshop + Classroom)</li>
          <li>Certification: Yes</li>
          <li>Fees: ₹6,000 (approx)</li>
        </ul>
        <Link to="/register" className="enroll-btn"> Enroll Now</Link>
        
      </section>
    </div>
    </>
  )
}

export default MobileService
