import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		filter: filterReducer
	}
});

export default store;