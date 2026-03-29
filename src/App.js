import React from 'react';
import './App.css';
import { Navigate } from "react-router-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import  Login  from './Pages/Login';
import  Dashboard  from './Pages/Dashboard';
import  Profile  from './Pages/Profile';
import  NotFound  from './Pages/NotFound';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } />
    <Route path="/profile" element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    } />

    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
