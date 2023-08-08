import React, { useContext } from "react";
import { Avatar, Button } from "../General";
import { AppContext } from "../../context/AppContext";
import { TagItem } from "../General";
import "./style.css"

const TodoItem = (props) => {
	const { delTodo, handleChange } = useContext(AppContext)
	const completedStyle = {
		fontStyle: "italic",
		color: "#d35e0f",
		opacity: 0.4,
		textDecoration: "line-through"
	};

	const { completed, id, title, tags, assignedUser } = props.todo;
	return (
		<li className="todo-item">
			<div className="todo-content">
				<div className="task">
					<input
						type="checkbox"
						checked={completed}
						onChange={() => handleChange(id)}
					/>
					{assignedUser && <Avatar username={assignedUser} />}
					<p style={completed ? completedStyle : null}>{title}</p>
				</div>

				<div className="tags-container">
					{tags && tags.length > 0 && tags.map(({ id, title, color }) => <TagItem key={id} text={title} color={color} />)}

				</div>
				<div className="user-container">

				</div>
			</div>


			<Button variant="danger" type="button" text="Delete" onClick={() => delTodo(id)}></Button>

		</li>
	);
}

export default TodoItem;
