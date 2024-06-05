import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import SignUp from './pages/SignUp';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" component={Settings} />
        <Route path="/signup" component={SignUp} />
      </Routes>
    </Router>
  );
};

export default App;
