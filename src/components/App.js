import React from 'react';

import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';



//this was refactored from a class after adding provider to context/index.js (as its now stateless)

const App = () => {
  

  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />
      <AddPlayerForm  />
    </div>
      
    );
  
}

export default App;
