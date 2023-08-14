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

export const StyledTodoItem = styled.li`
	list-style-type: none;
	padding: 17px 0px;
	border-bottom: 1px solid #eaeaea;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	${({ theme }) => theme.media.mobile}{
		flex-direction: column;
		align-items: flex-start;
	};
`;

export const TodoTitle = styled.div`
  display:flex;
  gap: 10px;
  align-items: center;
`;

export const TodoContent = styled.div`
	display: flex;
	gap: 32px;
	flex: 1 auto;
	align-items: center;
	${({ theme }) => theme.media.mobile}{
		flex: 0;
		gap: 12px;
		width: 100%;
		margin-bottom: 10px;
		flex-direction: column;
	};
`;

export const StyledTaskItem = styled.div`
	margin-bottom: 3rem;
	max-height: 500px;
	overflow-y: auto;
	padding: 0 1rem 0;
	&::-webkit-scrollbar{
		width: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: #1f1f1f;
	}

	&::-webkit-scrollbar-track {
		background: #eaeaea;
	}
`

export const TagsContainer = styled.div`
	display: flex;
	gap: 6px;
	flex-wrap: wrap;
`

export const TodoText = styled.p`
  		font-style: ${({ completed }) => completed ? "italic" : "normal"};
		color: ${({ theme, completed }) => completed ? theme.colors.secondary[200] : theme.colors.dark[100]};
		opacity: ${({ completed }) => completed ? "0.4" : "1"};
		text-decoration: ${({ completed }) => completed ? "line-through" : ""};
`;

export const FormContainer = styled.form`
  	display: flex;
	width: 100%;
	flex-direction: column;
`;
export const FormItem = styled.div`
  margin-bottom:${({ theme }) => theme.spacing.normal};
`;

export const ItemBtnContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;