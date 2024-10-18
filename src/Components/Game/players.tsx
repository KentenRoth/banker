import { Player } from '../../types';

interface PlayersProps {
	player: Player;
}

const Players = (props: PlayersProps) => {
	return (
		<div className="players-details">
			<p className="players-details_user">
				<span>User: </span> {props.player.username}{' '}
			</p>
			<p className="players-details_piece">
				<span>Piece: </span> {props.player.piece}
			</p>
			<p className="players-details_money">
				<span>Money: </span> {props.player.money}
			</p>
		</div>
	);
};

export default Players;
