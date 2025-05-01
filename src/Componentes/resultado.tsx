import React from 'react';

interface ResultadoProps {
  word: string;
  found: boolean;
}

const Resultado: React.FC<ResultadoProps> = ({ word, found }) => {
  return (
    <div className="resultado-container">
      <h3>Palabra encontrada:</h3>
      {found ? (
        <p>si</p>
      ) : (
        <p>no</p>
      )}
    </div>
  );
};

export default Resultado;
