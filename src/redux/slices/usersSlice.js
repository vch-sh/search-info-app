import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "./errorSlice";
import { createUserWithID } from "../../components/utils/createUserWithID";

const initialState = [];

export const fetchUsers = createAsyncThunk(
	'users/fetchUsers',
	async (url, thunkAPI) => {
		try {
			const res = await fetch(url);
			const usersData = await res.json();
			if (usersData.users.length > 0) {
				const randomIndex = Math.floor(Math.random() * usersData.users.length);
				const randomUser = usersData.users[randomIndex];
				thunkAPI.dispatch(addUser(createUserWithID(randomUser)));
			}
		} catch (error) {
			thunkAPI.dispatch(setError(error.message));
			return thunkAPI.rejectWithValue(error);
		}
	}
)

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
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			return action.payload;
		}); 
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