import { ChangeEvent, useState } from 'react';

import gamesData from './data/games';

import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';

import './App.css';

const App = () => {
  const [selectedGame, setSelectedGame] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
  };

  const handleClick = (game: string) => {
    setSelectedGame(game);
  };

  const filteredGames = gamesData.filter(game => 
    game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Filter 
        games={filteredGames} 
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <Content 
        games={filteredGames} 
        selectedGame={selectedGame}
        handleClick={handleClick} />
    </>
  );
};

export default App;
