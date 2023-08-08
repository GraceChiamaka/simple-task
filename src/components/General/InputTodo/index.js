import React, { useState, useContext } from "react";
import {TagInput, Select, Button} from '../../General';
import FormModal from "./FormModal";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../../../context/AppContext";
import "./style.css"

const users = [
	{
		id: uuidv4(),
		name: 'Mark'
	},
	{
		id: uuidv4(),
		name: 'John'
	},
	{
		id: uuidv4(),
		name: 'Steve'
	},
	{
		id: uuidv4(),
		name: 'Emily'
	},
	
]
const InputTodo = () => {
	const [title, setTitle] = useState("");
	const { showModal, closeModal, addTodoItem, handleSelect } = useContext(AppContext);

	const handleSubmit = e => {
		e.preventDefault()
		if (e.key !== "Enter") {
			;
			if (title !== "") {
				addTodoItem(title);
				setTitle("");
			}
		}
	};
	return (
		<>
			{
				showModal && (
					<FormModal>
						<form className="form-container">
							<div className="form-item">
								<input
									type="text"
									className="input-text"
									placeholder="Add todo..."
									value={title}
									onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}
									onChange={({ target: { value } }) => setTitle(value)}
								/>
								
							</div>

							<div className="form-item">
								<TagInput />
							</div>
							
							<div className="form-item">
								<Select placeholder="" onChange={handleSelect}>
									<option>Assign to someone</option>
									{users.map(({ id, name}) => <option key={id}>{ name }</option>)}
								</Select>
							</div>
							<div className="btn-container">
								<Button type="button" onClick={closeModal} variant="secondary" text={"Cancel"} />
								<Button type="submit" onClick={handleSubmit} variant="default" text="Submit" />
							</div>
						</form>
					</FormModal>
				)
			}
		</>

	);

}
export  {InputTodo};
