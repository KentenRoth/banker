import { Game } from '../../types';

import Players from './players';

interface GameProps {
	games: Game;
}

const Games = (props: GameProps) => {
	return (
		<div>
			<h4>{props.games.name}</h4>
			{props.games.players.map((player) => (
				<Players key={player.id} player={player} />
			))}
		</div>
	);
};

export default Games;
