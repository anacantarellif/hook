
import React from 'react';
import { useTema } from './TemaContexto';

const AlternarTema = () => {
  const { tema, alternarTema } = useTema();

  return (
    <button onClick={alternarTema}>
      Alternar para o tema {tema === 'claro' ? 'escuro' : 'claro'}
    </button>
  );
};

export default AlternarTema;
