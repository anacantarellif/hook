
import React from 'react';
import { useTema } from './TemaContexto';
import '../App.css'; 

const ComponentePrincipal = () => {
  const { tema } = useTema();

  return (
    <div className={tema}>
      <h1>Este é o tema {tema}</h1>
      <p>O tema muda quando você clica no botão acima.</p>
    </div>
  );
};

export default ComponentePrincipal;
