import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;
