
import React, { createContext, useState, useContext } from 'react';

const TemaContexto = createContext();

export const useTema = () => useContext(TemaContexto);

export const ProvedorTema = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};
