import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
