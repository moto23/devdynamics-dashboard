import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt,  faUser, faUserPlus, faBell, faMoon, faSun,faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';


const Navbar: React.FC = () => {
  const [isSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setShowButton(!showButton);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <>
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}></div>
      <div className="topbar">

        <div className="profile">
          <button className="dark-mode-button" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
          <FontAwesomeIcon icon={faBell} style={{ cursor: 'pointer' }} />
      <FontAwesomeIcon icon={faUser} style={{ color: 'blue', cursor: 'pointer' }} />
      
        </div>
        
      </div>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-brand">
      
        <FontAwesomeIcon icon={faTachometerAlt} className="logo" /> DevDynamics
      
    </div>
        <ul className="sidebar-nav">
          <li className="nav-item"><Link to="/" className="nav-link"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Link></li>
          <li className="nav-item"><Link to="/companies" className="nav-link"><FontAwesomeIcon icon={faBuilding} /> Companies</Link></li>
          <li className="nav-item"><Link to="/signup" className="nav-link"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Link></li>
          <div className="help" style={{ cursor: 'pointer' }}>Need Help? Contact</div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
