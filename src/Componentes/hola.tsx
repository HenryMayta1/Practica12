import React, { useState, useEffect } from 'react';

interface HolaProps {
  onSearch: (word: string, text: string) => void;
}

const Hola: React.FC<HolaProps> = ({ onSearch }) => {
  const [word, setWord] = useState('');
  const [text, setText] = useState('');

  // Validación automática
  useEffect(() => {
    if (word && text) {
      onSearch(word, text);
    }
  }, [word, text, onSearch]);

  // Evita espacios en la palabra
  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Solo permite una palabra sin espacios
    if (!input.includes(' ')) {
      setWord(input);
    }
  };

  return (
    <div className="hola-container">
      <h2>Buscador Automático</h2>

      <div className="input-group">
        <label>
          Palabra:
          <input
            type="text"
            value={word}
            onChange={handleWordChange}
            placeholder="Escribe una sola palabra"
          />
        </label>
      </div>

      <div className="input-group">
        <label>
          Texto:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe el texto completo"
          />
        </label>
      </div>
    </div>
  );
};

export default Hola;
