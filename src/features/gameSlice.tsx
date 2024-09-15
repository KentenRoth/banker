import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import instance from '../axios/axios';

import { Player, Game } from '../types';

type InitialState = {
	games: Game[];
	loading: boolean;
	error: string | null;
};

const initalState: InitialState = {
	games: [],
	loading: false,
	error: null,
};

export const fetchMyGames = createAsyncThunk('game/fetchMyGames', async () => {
	const response = await instance.get('/games');
	return response.data;
});

export const gameSlice = createSlice({
	name: 'game',
	initialState: initalState,
	extraReducers: (builder) => {
		builder.addCase(fetchMyGames.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(
			fetchMyGames.fulfilled,
			(state, action: PayloadAction<Game[]>) => {
				state.loading = false;
				state.games = action.payload;
				state.error = null;
			}
		);
		builder.addCase(fetchMyGames.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || null;
		});
	},
	reducers: {},
});

export default gameSlice.reducer;
