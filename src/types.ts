export interface Game {
	id: number;
	name: string;
	created_by_id: number;
	created_at: string;
	players: Player[];
}

export interface Player {
	id: number;
	user_id: number;
	game_id: number;
	role: string;
	money: number;
	properties: string;
	piece: string;
	created_at: string;
	username?: string;
}

export interface Requests {
	id: number;
	sending_player_id: number;
	receiving_player_id: number;
	request_type: string;
	status: string;
	created_at: string;
}
