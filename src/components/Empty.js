import styled from 'styled-components';
import fileEmpty from '../assets/carpeta-vacia.png';

export const Empty = () => {
	return (
		<Container>
			<img src={fileEmpty} alt={fileEmpty} />
			<p>No hay usuarios agregados... </p>
		</Container>
	);
};

const Container = styled.section`
	text-align: center;
	font-size: 20px;
	& img {
		width: 15%;
	}
`;
