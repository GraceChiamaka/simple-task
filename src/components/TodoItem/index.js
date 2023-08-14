import React, { useContext, useState } from 'react';
import { Avatar, Checkbox, TagItem, Modal, Input, Button } from '../General';
import { AppContext } from '../../context/AppContext';
import {
	StyledTodoItem,
	TodoContent, TodoText,
	ItemBtnContainer,
	TodoTitle,
	TagsContainer,
	DeleteButton,
	EditButton
} from './style';
import { Svg } from '../../assets/images/svg';
import { ColorSelect, ColorSelectContainer } from '../container';
import { colors } from '../../utils/color';
import { ButtonContainer } from '../TodoContainer/style';

const { DeleteIcon, EditIcon } = Svg;

const TodoItem = (props) => {
	const { delTodo, handleChange, updateEditState, users, saveUpdatedTag } = useContext(AppContext);
	const [showTagModal, setShowTagModal] = useState(false);

	const [tagInfo, setTagInfo] = useState({});

	const { completed, id, title, tags, assignedUser } = props.todo;

	const getUsername = users.find((user) => user.id === assignedUser);

	const handleEditTag = (tagId) => {
		const tag = tags.find(item => tagId === item.id);
		setTagInfo(tag);
		setShowTagModal(true);
	}

	const handleTagInfoChange = (ev) => {
		const { value, name } = ev.target;
		setTagInfo({ ...tagInfo, [name]: value })
	}

	const updateTag = (ev) => {
		ev.preventDefault();
		if (tagInfo.value !== "") {
			saveUpdatedTag({ ...tagInfo, taskId: id });
			closeTagModal();
		}
	}

	const closeTagModal = () => {
		setTagInfo({ value: "", color: "" });
		setShowTagModal(false)
	}

	const renderTagForm = () => {
		return (
			<form onSubmit={updateTag}>
				<Input value={tagInfo.title} name="title" onChange={handleTagInfoChange} />
				<ColorSelectContainer>
					{colors.map((item) => <ColorSelect
						key={item}
						onClick={() => setTagInfo({ ...tagInfo, color: item })}
						bgcolor={item}
						active={tagInfo.color === item} />
					)}
				</ColorSelectContainer>
				<ButtonContainer>
					<Button variant="primary" type='button' text="Cancel" onClick={closeTagModal} />

					<Button variant='success' type="submit" text="Save" onClick={updateTag} />
				</ButtonContainer>
			</form>
		)
	}

	return (
		<StyledTodoItem>
			{showTagModal && <Modal modalHeading="Update Tag Info">
				{renderTagForm()}
			</Modal>}
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
							<TagItem key={id} id={id} text={title} color={color} onEdit={handleEditTag} />
						))}
				</TagsContainer>

			</TodoContent>
			<ItemBtnContainer>
				<EditButton onClick={() => updateEditState(props.todo)}>
					<img src={EditIcon} alt="edit icon" />
					<span>Edit</span>
				</EditButton>
				<DeleteButton onClick={() => delTodo(id)}>
					<img src={DeleteIcon} alt="delete icon" />
					<span>Remove</span>
				</DeleteButton>
			</ItemBtnContainer>
		</StyledTodoItem >
	);
};

export default TodoItem;
