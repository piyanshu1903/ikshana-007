import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './pages/about_us';
import Home from './pages/home';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/about" />} />
      </Routes>
    </Router>
  );
}

export default App;
