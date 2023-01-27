import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Student } from './features/student/Student';
import Diamond from './models/Diamond';
import { CalcDiamonds } from './features/diamonds/CalcDiamonds';
import Showdiamonds from './features/diamonds/Showdiamonds';
import CrudDiamonds from './features/diamonds/CrudDiamonds';

function App() {
  return (
    <div className="App">
      <header>
        {/* <Student></Student> */}
        <CrudDiamonds/>
        <Showdiamonds/>
        <CalcDiamonds/>
        
      </header>
    </div>
  );
}

export default App;
