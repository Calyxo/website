import React from 'react';
import './App.css';
import "./Success.css";
import face from "./assets/face.jpg";
import Success from "./Success.js";

function App() {
  return (
    <div className="App">

    <div className="app-header">
    <a href="#about" className="nav-link">About </a> <br/>
    <a href="#success" className="nav-link">Success stories</a> <br/>
    <a className="nav-link">Contact</a> <br/>
    </div> 

    <div className="inside"> 
    <section id="about">
    <p className="hello">[ Hello Stranger]</p>
    <p className="hello-text">I am Neele. Nice to meet you! <br/>
    Have a look around if you would like to get to know me better.</p>
    <img className="neele-face" src={face} alt="neele"/>
    </section>

    <section id="success-stories">
    <Success>
    </Success>
    </section>
   

    </div>

    </div>
  
  );
}

export default App;
