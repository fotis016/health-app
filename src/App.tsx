import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import { LoginPage } from './pages/Login';
import Navbar from './pages/Navbar';
import PharmDutiesPage from './pages/PharmDuties';
import { RegisterPage } from './pages/Register';
import Vaccinations from './pages/Vaccinations';
import FontStyles from './theme/fonts';

const App = () => {
  return (
    <div className="Theme">
      <BrowserRouter>
        <FontStyles />
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='pharmduties' element={<PharmDutiesPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='vaccinations' element={<Vaccinations/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
