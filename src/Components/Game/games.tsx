import { Game } from '../../types';

import Players from './players';

interface GameProps {
	games: Game;
}

const Games = (props: GameProps) => {
	return (
		<div className="games-card">
			<h3>{props.games.name}</h3>
			{props.games.players.map((player) => (
				<Players key={player.id} player={player} />
			))}
		</div>
	);
};

export default Games;
