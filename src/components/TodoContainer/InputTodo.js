import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Select, Button, TagInput } from '../General';
import { v4 as uuidv4 } from 'uuid';

const users = [
	{
		id: uuidv4(),
		name: 'John',
	},
	{
		id: uuidv4(),
		name: 'Steve',
	},
	{
		id: uuidv4(),
		name: 'Emily',
	},
	{
		id: uuidv4(),
		name: 'Blake',
	},
];

const InputTodo = () => {
	const [title, setTitle] = useState('');
	const { addTodoItem, closeModal, handleSelect } = useContext(AppContext);

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (ev.key !== 'Enter') {
			if (title !== '') {
				addTodoItem(title);
				setTitle('');
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<div className="form-item">
				<input
					type="text"
					className="input-text"
					placeholder="Add todo..."
					value={title}
					onKeyDown={(e) => {
						e.key === 'Enter' && e.preventDefault();
					}}
					name="title"
					onChange={onChange}
				/>
			</div>

			<div className="form-item">
				<TagInput />
			</div>

			<div className="form-item">
				<Select placeholder="Assign someone..." onChange={handleSelect}>
					<option>Assign someone...</option>
					{users.map(({ id, name }) => (
						<option key={id} value={name}>
							{name}
						</option>
					))}
				</Select>
			</div>

			<div className="btn-container">
				<Button
					text="Cancel"
					variant="default"
					type="button"
					onClick={closeModal}
				/>
				<Button type="submit" variant="success" text="Submit" />
			</div>
		</form>
	);
};
export default InputTodo;
