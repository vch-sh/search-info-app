import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
		},
		clearTheList: () => {
			return initialState;
		},
		deleteUser: (state, action) => {
			return state.filter((user) => user.id !== action.payload);
		}
	}
});

export const { addUser, clearTheList, deleteUser } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;