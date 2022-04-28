import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, { payload }) => {
			state.users = payload;
		},
		setNewUser: (state, { payload }) => {
			return {
				...state,
				users: [payload, ...state.users],
			};
		},
		setDeleteUser: (state, { payload }) => {
			state.users = state.users.filter((item) => item.id !== payload.id);
		},
		setUpdateUser: (state, { payload }) => {
			state.users = state.users.map((item) => {
				if (item.id === payload.id) {
					return (item = payload);
				}
				return item;
			});
		},
	},
});

export const { setUsers, setNewUser, setDeleteUser, setUpdateUser } = usersSlice.actions;

export default usersSlice.reducer;
