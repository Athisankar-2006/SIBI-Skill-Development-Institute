import React from 'react'
import CoursesCard from '../components/CoursesCard'
import landsurvey from "../assets/landSurvey2.jpeg"
import laptopService from "../assets/laptopService.jpeg"
import mobileService from "../assets/mobileService.jpeg"
import "../App.css"
import "../style/Courses.css"
import { Link } from 'react-router-dom'

const Courses = () => {


  const courses = [
    {
      id: 1,
      name: "Land Surveying",
      duration: "2-3 Months",
      fees: "3,000",
      image: landsurvey,
      link: "/course/land-survey",
      features: [
        "Total Station & GPS Training",
        "Map Reading & Field Work",
        "Survey Calculations & Software",
      ],
    },
    {
      id: 2,
      name: "Mobile Servicing",
      duration: "2-3 Months",
      fees: "4,000 (approx)",
      image: mobileService,
      link: "/course/mobile-service",
      features: [
        "Hardware & Software Training",
        "Troubleshooting & Repair",
        "Android & iOS",
      ],
    },
    {
      id: 3,
      name: "Laptop Servicing",
      duration: "1-3 Months",
      fees: "4,000 (approx)",
      image: laptopService,
      link: "/course/laptop-service",
      features: [
        "Hardware & Software Training",
        "OS Installation & Troubleshooting",
        "Motherboard & Component Repair",
      ],
    },
  ];

  return (
    <div className="courses-container">

      {/* Courses Banner */}
      <section className="courses-nav">
        <h2>Our Courses</h2>
        <p>Learn Today, Lead Tomorrow</p>
      </section>

      {/* Courses Section */}
      <section className="courses-body">
        <h2>Explore Our Skill Development Courses</h2>

        <p>
          Choose your course and start your journey towards a better future.
        </p>

        <div className="courses-list">
          {courses.map((course) => (
            <CoursesCard
              key={course.id}
              name={course.name}
              duration={course.duration}
              fees={course.fees}
              image={course.image}
              features={course.features}
              link={course.link}
            />
          ))}
        </div>
      </section>

      {/* Registration Banner */}
      <section className="courses-footer">
        <p className="courses-footer-logo">SIBI</p>

        <div className="courses-footer-body">
          <h2>Gain Practical Skills</h2>
          <p>Get Certified · Build Your Career</p>
        </div>

        <Link to="/register" className="courses-register-btn">
          Register Now
        </Link>
      </section>

    </div>
  );
}

export default Courses
