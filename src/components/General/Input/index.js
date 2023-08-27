import React from 'react';
import { StyledInput, StyledCheckbox } from './style';

const Input = ({ placeholder = "", ...rest }) => {
	return (
		<StyledInput placeholder={placeholder} {...rest} />
	);
}
const Checkbox = ({ ...rest }) => {
	return <StyledCheckbox {...rest} />
}
export { Input, Checkbox };