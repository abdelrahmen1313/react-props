import Player from './player.jsx';
import {players} from '../players.js';

function PlayersList()  {
  return (
    <div className='grid-wrapper'>
    <div className="players-grid">
      {players.map((player) => (
        <Player key={player.name} player={player} />
      ))}
    </div>
    </div>
  );
};

export default PlayersList;