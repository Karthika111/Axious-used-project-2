// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import UserProfilesPage from './components/UserProfilesPage';
import UserProfileDetailPage from './components/UserProfileDetailPage'; // Import the UserProfileDetailPage
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/profiles" element={<UserProfilesPage />} />
        <Route path="/profile/:id" element={<UserProfileDetailPage />} /> {/* User profile detail page route */}
      </Routes>
    </Router>
  );
};

export default App;
