import React from 'react'
import "../style/CourseDetail.css"
import { Link } from 'react-router-dom'

const LaptopService = () => {
  return (
    <>
     <div className="course-container">
      <h1>Laptop Service Course</h1>
      <p>Learn professional laptop repair and diagnostics.</p>

      <section className="about-course">
        <h2>About This Course</h2>
        <p>
          This course offers complete training in laptop servicing, including
          motherboard repair, BIOS configuration, software installation, and
          troubleshooting techniques for all major brands.
        </p>
      </section>

      <section className="what-you-learn">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Understanding laptop architecture and components</li>
          <li>Motherboard and chipset diagnostics</li>
          <li>Battery, display, and keyboard repair</li>
          <li>Operating system installation and driver setup</li>
          <li>Data recovery and virus removal</li>
          <li>Practical hands‑on repair sessions</li>
        </ul>
      </section>

      <section className="course-highlights">
        <h2>Course Highlights</h2>
        <ul>
          <li>Duration: 2–3 Months</li>
          <li>Mode: Offline (Workshop + Classroom)</li>
          <li>Certification: Yes</li>
          <li>Fees: ₹7,000 (approx)</li>
        </ul>
        <Link to="/register" className="enroll-btn"> Enroll Now</Link>
      </section>
    </div>
    </>
  )
}

export default LaptopService
