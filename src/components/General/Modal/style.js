import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
`;
export const ModalWrapper = styled.div`
	width: 50%;
	background: #fff;
	margin: auto;
	box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.25);
	padding: ${({ theme }) => theme.spacing.large};
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	
	${({ theme }) => theme.media.tablet}{
		width: 90% !important;
		padding: ${({ theme }) => theme.spacing.double(1.5, 1.4)};
	};
	${({ theme }) => theme.media.mobile}{
		width: 90%;
		padding: ${({ theme }) => theme.spacing.double(1.6, 1.5)};
	};
`;
export const ModalContent = styled.div`
	width: 80%;
	margin: auto;
	${({ theme }) => theme.media.tablet}{
		width: 90%;
	};
	${({ theme }) => theme.media.mobile}{
		width: 90%;
	};
`;
export const ModalHeading = styled.h3`
	text-align: center;
	margin-bottom: 18px;
	font-size: ${({ theme }) => theme.fontSize.heading};
	font-weight: 900;
`;

