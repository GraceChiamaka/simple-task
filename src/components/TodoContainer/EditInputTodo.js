import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Select, Button, TagInput, Input } from '../General';
import { ButtonContainer, FormContainer, FormItem } from './style';



const EditInputTodo = () => {
	const { closeModal, handleSelect, users, assignedUser, selectedTask, editTask } = useContext(AppContext);
	const [title, setTitle] = useState(selectedTask.title);

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	const handleEdit = (ev) => {
		ev.preventDefault();
		if (ev.key !== 'Enter') {
			if (title !== '') {
				editTask(title)
				setTitle('');
			}
		}
	};

	return (
		<FormContainer onSubmit={handleEdit}>
			<FormItem>
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

			<FormItem >
				<Select placeholder="Assign someone..." defaultValue={assignedUser} value={assignedUser} onChange={handleSelect}>
					<option>Assign someone...</option>
					{users.map(({ id, name }) => (
						<option key={id} value={id} selected={assignedUser === id}>
							{name}
						</option>
					))}
				</Select>
			</FormItem>

			<FormItem>
				<TagInput />
			</FormItem>

			<ButtonContainer className="btn-container">
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

export default EditInputTodo;
