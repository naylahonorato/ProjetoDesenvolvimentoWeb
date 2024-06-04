import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from '../components/LandingPage';
import LoginPage from '../components/LoginPage';
import RegisterPage from '../components/RegisterPage';
import AdminPage from '../components/AdminPage';
import AppointmentPage from '../components/AppointmentPage';


function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/appointments" element={<AppointmentPage />} />

            </Routes>
                
            
        </Router>
    );
}

export default App;

    
    