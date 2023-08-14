import React, { memo, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import TodoItem from "../TodoItem";
import { StyledTaskItem } from './style';

const TodosList = () => {
	const { todos } = useContext(AppContext);

	const checkTaskState = () => {
		const tasks = todos.filter((todo) => todo.completed === false);
		return (tasks.length === 0);
	}
	return (
		<>
			<StyledTaskItem>
				{checkTaskState() ? (
					<div>Hurray! You have no uncompleted tasks</div>
				)
					: todos.map(
						(todo) =>
							!todo.completed && (
								<TodoItem key={todo.id} todo={todo} />
							)
					)}
			</StyledTaskItem>

			<StyledTaskItem >
				<h2>Completed Tasks</h2>
				{todos.map(
					(todo) =>
						todo.completed && <TodoItem key={todo.id} todo={todo} />
				)}
			</StyledTaskItem>
		</>
	);
};

export default memo(TodosList);
