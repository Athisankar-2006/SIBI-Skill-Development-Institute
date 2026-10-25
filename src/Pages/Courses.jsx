import React from 'react'
import CoursesCard from '../components/CoursesCard'
import landsurvey from "../assets/landsurvey.jpeg"
import "../App.css"
import "../style/Courses.css"

const Courses = () => {


  const courses=[
        {
      id:1,
      name:"land Survey",
      duration:"2-3 Months",
      fees:"3000",
      image:landsurvey,
      features :[
        "Practical Training",
        "Expert Guidance",
        "Certificate Provided"
      ],
      },
      {
      id:2,
      name:"mobile service",
      duration:"2-3 Months",
      fees:"3000",
      image:landsurvey,
       features :[
        "Practical Training",
        "Expert Guidance",
        "Certificate Provided"
      ],
      },
      {
      id:3,
      name:"laptop service",
      duration:"2-3 Months",
      fees:"3000",
      image:landsurvey,
       features :[
        "Practical Training",
        "Expert Guidance",
        "Certificate Provided"
      ],
      }

]


  return (
    <div className='courses-container'>

        <div className="courses-nav">
          <h2>OUR COURSES</h2> 
        <p>Learn today . Lead Tommorow</p>
        
        </div>

      
      <div className="courses-body">
        <h2>Explore Our Skill Development Courses</h2>
        <p>Choose your course and start your journey towards a better future</p>
        <br />
        {/* courss card and props using */}
        <div className="courses-list">
          {courses.map((course)=>(
                    <CoursesCard 
                    key={course.id}
                    name={course.name}
                    duration={course.duration}
                    fees={course.fees}
                    image={course.image}
                    features={course.features}
                    />
                  ))}

        </div>
       

      </div>


      <div className="courses-footer">
        <p>some logo</p>
        <div className="courses-footer-body">
          
            <h2>Gain Practical Skils</h2>
            <p>Get Certificate . Build Your Career</p>
        </div>
        <button> Register Now</button>
      </div>
    </div>
  )
}

export default Courses
