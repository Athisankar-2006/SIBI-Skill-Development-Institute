import React from 'react'

const LandSurvey = () => {
  return (
   <>
   <div className="course-container">
      <h1>Land Surveying Course</h1>
      <p>Learn Surveying, Map Your Future.</p>

      <section className="about-course">
        <h2>About This Course</h2>
        <p>
          This course provides complete training in modern land surveying techniques using advanced instruments like Total Station, GPS, and Drone Surveying.
        </p>
      </section>

      <section className="what-you-learn">
        <h2>What You Will Learn</h2>
        <ul>
          <li>Introduction to Surveying & its Applications</li>
          <li>Using Total Station and GPS Equipment</li>
          <li>Boundary & Topographical Surveying</li>
          <li>Data Calculation and Map Preparation</li>
          <li>Surveying Software (AutoCAD / Civil 3D)</li>
          <li>Practical Field Training</li>
        </ul>
      </section>

      <section className="course-highlights">
        <h2>Course Highlights</h2>
        <ul>
          <li>Duration: 2–3 Months</li>
          <li>Mode: Offline (Classroom + Field)</li>
          <li>Certification: Yes</li>
          <li>Fees: ₹8,000 (approx)</li>
        </ul>
        <button className="enroll-btn">Enroll Now</button>
      </section>
    </div>
    </>
  )
}

export default LandSurvey
