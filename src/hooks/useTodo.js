import { useCallback, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
const INITIAL_STATE = [
	{
		id: uuidv4(),
		title: "Setup development environment",
		completed: true,
		assignedUser: "",
	},
	{
		id: uuidv4(),
		title: "Develop website and add content",
		completed: false,
		assignedUser: "",
	},
	{
		id: uuidv4(),
		title: "Deploy to live server",
		completed: false,
		assignedUser: "",
	},
]

const useTodo = () => {
	const [todos, setTodos] = useState([...INITIAL_STATE]);
	const delTodo = useCallback((id) => {
		setTodos(
			[...todos.filter((todo) => todo.id !== id)])
	}, [todos]);


	const markAsCompleted = useCallback((id) => {
		setTodos(todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
	}, [todos]);

	return {
		delTodo,
		markAsCompleted,
		todos
	};
}

export default useTodo;