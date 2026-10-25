import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({img,headLine,para,link}) => {
  return (
    <>
       <div className="home-card">
        
            <div className="home-img">
            <img src={img} alt="image not found" />
        </div>
        <div className="home-content">
            <h2>{headLine}</h2>
            <p>{para}</p>
            <Link to={link}>Learn More</Link>
           
        </div>
       </div>

      
    
    </>
  )
}

export default HomeCard
