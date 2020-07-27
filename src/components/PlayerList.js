import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';
import Player from './Player';

const PlayerList = (props) => {
  return (
    <Consumer>
      { context => (  //implicit return used here
        <React.Fragment>
         {context.map( (player, index) =>
          <Player 
              {...player} //object spread on all player objects {eg name, score, id} and passing all at once as props, so you dont have to explicitly list each prop name and value
              key={player.id.toString()} 
              index={index}
              changeScore={props.changeScore}
              removePlayer={props.removePlayer}           
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
    
  );
}

PlayerList.propTypes = {
  
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;