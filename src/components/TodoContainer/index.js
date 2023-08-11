import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

const TodoContainer = () => {
	return (
		<div className="container">
			<Header />
			<TodosList />
		</div>
	);
};
export default TodoContainer;
