import { useState } from 'react';
import styled from 'styled-components';
import { setNewUser, setUpdateUser } from '../redux/slices/userSlices';
import { useDispatch } from 'react-redux';

export const FormUsers = ({ setIsEdit, isEdit, userToUpdate }) => {
	const [name, setName] = useState(isEdit ? userToUpdate.name : '');
	const [age, setAge] = useState(isEdit ? userToUpdate.age : '');
	const [email, setEmail] = useState(isEdit ? userToUpdate.email : '');
	const [address, setAddress] = useState(isEdit ? userToUpdate.address : '');
	const [dateOfBirth, setDateOfBirth] = useState(isEdit ? userToUpdate.dateOfBirth : '');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name === '' || age === '' || email === '') {
			alert('Todos los campos son obligatorios');
			return;
		}
		const infoForm = {
			id: isEdit ? userToUpdate.id : '',
			name,
			age,
			email,
			address,
			dateOfBirth,
		};

		const existUsers = localStorage.getItem('users');
		if (isEdit) {
			const allUsers = JSON.parse(existUsers);
			const newData = allUsers.filter((user) => user.id !== userToUpdate.id);
			newData.push({ ...infoForm, id: userToUpdate.id });
			localStorage.setItem('users', JSON.stringify(newData));
			dispatch(setUpdateUser(infoForm));
			setIsEdit(false);
		} else {
			const data = existUsers ? JSON.parse(existUsers) : [];
			data.push({ ...infoForm, id: Date.now() });
			localStorage.setItem('users', JSON.stringify(data));
			dispatch(setNewUser({ ...infoForm, id: Date.now() }));
		}

		e.target.reset();
		setName('');
		setAge('');
		setEmail('');
		setAddress('');
		setDateOfBirth('');
	};

	return (
		<Container>
			<ContainerForm>
				<h1>{isEdit ? 'Editar Usuario' : 'Agregar Usuario'}</h1>
				<form action="" onSubmit={handleSubmit}>
					<Grid>
						<Input
							type="text"
							placeholder="Nombre"
							onChange={(e) => setName(e.target.value)}
							name="name"
							value={name}
						/>
						<Input
							type="text"
							placeholder="Edad"
							onChange={(e) => setAge(e.target.value)}
							name="age"
							value={age}
						/>
						<Input
							type="address"
							placeholder="Dirección"
							onChange={(e) => setAddress(e.target.value)}
							name="address"
							value={address}
						/>
						<Input
							type="date"
							placeholder="Fecha de nacimiento"
							onChange={(e) => setDateOfBirth(e.target.value)}
							name="dateOfBirth"
							value={dateOfBirth}
						/>
						<Input
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							value={email}
						/>
					</Grid>
					<Button type="submit"> {isEdit ? 'Guardar cambios' : 'Registrar'}</Button>
				</form>
			</ContainerForm>
		</Container>
	);
};

const Grid = styled.section`
	padding: 0;
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 20px;
	& input:nth-child(5) {
		grid-column: 1/3;
	}
`;

const Container = styled.section`
	display: grid;
	align-items: center;
`;

const ContainerForm = styled.section`
	border-radius: 10px;
	max-width: 500px;
	margin: 0 auto;
	margin-top: 10px;
	line-height: 1.5;
	padding: 1.5rem;
	background: white;
	& h1 {
		text-align: center;
		text-transform: uppercase;
		color: green;
		font-size: 2rem;
	}
`;

const Input = styled.input`
	background-color: #e5e5e5;
	outline: none;
	max-width: 100%;
	border: none;
	border-radius: 5px;
	padding: 1rem;
	&::placeholder {
		color: gray;
	}
`;
const Button = styled.button`
	font-size: 1.5rem;
	height: 50px;
	background-color: green;
	border-radius: 5px;
	border: none;
	width: 100%;
	cursor: pointer;
	margin-top: 1rem;
	color: white;
`;
