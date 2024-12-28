// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HRHomePage, HRPostJobPage } from './component/HRPage';
import CandidatePage from './component/CandidatePage';
import Login from './component/login';
import Signup from './component/signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hr" element={<HRHomePage />} />
        <Route path="/hr/post-job" element={<HRPostJobPage />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
