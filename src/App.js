import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Signup from './component/signup';
import HRPage from './component/HRPage';
import EmployeePage from './component/EmployeePage';
import CandidatePage from './component/CandidatePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hr" element={<HRPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/candidate" element={<CandidatePage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
