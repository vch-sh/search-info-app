import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	errorMessage: [],
	errorDate: []
};

const errorSlice = createSlice({
	name: 'error',
	initialState,
	reducers: {
		setError: (state, action) => {
			state.errorMessage.push(action.payload);
			state.errorDate.push(new Date());
		},
	}
});

export const { setError } = errorSlice.actions;

export const selectError = (state) => state.error;

export default errorSlice.reducer;