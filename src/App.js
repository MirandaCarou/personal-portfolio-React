import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Education} from './components/Education';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;
