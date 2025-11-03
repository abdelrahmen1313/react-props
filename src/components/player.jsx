import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({
 player
}) => {
  return (
    <Card className="player-card" >
      <div className="card-media-wrap">
        <Card.Img className="player-image" variant="top" src={player.imageUrl} />
      </div>
      <Card.Body>
        <Card.Title className="player-name">{player.name}</Card.Title>
        <Card.Text className="player-meta">
          <strong>Team:</strong> {player.team}
          <br />
          <strong>Nationality:</strong> {player.nationality}
          <br />
          <strong>Jersey Number:</strong> {player.jerseyNumber}
          <br />
          <strong>Age:</strong> {player.age}
        </Card.Text>
      </Card.Body>
    </Card>

  );
};

export default Player;