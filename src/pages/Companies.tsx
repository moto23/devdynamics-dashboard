
import React from 'react';
import './Companies.css';

const companies = [
  { name: 'Infosys', description: 'A global leader in next-generation digital services and consulting.' },
  { name: 'TCS', description: 'A global leader in IT services, consulting & business solutions with a large network of innovation & delivery centers.' },
  { name: 'Atlassian', description: 'A leading provider of collaboration, development, and issue tracking software for teams.' },
  
];

const Companies: React.FC = () => {
  return (
    <div className="companies-container">
      <h1>Companies</h1>
      <div className="companies-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
           
            <h2>{company.name}</h2>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
