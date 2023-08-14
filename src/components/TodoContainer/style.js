import styled from 'styled-components';

export const StyledHeader = styled.div`
  	padding: 20px 0;
	line-height: 2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
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

