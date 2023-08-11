import React from 'react';
import "./style.css"

const Select = ({ placeholder = "", onChange, children }) => {
	return (
		<select className='input-select' placeholder={placeholder} onChange={onChange}>
			{children}
		</select>
	);
}

export { Select };