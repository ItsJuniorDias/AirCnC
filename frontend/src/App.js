import React from 'react';
import './App.css';


import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  //State informação armazenada em algum componente
  //Componentização função que me retorna HTML
  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      
      <div className="content">
        <Routes/>
        
      </div>
    </div>

  );
}

export default App;
