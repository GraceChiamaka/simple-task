import styled from 'styled-components';

export const StyledHeader = styled.div`
  	padding: ${({ theme }) => theme.spacing.double(1.5, 0)};
	line-height: ${({ theme }) => theme.spacing.large};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${({ theme }) => theme.spacing.medium};
	h1{
		font-weight: 900;
		
	}
	${({ theme }) => theme.media.tablet}{
		h1{
			font-size: 2rem;
		}
	};
	${({ theme }) => theme.media.mobile}{
		flex-direction: column;
		h1 {
			margin-bottom: 1rem;
		}
	};
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${({ theme }) => theme.spacing.large};
	${({ theme }) => theme.media.mobile}{
		flex-direction: column;
		button{
			margin-bottom: ${({ theme }) => theme.spacing.medium};
		}
	};
`;

export const FormContainer = styled.form`
  	display: flex;
	width: 100%;
	flex-direction: column;
`;
export const FormItem = styled.div`
  margin-bottom:${({ theme }) => theme.spacing.normal};
`;

