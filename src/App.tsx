import React, { useState } from 'react';
import Hola from './Componentes/hola';
import Resultado from './Componentes/resultado';
import './App.css';

const App: React.FC = () => {
  const [searchData, setSearchData] = useState<{
    word: string;
    found: boolean;
  } | null>(null);

  const handleSearch = (word: string, text: string) => {
    const words = text.split(/\s+/).filter(w => w);
    const sortedWords = [...words].sort();
    const found = binarySearch(word, sortedWords);

    setSearchData({ word, found });
  };

  const binarySearch = (word: string, words: string[]): boolean => {
    let start = 0;
    let end = words.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const current = words[mid];
      if (current === word) return true;
      if (current < word) start = mid + 1;
      else end = mid - 1;
    }

    return false;
  };

  return (
    <div className="app">
      <Hola onSearch={handleSearch} />
      {searchData && (
        <Resultado word={searchData.word} found={searchData.found} />
      )}
    </div>
  );
};

export default App;
