import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import Courses from './Pages/Courses'
import CoursesDetail from './Pages/CoursesDetail'
import Cohort2 from './Pages/Cohort2'
import PageNotFound from './Pages/PageNotFound'
import AnyCourse from './Pages/AnyCourse'
import Bootcamp from './Pages/Bootcamp'
import BootcampDetail from './Pages/BootcampDetail'


const App = () => {
  return (
    <div className='p-8'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/detail' element={<CoursesDetail />} />
        <Route path='/courses/:id' element={<Cohort2 />} />
        <Route path='/courses/:id/instructor' element={<AnyCourse />} />
        <Route path='/*' element={<PageNotFound />} />
        <Route path='/bootcamp' element={<Bootcamp />}>
          <Route path=':id' element={<BootcampDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
