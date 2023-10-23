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
		},
		sortAscending: (state) => {
			state.sort((a, b) => {
				const nameA = a.firstName.toUpperCase();
				const nameB = b.firstName.toUpperCase();
				
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}

				return 0;
			});
		}
	}
});

export const { 
	addUser, 
	clearTheList, 
	deleteUser,
	sortAscending
} = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;