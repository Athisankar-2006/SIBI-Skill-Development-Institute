import React from 'react'

import { Link } from 'react-router-dom'

const CoursesCard = ({ name, duration, fees, image, features,link }) => {
  return (
     <div className="course-card">
      <img src={image} alt={name} />

      <div className="course-details">
        <div className="course-info">
          <h3>{name}</h3>

          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="course-meta">
          <h4>Duration</h4>
          <p>{duration}</p>

          <h4>Fees</h4>
          <p>₹ {fees} (approx)</p>
          <Link to={link} > View Details</Link>

          
        </div>
      </div>
    </div>
  )
}

export default CoursesCard
