export interface Game {
	id: number;
	name: string;
	created_by_id: number;
	created_at: string;
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
}
