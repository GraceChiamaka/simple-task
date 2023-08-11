import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button, Modal } from '../General';
import { Svg } from '../assets/svg';
import InputTodo from './InputTodo';
import './style.css';

const { PlusIcon } = Svg;

const Header = () => {
	const { openModal, showModal } = useContext(AppContext);

	const headerText = (
		<>
			<img src={PlusIcon} alt="plus icon" /> <span>Add New Task</span>
		</>
	);
	return (
		<header className="header">
			<h1>Simple Todo App</h1>
			<Button
				onClick={openModal}
				variant="default"
				showIcon
				icon={PlusIcon}
				text={headerText}
			/>
			{showModal && (
				<Modal>
					<InputTodo />
				</Modal>
			)}
		</header>
	);
};

export default Header;
