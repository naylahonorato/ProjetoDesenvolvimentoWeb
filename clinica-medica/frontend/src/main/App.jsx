import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/Navbar';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AdminPage from '../pages/AdminPage';
import AppointmentPage from '../pages/AppointmentPage';
import ProtectedRoute from '../pages/ProtectedRoute';

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
      path="/admin" 
      element={
        <ProtectedRoute>
          <AdminPage />
        </ProtectedRoute>
      } 
      />
      <Route 
      path="/appointments" 
      element={
        <ProtectedRoute>
          <AppointmentPage />
        </ProtectedRoute>
    } 
      
      />
      <Route path="/" element={<LoginPage />} />  {/* Redireciona para login por padrão */}
      <Route path="*" element={<h2>404 Not Found</h2>} />  {/* Rota para páginas não encontradas */}
    </Routes>
  </Router>
);

export default App;




