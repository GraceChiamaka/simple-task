import React, { memo, useContext } from 'react';
import { Avatar, Button, Checkbox, TagItem } from '../General';
import { AppContext } from '../../context/AppContext';
import { StyledTodoItem, TodoContent, TodoText, ItemBtnContainer, TodoTitle, TagsContainer } from './style';
import { Svg } from '../../assets/images/svg';

const { DeleteIcon, EditIcon } = Svg;

const TodoItem = (props) => {
	const { delTodo, handleChange, updateEditState, users } = useContext(AppContext);
	const { completed, id, title, tags, assignedUser } = props.todo;

	const getUsername = users.find((user) => user.id === assignedUser);

	return (
		<StyledTodoItem>
			<TodoContent className="todo-content">
				<TodoTitle>
					<Checkbox
						type="checkbox"
						checked={completed}
						onChange={() => handleChange(id)}
					/>
					{assignedUser && assignedUser !== '' && (
						<Avatar username={getUsername.name} />
					)}
					<TodoText completed={completed}>{title}</TodoText>
				</TodoTitle>

				<TagsContainer>
					{tags &&
						tags.length > 0 &&
						tags.map(({ id, title, color }) => (
							<TagItem key={id} text={title} color={color} />
						))}
				</TagsContainer>
			</TodoContent>
			<ItemBtnContainer>
				<Button
					variant="danger"
					type="button"
					icon={<img src={EditIcon} alt="edit icon" />}
					onClick={() => updateEditState(props.todo)}
				/>
				<Button
					variant="danger"
					type="button"
					// text="Remove"
					icon={<img src={DeleteIcon} alt="delete icon" />}
					onClick={() => delTodo(id)}
				/>
			</ItemBtnContainer>

		</StyledTodoItem >
	);
};

export default memo(TodoItem);
