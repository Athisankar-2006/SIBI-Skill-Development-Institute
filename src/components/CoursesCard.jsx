import React from 'react'



const CoursesCard = (props) => {
  return (
    <div className='courses-cards'>

        <div className="courses-image">
            <img src={props.image} alt="image not available" style={{height:"800px",height: "200px"}}/>
        </div>

        <div className="course-body">
            <h2>{props.name}</h2>
            <ul>
                {props.features.map((feature,index)=>(
                    <li key={index}>{feature}</li>
                ))}
                
                
            </ul>
        </div>

        <div className="course-details">
            <div className="duration">
               <p>Duration</p>
               <p>{props.duration}</p>
            </div>
            <div className="fees">
               <p>Fees</p>
               <p>{props.fees}</p>
            </div>
            <button>View details</button>
        </div>
      
    </div>
  )
}

export default CoursesCard
