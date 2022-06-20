import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Project';
import Resume from './components/Resume'

function App() {

  const [categories] = useState([
    {
      name: '',
      description: '',
    },
    { name: '', description: '' },
    { name: '', description: '' },
    { name: '', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Navigation>
      <main>
        <About></About>
        <Projects currentCategory={currentCategory}></Projects>
        <Resume></Resume>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
