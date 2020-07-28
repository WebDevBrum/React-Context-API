import React from 'react';

import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { ({players}) => (  //implicit return used here // before destructuring this was context and fragment used context.players
        <React.Fragment>
         {players.map( (player, index) =>
          <Player 
              {...player} //object spread on all player objects {eg name, score, id} and passing all at once as props, so you dont have to explicitly list each prop name and value, this can now be deleted following destructuring as playerList is no longer responsible for passing player object values to player 
              key={player.id.toString()} 
              index={index}
              
                  
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
    
  );
}



export default PlayerList;