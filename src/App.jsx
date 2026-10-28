import React from 'react'
import Home from './Pages/Home'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import About from './Pages/About'

import Register from './Pages/Register'
import Location from './Pages/Location'
import Navbar from './components/Navbar'
import Undefined from './Pages/Undefined'
import Courses from './Pages/Courses'

import CourseDetails from './Pages/CourseDetails'

const App = () => {
  return (
    <>
     <div>
     <Navbar/>
      

      <main>

    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/location' element={<Location/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/courses' element={<Courses/>} />
      <Route path="/course/:courseName" element={<CourseDetails />} />
    
      <Route path='*' element={<Undefined/>} />

    </Routes>
        
      </main>
      <Footer/>
    </div>
    </>
   
  )
}

export default App
