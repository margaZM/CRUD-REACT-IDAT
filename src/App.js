import { useState, useEffect } from 'react';
import { FormUsers } from './components/FormUsers';
import { UsersList } from './components/UserList';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './redux/slices/userSlices';

export const App = () => {
	const { users } = useSelector((state) => state.users);
	const [isEdit, setIsEdit] = useState(false);
	const [userToUpdate, setUserToUpdate] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		const readUsers = async () => {
			const existUsers = localStorage.getItem('users');
			const data = existUsers ? JSON.parse(existUsers) : [];
			dispatch(setUsers(data));
		};
		readUsers();
	}, [dispatch]);

	return (
		<Grid>
			<FormUsers setIsEdit={setIsEdit} isEdit={isEdit} userToUpdate={userToUpdate} />
			<UsersList
				users={users}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
				setUserToUpdate={setUserToUpdate}
			/>
		</Grid>
	);
};

const Grid = styled.section`
	display: grid;

	@media (min-width: 1024px) {
		grid-template-columns: 1fr 2fr;
		gap: 20px;
	}
`;
