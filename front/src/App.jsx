import './App.css'
import { Navbar } from './components/primary'
import {  Appointments, NotFound, Home, Login, Profile,Register} from './views'
import { Routes, Route } from 'react-router-dom'
//Apointment -> detail ( ) ./views 
//profile - User information 

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>

    </div>

  )
}

export default App
// <Route path="/appointments/:id" element={<Appointment />} />