import React from 'react';
import { Container, ModalWrapper, ModalContent, ModalHeading } from './style';

const Modal = ({ modalHeading = "", children }) => {
	return (
		<Container>
			<ModalWrapper>
				<ModalHeading>{modalHeading}</ModalHeading>
				<ModalContent>
					{children}
				</ModalContent>
			</ModalWrapper>
		</Container>
	);
}

export { Modal };