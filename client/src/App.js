import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CMSPage from './CMSPage';
import LandingPage from './LandingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cms" element={<CMSPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
