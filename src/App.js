import styles from './App.css';
import React, { useState } from 'react';

import Terminal from'./Terminals/Terminal'
import About from './Components/About/About';
import ContactMe from './Components/ContactMe/ContactMe';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Terminal');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Terminal') {
        return <Terminal />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'Experience') {
        return <Experience />;
      }
      return <ContactMe />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <Terminal currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }