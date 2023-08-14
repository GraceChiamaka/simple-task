import React from 'react';
import TodosList from '../TodoList';
import Header from './Header';
import { PageContainer } from '../container';

const TodoContainer = () => {
	return (
		<PageContainer>
			<Header />
			<TodosList />
		</PageContainer>
	);
};
export default TodoContainer;
