import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Companies from './pages/Companies';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/companies" element={<Companies/>} />
      </Routes>
    </Router>
  );
};

export default App;
