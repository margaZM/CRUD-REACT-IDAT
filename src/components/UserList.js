import { User } from './User';
import { Empty } from './Empty';
import styled from 'styled-components';

export const UsersList = ({ users, isEdit, setIsEdit, setUserToUpdate }) => {
	return (
		<Container>
			<h1>Usuarios registrados:</h1>
			<section>
				{users.length > 0 ? (
					users.map((user) => (
						<User
							key={user.id}
							user={user}
							isEdit={isEdit}
							setIsEdit={setIsEdit}
							setUserToUpdate={setUserToUpdate}
						/>
					))
				) : (
					<Empty />
				)}
			</section>
		</Container>
	);
};

const Container = styled.section`
	border-radius: 10px;
	margin-top: 10px;
	padding: 1rem;
	background: #e5e5e5;
	min-height: 90vh;
	& h1 {
		text-align: center;
		text-transform: uppercase;
		color: green;
		font-size: 1.5rem;
	}
`;
