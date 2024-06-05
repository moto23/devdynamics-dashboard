import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
// import Integrations from './pages/Integrations';
// import Settings from './pages/Settings';
// import Account from './pages/Account';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import ResetPassword from './pages/ResetPassword';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/integrations" element={<Integrations />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
