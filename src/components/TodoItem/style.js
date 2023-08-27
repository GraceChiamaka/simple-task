import styled from 'styled-components';
import { StyledButton } from '../General/Button/style';

export const StyledTodoItem = styled.li`
	list-style-type: none;
	padding: 17px 0px;
	border-bottom: 1px solid #eaeaea;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: space-between;
	z-index: 10;
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

export const TagsContainer = styled.div`
	display: flex;
	gap: 6px;
	flex-wrap: wrap;
`;

export const TodoText = styled.p`
  		font-style: ${({ completed }) => completed ? "italic" : "normal"};
		color: ${({ theme, completed }) => completed ? theme.colors.secondary[200] : theme.colors.dark[100]};
		opacity: ${({ completed }) => completed ? "0.4" : "1"};
		text-decoration: ${({ completed }) => completed ? "line-through" : ""};
`;

export const ItemBtnContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const EditButton = styled(StyledButton)`
	color: ${({ theme }) => theme.colors.blue[100]};
	font-weight: 400;
`;

export const DeleteButton = styled(StyledButton)`
	color: ${({ theme }) => theme.colors.red[100]};
	font-weight: 400;
`;
