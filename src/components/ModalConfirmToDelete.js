import iconAlert from '../assets/warning.gif';
import styled from 'styled-components';
import close from '../assets/x-regular-24.png';

export const ModalConfirmDelete = ({
	message,
	isOpenModal,
	setIsOpenModal,
	confirmDeleteUser,
	currentUser,
}) => {
	const closeModal = () => {
		setIsOpenModal(false);
	};

	const deleteUser = () => {
		confirmDeleteUser();
		setIsOpenModal(false);
	};

	return (
		<>
			{isOpenModal && (
				<Backdrop>
					<ContainerModal>
						<HeadModal>
							<span onClick={closeModal}>
								<img src={close} alt={close} />
							</span>
							<div>
								<img src={iconAlert} alt="icon" width="60px" />
							</div>
						</HeadModal>

						<BodyModal style={{ lineHeight: '2' }}>
							<p style={{ textAlign: 'center' }}>
								{' '}
								{message} <strong>{currentUser.name}</strong>?
							</p>
						</BodyModal>
						<ContainerButtons>
							<button style={{ width: '100%', height: '3rem' }} onClick={closeModal}>
								CANCELAR
							</button>
							<button
								style={{ width: '100%', height: '3rem', backgroundColor: 'green' }}
								onClick={deleteUser}
							>
								ELIMINAR
							</button>
						</ContainerButtons>
					</ContainerModal>
				</Backdrop>
			)}
		</>
	);
};

const ContainerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	& div {
		width: 100%;
	}
	& div:nth-child(1) {
		& button {
			background: #ececec;
			color: gray;
		}
	}
`;

const Backdrop = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	padding: 40px;
	z-index: 99999999999;
	display: grid;
	align-items: center;
	justify-items: center;
`;

const ContainerModal = styled.div`
	z-index: 2;
	background: white;
	width: 380px;
	min-height: 350px;
	height: auto;
	border-radius: 5px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: space-between;
`;

const HeadModal = styled.div`
	display: flex;
	flex-direction: column;

	div {
		text-align: center;
	}

	span {
		width: 30px;
		font-size: 22px;
		align-self: flex-end;
		background: transparent;
		border: none;
		font-weight: bold;
		cursor: pointer;
	}
`;

const BodyModal = styled.div`
	padding-top: 1rem;
	min-height: 60%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	text-align: center;

	& h2 {
		font-size: 1.5rem;
		font-weight: bold;
	}
	& p {
		font-size: 1.2rem;
		margin-top: 1rem;
	}
`;
