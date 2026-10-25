import React from 'react'
import sibilogo from "../assets/sibilogo.png"
import "../App.css"
import { NavLink,Link } from 'react-router-dom'
import "../style/CourseDetail.css"


const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="logo">
        <img src={sibilogo} alt="logo" />
        <div className="logo-text">
           <h2 id='text-sibi'>SIBI </h2>
           <p><span>SKILL DEVELOPMENT INSTITUTE</span></p>
        </div>
       
      </div>

     
        <nav className='nav-content'>
   
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/location">Location</NavLink>
      
      <NavLink className="navbar-course">
        <div className="dropdown">
          <span>Course Details</span>
          <ul className="dropdown-menu">
            <li><Link to="/course/land-survey">Land Survey</Link></li>
            <li><Link to="/course/mobile-service">Mobile Service</Link></li>
            <li><Link to="/course/laptop-service">Laptop Service</Link></li>
          </ul>
        </div>
       
    </NavLink>
      <NavLink to="/register">Register</NavLink>


        </nav>

     
        
      
    </div>
  )
}

export default Navbar
