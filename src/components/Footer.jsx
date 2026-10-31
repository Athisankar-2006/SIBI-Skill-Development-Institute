import React from 'react'
import "../App.css"
import sibilogo from "../assets/sibilogo.png"
import { NavLink,Link } from 'react-router-dom'
import {
  MapPinHouse,
  PhoneCall,
  MailPen,
  Clock,

} from "lucide-react"

const Footer = () => {
  return (
    <>
     <div className='footer-container'>


         <div className="logo-footer">
            <img src={sibilogo} alt="logo" />
            <div className="logo-text-footer">
           <h2 id='text-sibi'>SIBI </h2>
           <p><span>SKILL DEVELOPMENT INSTITUTE</span></p>

           <h5>Learn | Practice | Grow</h5>
           </div>
        </div>


      
      <div className="Quick-links-footer">
        <h2>Quick Links</h2>
        <div className="link-container-footer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/location">Location</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
        
      </div>


      <div className='contectus-container-footer'>

        <h2>Contect Us</h2>

        <div className="address-footer">
          <p><span><MapPinHouse size={18} strokeWidth={2}/></span> 123,mainroad,your city,12345</p>
          <p><span><PhoneCall size={18} strokeWidth={2}/></span> +9878267316</p>
          <p><span><MailPen size={18} strokeWidth={2}/></span> athisankar@gmail.com</p>
          <p><span><Clock size={18} strokeWidth={2}/></span> Mon-Sat : 9.00 AM - 6.00 PM</p>
        </div>

        <div className="media-footer">
          <span>insta logo</span>
          <span>whatsapp logo</span>
        </div>
      </div>




    </div>
    </>
   
  )
}

export default Footer
