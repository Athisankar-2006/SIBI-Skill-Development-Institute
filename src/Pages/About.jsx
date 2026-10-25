import React from 'react'
import landsurvey from '../assets/landsurvey.jpeg'
import "../style/About.css"


const About = () => {
  return (
    <>
    
   <div className="about-container">
     

    <div className="about-nav">
      <h2>About Us</h2>
      <p>Empowering Youth Through Skill Development</p>
    </div>


    <div className="about-story">
      <h2>Our Story </h2>
      <div className="about-story-body">
    
<p>
  SIBI Skill Development Institute is a newly established
  training center with a mission to bridge the skill gap
  among students and provide hands-on training in
  technology and technical fields. We believe in practical
  learning, expert guidance, and industry-relevant skills
  to help our students build a better future.

  Our mission is to create skilled professionals who can
  contribute to the growing digital and technical world.
  We focus on quality training, affordable education, and
  complete student support, from learning to career
  opportunities.
</p>

    <img src={landsurvey} alt="" style={{height:"200px", width:"300px"}}/>
        
      </div>
      
    </div>



    <div className="about-vission-mission">
       <h2>OUR VISSION & MISSION</h2>

       <div className="vission-mission">
            <div className="vission">
                    <div className="vission-img">
                      <p>image</p>
                    </div>
                    <div className="vission-body">
                     <h2>Our Vision</h2>
                        <p>
                          To become a leading skill development institute
                          recognized for excellence in technical education
                          and student success.
                        </p>
                    </div>  
                  </div>

                  <div className="mission">
                    <div className="mission-img">
                      <p>image</p>
                    </div>
                    <div className="mission-body">
                       <h2>Our Mission</h2>
                            <p>
                              To provide high-quality skill development training
                              that empowers students with practical knowledge
                              and career-ready skills.
                            </p>
                    </div>
                  </div>

       </div>
      
    </div>


    <div className="about-footer">
      <h2>OUR VALUES</h2>
      <div className="about-footer-container">
        <div className='about-footer-one'>
          <p>image</p>
          <p>Quality Training</p>
        </div>
         <div className='about-footer-two'>
          <p>image</p>
          <p>Student Focus</p>
        </div>
         <div className='about-footer-two'>
          <p>image</p>
          <p>Innovation</p>
        </div>
         <div className='about-footer-two'>
          <p>image</p>
          <p>Integrity</p>
        </div>
      </div>

     </div>



   </div>

    </>
  )
}

export default About
