
import React, { createContext, useState, useContext } from 'react';

const TemaContexto = createContext();

export const ProvedorTema = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((tema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};
