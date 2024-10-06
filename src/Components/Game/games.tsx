import React from 'react';
import { Game } from '../../types';

interface Games {
	games: Game;
}

const Games = (props: Games) => {
	return (
		<div>
			<h4>{props.games.name}</h4>
			{props.games.players.map((player) => (
				<div key={player.id}>{player.username}</div>
			))}
		</div>
	);
};

export default Games;
