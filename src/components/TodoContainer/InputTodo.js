import React, { useState, useContext, } from 'react';
import { AppContext } from '../../context/AppContext';
import { Select, Button, TagInput, Input } from '../General';
import { FormLabel } from '../container';
import { ButtonContainer, FormContainer, FormItem } from './style';

const InputTodo = () => {
	const { addTodoItem, closeModal, handleSelect, users, isEditing, editTask, assignedUser, selectedTask } = useContext(AppContext);
	const [title, setTitle] = useState(isEditing ? selectedTask.title : "");

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		// if (ev.key !== 'Enter') {
		if (title !== '') {
			if (isEditing) {
				editTask(title)
			} else {
				addTodoItem(title);
			}
			setTitle('');
			// }
		}
	};

	return (
		<FormContainer onSubmit={handleSubmit}>
			<FormItem>
				<FormLabel>Title</FormLabel>
				<Input
					type="text"
					placeholder="Add todo..."
					value={title}
					onKeyDown={(e) => {
						e.key === 'Enter' && e.preventDefault();
					}}
					name="title"
					onChange={onChange}
				/>
			</FormItem>

			<FormItem>
				<FormLabel>Assign Task</FormLabel>
				<Select
					placeholder="Assign someone..."
					onChange={handleSelect}
					defaultValue={isEditing ? assignedUser : ''}
					value={assignedUser}
				>
					<option>Assign someone...</option>
					{users.map(({ id, name }) => (
						<option key={id} value={id} >
							{name}
						</option>
					))}
				</Select>
			</FormItem>

			<FormItem>
				<FormLabel>Label</FormLabel>
				<TagInput />
			</FormItem>

			<ButtonContainer>
				<Button
					text="Cancel"
					variant="primary"
					type="button"
					onClick={closeModal}
				/>
				<Button type="submit" variant="success" text="Submit" />
			</ButtonContainer>
		</FormContainer>
	);
};
export default InputTodo;
