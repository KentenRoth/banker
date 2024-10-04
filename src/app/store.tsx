import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from '../features/gameSlice';
import requestReducer from '../features/requestSlice';

const rootReducer = combineReducers({
	game: gameReducer,
	request: requestReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
