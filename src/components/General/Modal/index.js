import React from 'react';
import "./style.css"

const Modal = ({ children }) => {
	return (
		<div className='modal-backdrop'>
			<div className='modal'>
				<h3 className="modal-heading">Please add to-dos item(s) through the input field</h3>
				<div className="modal-content">
					{children}
				</div>
			</div>
		</div>
	);
}

export { Modal };