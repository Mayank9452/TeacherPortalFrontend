// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { StudentProvider } from './context/StudentContext'; // Import the provider

function App() {
  return (
    <StudentProvider> {/* Wrap the app with the StudentProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
