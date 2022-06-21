import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume'

function App() {

  const [ currentPage, setCurrentPage ] = useState('about');

  const renderPage = () => {
    if (currentPage === 'project') {
      return <Project />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'resume') {
      return <Resume />
    }
    return <Contact />;    
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Header><Navigation currentPage={currentPage} handlePageChange={handlePageChange} /></Header>
   
    {renderPage()}
    <Footer></Footer>
  </div>



   
  );
}
  

export default App;
