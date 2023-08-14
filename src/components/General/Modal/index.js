import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Container, ModalWrapper, ModalContent, ModalHeading } from './style';

const Modal = ({ children }) => {
	const { isEditing } = useContext(AppContext);
	return (
		<Container>
			<ModalWrapper>
				<ModalHeading>Please {isEditing ? "update" : "add"} to-dos item(s) through the input field</ModalHeading>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalWrapper>
		</Container>
	);
}

export { Modal };