import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../features/gameSlice';
import requestSlice from '../features/requestSlice';

export const store = configureStore({
	reducer: {
		game: gameReducer,
		request: requestSlice,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
