import React from 'react';
import { StyledSelect } from "./style.js"

const Select = ({ placeholder = "", onChange, children }) => {
	return (
		<StyledSelect placeholder={placeholder} onChange={onChange}>
			{children}
		</StyledSelect>
	);
}

export { Select };