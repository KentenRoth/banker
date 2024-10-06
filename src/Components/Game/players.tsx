import { Player } from '../../types';

interface PlayersProps {
	player: Player;
}

const Players = (props: PlayersProps) => {
	return (
		<div>
			<p>User: {props.player.username} </p>
			<p>Piece: {props.player.piece}</p>
			<p>Money: {props.player.money}</p>
		</div>
	);
};

export default Players;
