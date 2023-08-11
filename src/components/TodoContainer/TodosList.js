import React, { memo, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TodoItem from "./TodoItem";

const TodosList = () => {
	const { todos } = useContext(AppContext);

	const checkTaskState = () => {
		const tasks = todos.filter((todo) => todo.completed === false);
		return ((tasks.length === 0))
	}
	return (
		<>
			<div className="task-view">
				{checkTaskState() ? (
					<div>Hurray! You have no uncompleted tasks</div>
				)
					: todos.map(
						(todo) =>
							!todo.completed && (
								<TodoItem key={todo.id} todo={todo} />
							)
					)}
			</div>

			<div className="task-view">
				<h2>Completed Tasks</h2>
				{todos.map(
					(todo) =>
						todo.completed && <TodoItem key={todo.id} todo={todo} />
				)}
			</div>
		</>
	);
};

export default memo(TodosList);
