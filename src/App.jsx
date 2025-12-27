import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/work.jsx'
import Contact from './pages/Contact.jsx'
const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      



    </div>
  )
}

export default App