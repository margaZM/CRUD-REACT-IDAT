import styled from 'styled-components';
import { setDeleteUser } from '../redux/slices/userSlices';
import { useDispatch } from 'react-redux';

export const User = ({ isEdit, user, setIsEdit, setUserToUpdate }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		const existUsers = localStorage.getItem('users');
		try {
			const allUsers = JSON.parse(existUsers);
			const newData = allUsers.filter(
				(userLocalStorage) => userLocalStorage.id !== user.id,
			);
			localStorage.setItem('users', JSON.stringify(newData));
			dispatch(setDeleteUser(user));
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = () => {
		setIsEdit(true);
		setUserToUpdate(user);
	};

	return (
		<Container key={user.id} className="container">
			<div>
				<h4>{user.name}</h4>
				<p>
					<Subtitle>Edad:</Subtitle> {user.age}
				</p>
				<p>
					<Subtitle>Email:</Subtitle> {user.email}
				</p>
				<p>
					<Subtitle>Dirección:</Subtitle> {user.address}
				</p>
				<p>
					<Subtitle>Fecha de nacimiento:</Subtitle> {user.dateOfBirth}
				</p>
			</div>
			<div>
				<button type="button" onClick={handleUpdate}>
					Editar
				</button>
				<button type="button" onClick={handleDelete}>
					Eliminar
				</button>
			</div>
		</Container>
	);
};

const Container = styled.section`
	border-radius: 10px;
	margin-top: 10px;
	padding: 0.5rem 1rem;
	background: white;
	line-height: 0.5;
	display: grid;
	grid-template-columns: 1fr 100px;
	align-items: center;
	justify-content: center;
	:hover {
		box-shadow: 0px 0px 4px 1px rgb(80, 80, 80);
	}

	& h4 {
		font-size: 20px;
	}
	& button {
		width: 80px;
		margin-bottom: 15px;
		border: none;
		border-radius: 5px;
		height: 30px;
		cursor: pointer;
		background: #828282;
		color: white;
		font-weight: bold;
		:hover {
			opacity: 0.8;
			filter: alpha(opacity=90);
		}
	}
`;

const Subtitle = styled.span`
	font-weight: bold;
`;
