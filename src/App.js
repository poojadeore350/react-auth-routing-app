import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  Login  from './Pages/Login';
import  Dashboard  from './Pages/Dashboard';
import  Profile  from './Pages/Profile';
import  NotFound  from './Pages/NotFound';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
  <BrowserRouter>
  <Routes>
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
