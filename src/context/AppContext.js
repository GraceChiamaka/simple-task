import React, { createContext, useMemo, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const INITIAL_USERS_STATE = [
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
const INITIAL_TODOS_STATE = [
	{
		id: uuidv4(),
		title: "Setup development environment",
		completed: true,
		assignedUser: "",
	},
	{
		// id: uuid.v4(),
		id: uuidv4(),
		title: "Develop website and add content",
		completed: false,
		assignedUser: "",
	},
	{
		// id: uuid.v4(),
		id: uuidv4(),
		title: "Deploy to live server",
		completed: false,
		assignedUser: "",
	},
]

export const AppContext = createContext({});

const AppContextProvider = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [tagsContainer, setTagsContainer] = useState([]);
	const [tags, setTags] = useState([]);
	const [assignedUser, setAssignedUser] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [selectedTask, setSelectedTask] = useState();
	const [users] = useState(INITIAL_USERS_STATE);
	const [todos, setTodos] = useState([...INITIAL_TODOS_STATE]);

	const openModal = () => setShowModal(true);
	const closeModal = useCallback(() => {
		resetState()
		setShowModal(false);
	}, []);

	const delTodo = useCallback((id) => {
		setTodos(
			[...todos.filter((todo) => todo.id !== id)])
	}, [todos]);

	const handleChange = useCallback((id) => {
		setTodos(todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo
		}))
	}, [todos]);

	const addTodoItem = useCallback((title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			assignedUser,
			tags,
			completed: false,
		};
		setTodos([...todos, newTodo]);
		setTags([]);
		setAssignedUser("");
		closeModal();
	}, [assignedUser, tags, todos, closeModal]);

	const addTagToContainer = useCallback((value) => {
		setTagsContainer([...tagsContainer, value]);
	}, [tagsContainer])

	const addTagToTask = useCallback((value) => {
		if (!tags.includes(value)) {
			setTags([...tags, value]);
		}
	}, [tags])

	const updateEditState = useCallback((task) => {
		setIsEditing(!isEditing);
		setSelectedTask(task);
		setTags(task.tags ? task.tags : []);
		setAssignedUser(task.assignedUser);

	}, [isEditing]);

	const handleDeleteTag = useCallback((tagId) => {
		const filteredTag = tags.filter(tag => tag.id !== tagId);
		setTags(filteredTag);
	}, [tags])

	const handleSelect = (ev) => {
		setAssignedUser(ev.target.value)
	}

	const editTask = useCallback((title) => {
		const newTodo = { ...selectedTask, title, tags, assignedUser };
		const updatedTodo = todos.map((todo) => todo.id === selectedTask.id ? newTodo : todo);
		setTodos(updatedTodo);
		closeModal();
	}, [selectedTask, todos, assignedUser, tags, closeModal])

	const resetState = () => {
		setTags([])
		setAssignedUser("");
		setIsEditing(false);
		setSelectedTask()
	}

	const saveUpdatedTag = useCallback((tagInfo) => {
		const { taskId, ...rest } = tagInfo;
		const updatedTag = tagsContainer.map((_tag) => _tag.id === tagInfo.id ? { ...rest } : _tag);
		const updateTodoWithTag = todos.filter((todo) => {
			if (todo.id === taskId) {
				todo.tags = todo.tags.map((_tag) => _tag.id === tagInfo.id ? { ...rest } : _tag);
			}
			return todo;
		});
		setTagsContainer([...updatedTag]);
		setTodos(updateTodoWithTag)

	}, [tagsContainer, todos])


	const value = useMemo(() => ({
		showModal,
		todos,
		users,
		tags,
		tagsContainer,
		isEditing,
		selectedTask,
		assignedUser,
		updateEditState,
		openModal,
		closeModal,
		delTodo,
		handleChange,
		addTodoItem,
		handleSelect,
		addTagToTask,
		handleDeleteTag,
		addTagToContainer,
		editTask,
		saveUpdatedTag
	}), [
		todos,
		users,
		showModal,
		tags,
		tagsContainer,
		isEditing,
		selectedTask,
		assignedUser,
		updateEditState,
		delTodo,
		handleChange,
		addTodoItem,
		addTagToTask,
		handleDeleteTag,
		addTagToContainer,
		editTask,
		closeModal,
		saveUpdatedTag
	])

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	)
}

export default AppContextProvider;