import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import instance from '../axios/axios';

import { Requests } from '../types';

type InitialState = {
	requests: Requests[];
	loading: boolean;
	error: string | null;
};

const initalState: InitialState = {
	requests: [],
	loading: false,
	error: null,
};

export const fetchRequests = createAsyncThunk('requests', async () => {
	const response = await instance.get('/requests');
	return response.data;
});

export const requestSlice = createSlice({
	name: 'request',
	initialState: initalState,
	extraReducers: (builder) => {
		builder.addCase(fetchRequests.pending, (state) => {
			state.loading = true;
			state.error = null;
		});
		builder.addCase(
			fetchRequests.fulfilled,
			(state, action: PayloadAction<Requests[]>) => {
				state.loading = false;
				state.requests = action.payload;
				state.error = null;
			}
		);
		builder.addCase(fetchRequests.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || null;
		});
	},
	reducers: {
		createRequest: (state, action: PayloadAction<Requests>) => {
			state.requests.push(action.payload);
		},
	},
});

export const { createRequest } = requestSlice.actions;
export default requestSlice.reducer;
