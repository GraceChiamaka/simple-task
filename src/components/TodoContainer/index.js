import React from 'react';
import TodosList from './TodosList';
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
