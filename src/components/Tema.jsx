
import React, { useContext } from 'react';
import TemaContexto from "./TemaContexto"
import "./style.css"

const Tema = () => {
  const { tema, alternarTema } = useContext(TemaContexto);

  return (
    <div className={`containe ${tema}`}>
      <h1>componente</h1>
      <button onClick={alternarTema}> Alternar para o tema </button>
    </div>
  );
};

export default Tema;
