import React from 'react';

import {Consumer} from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { context => (  //implicit return used here
        <React.Fragment>
         {context.players.map( (player, index) =>
          <Player 
              {...player} //object spread on all player objects {eg name, score, id} and passing all at once as props, so you dont have to explicitly list each prop name and value
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