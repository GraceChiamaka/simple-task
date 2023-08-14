import React, { memo, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button, Modal } from '../General';
import { Svg } from '../../assets/images/svg';
import InputTodo from './InputTodo';
import { StyledHeader } from './style';

const { PlusIcon } = Svg;

const Header = () => {
	const { openModal, showModal, isEditing } = useContext(AppContext);
	const modalHeading = `Please ${isEditing ? "update" : "add"} to-dos item(s) through the input field`;
	return (
		<StyledHeader>
			<h1>Simple Todo App</h1>
			<Button
				onClick={openModal}
				variant="white"
				icon={<img src={PlusIcon} alt="plus icon" />}
				text="Add New Task"
			/>
			{showModal || isEditing ? (
				<Modal modalHeading={modalHeading}>
					<InputTodo />
				</Modal>
			) : null}
		</StyledHeader>
	);
};

export default memo(Header);
