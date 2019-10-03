import React, {useState} from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {
  //State informação armazenada em algum componente
  //Componentização função que me retorna HTML
  const [email, setEmail] = useState('');

  async function handleSubmit(event){
     //email
     event.preventDefault();

    const response = await  api.post('/sessions', { email });

    const { _id } = response.data;
    
    localStorage.setItem('user', _id);

  }


  return (
    <div className="container">
      <img src={logo} alt="AirCnc"/>
      
      <div className="content">
        <p>
          Ofereça <strong> Spots </strong> para programadores e encontre <strong> Talentos</strong> para sua empresa.
          </p> 

          <form onSubmit={handleSubmit}>
            < label htmlFor="email"> E-MAIL*</ label>
            <input 
             type="email" 
             id="email" 
             placeholder="Seu melhor e-mail"
             value = {email} 
             onChange = {event => setEmail(event.target.value)}
             />

             <button className="btn" type="submit"> Entrar </button>
            </form>
      </div>
    </div>

  );
}

export default App;
