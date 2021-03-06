import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Resume from './components/Resume'

function App() {

  const [ currentPage, setCurrentPage ] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <Contact />;    
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      <header>
    <div>
      <a href='/'>Jacob Reeder</a>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
    </div>
    </header>
    <main>
      <div>
    {renderPage()}
    </div>
    </main>
    <Footer></Footer>
  </div>
  

  );
}
  

export default App;
