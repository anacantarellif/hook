
import './App.css';
import React from 'react';
import { ProvedorTema } from './components/TemaContexto';
import Tema from './components/AlternarTema';

function App() {
  return (
    <div className="App">
      <ProvedorTema>
        <Tema></Tema>
      </ProvedorTema>
    </div>
  );
}



// App.js



export default App;

