import React from "react";

import HomeCard from "../components/HomeCard";
import "../style/Home.css";

import { NavLink ,Link} from "react-router-dom";
// Image imports are DEFAULT imports (no curly braces)

import landSurvey2 from"../assets/landSurvey2.jpeg"
import mobilService from "../assets/MobileService.jpeg"
import laptopService from "../assets/laptopService.jpeg"

import {
  Wallet,
  CalendarDays,
  Monitor,
  UsersRound,
  GraduationCap,
  Wrench,
  Award,
  Headset,
} from "lucide-react";
import About from "./About";
import Courses from "./Courses";
import Location from "./Location";
import Register from "./Register"

const courses = [
  {
    id: 1,
    img: landSurvey2,
    headLine: "Land Surveying",
    para: "Learn modern surveying tools and techniques with practical training.",
    link: "/course/land-survey",
  },
  {
    id: 2,
    img: mobilService,
    headLine: "Mobile Servicing",
    para: "Get trained in mobile hardware, software and troubleshooting.",
    link: "/course/mobile-service",
  },
  {
    id: 3,
    img: laptopService,
    headLine: "Laptop Servicing",
    para: "Master laptop hardware, software and repair techniques.",
    link: "/course/laptop-service",
  },
];

const highlights = [
  { id: 1,
     icon: GraduationCap,
      headLine: "Expert Trainers",
       para: "Industry experienced professionals" 
      },
  { id: 2,
     icon: Wrench, 
     headLine: "100% Practical",
      para: "Hands-on training on real devices"
    
    },
  { id: 3,
     icon: Award,
     headLine: "Certification",
     para: "Get recognized with a certificate" 
    },
  { id: 4,

     icon: Headset,
     headLine: "Career Support",
     para: "Placement assistance & guidance" 
    },
];

const whySibi = [
  { id: 1,
     icon: Wallet,
     headLine: "Affordable Fees",
     para: "Quality education at low cost" 
    },
  { id: 2,
     icon: CalendarDays,
     headLine: "Flexible Batches",
     para: "Weekday & Weekend batches" 
    },
  { id: 3,
     icon: Monitor,
    headLine: "Modern Labs",
     para: "Updated tools & real devices" 
    },
  { id: 4,
     icon: UsersRound,
     headLine: "Student Support",
     para: "Guidance for better future" 
    },
];

const Home = () => {
  return (
  <>
     

  <div className="home-container">
        {/* HERO */}
        <section className="home-nav">
          <h2>
            Build Your Skills <br />
            <span>Build Your Future</span>
          </h2>
          <p>Practical Training | Expert Guidance | Better Opportunities</p>
          <div className="nav-button">
            <NavLink to="/courses" className="btn-outline">
                     Explore Courses   
            </NavLink>
           
            <NavLink to="/register" className="btn-primary">Register Now</NavLink>
          </div>
        </section>

        {/* POPULAR COURSES */}
        <section className="home-body">
          <h2>Our Popular Courses</h2>
          <p className="home-sub">Hands-on training for real-world skills</p>
          <div className="home-card-grid">
            {courses.map((item) => (
              <HomeCard
                key={item.id}
                img={item.img}
                headLine={item.headLine}
                para={item.para}
                link={item.link}
              />
            ))}
          </div>
        </section>


         {/* HIGHLIGHT STRIP */}
        <section className="home-body-us">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div className="valBody" key={item.id}>
                <Icon size={30} strokeWidth={1.8} />
                <h3>{item.headLine}</h3>
                <p>{item.para}</p>
              </div>
            );
          })}
        </section>


        {/* WHY CHOOSE SIBI */}
        <section className="home-body-why">
          <h2>Why Choose SIBI?</h2>
          <div className="why-grid">
            {whySibi.map((item) => {
              const Icon = item.icon;
              return (
                <div className="whyBody" key={item.id}>
                  <Icon size={28} strokeWidth={1.8} />
                  <h3>{item.headLine}</h3>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="home-body-register">
          <div className="register-head">
            <h2>Your Skill, Our Mission</h2>
            <p>Join SIBI and turn your passion into a profession.</p>
          </div>
          <NavLink to="/register" className="btn-primary">
          Register Now
          </NavLink>
          
        </section>



      </div>
      
<About/>
<Courses/>
<Location/>
<Register/>

  
  </>
  )
}

export default Home
