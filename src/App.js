import React from 'react';
import Home from './components/Home.js';
import NeChiro from './components/NeChiro.js';
import Portfolio from './components/Portfolio.js';
import DogWithin from './components/DogWithin.js';
import NuCamp from './components/NuCamp.js';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
