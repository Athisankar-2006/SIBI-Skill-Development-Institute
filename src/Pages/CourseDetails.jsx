import React from 'react'
import { useParams } from 'react-router-dom'
import LandSurvey from '../components/LandSurvey'
import LaptopService from '../components/LaptopService'
import MobileService from '../components/MobileService'




const CourseDetails = () => {

  const { courseName } =useParams();

  const renderCourse=()=>{
    switch (courseName){
      case "land-survey":
        return <LandSurvey/>
      case "mobile-service":
        return <MobileService/>
      case "laptop-service":
        return <LaptopService/>
      default:
        return <h2>Course Not Found</h2>
    }

  }

  return (
    <>
     <div>{renderCourse()}</div>;
    </>
   
  )
}

export default CourseDetails
