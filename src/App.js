import React from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Project';
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
