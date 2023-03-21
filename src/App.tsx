import './App.css';

import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal'
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import { LoginPage } from './pages/Login';
import Navbar from './pages/Navbar';
import PharmDutiesPage from './pages/PharmDuties';
import { RegisterPage } from './pages/Register';
import Vaccinations from './pages/Vaccinations';
import FontStyles from './theme/fonts';
import { AppointmentsPage } from './pages/Appointments';
import { NewAppointmentPage } from './pages/NewAppointment';


const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="Theme">
      <ModalProvider>
      <BrowserRouter>
        <FontStyles />
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='home' element={<HomePage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='pharmduties' element={<PharmDutiesPage/>}/>
            <Route path='appointments' element={<AppointmentsPage/>}/>
            <Route path='newappointment' element={<NewAppointmentPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='vaccinations' element={<Vaccinations/>}/>
          </Routes>
      </BrowserRouter>
      </ModalProvider>
    </div>
   </QueryClientProvider>
  )
}

export default App;
