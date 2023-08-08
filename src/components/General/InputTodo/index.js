import React, { useState, useContext } from "react";
import {TagInput, Select, Button} from '../../General';
import FormModal from "./FormModal";
import { AppContext } from "../../../context/AppContext";
import "./style.css"

const InputTodo = () => {
	const [title, setTitle] = useState("");
	const { showModal, closeModal, addTodoItem, handleSelect } = useContext(AppContext);


	const handleSubmit = e => {
		console.log("submit is triggered");
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
									<option value="Chad">Chad</option>
									<option value="Ayo">Ayo</option>
									<option value="Blu">Blu</option>
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
