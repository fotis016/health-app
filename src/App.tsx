import React from 'react'
import FontStyles from './theme/fonts'
import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import PharmDutiesPage from './pages/PharmDuties'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import Navbar from './pages/Navbar'
import Vaccinations from './pages/Vaccinations'


const App = () => {
  return (
    <div className="Theme">
      <BrowserRouter>
        <FontStyles />
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='pharmduties' element={<PharmDutiesPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='vaccinations' element={<Vaccinations/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
