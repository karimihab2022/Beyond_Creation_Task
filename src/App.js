import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

import "antd/dist/antd.css";
import React, { useRef, useState } from "react";




function App() {
 
  return (
    <div className="App">
      <Header/>
     <Section1/>
     <Section2/>

     
 

    </div>
  );
}

export default App;
