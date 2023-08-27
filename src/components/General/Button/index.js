import React from 'react';
import { StyledButton } from './style'

const Button = ({ type = "button", text = "", variant = "primary", icon, onClick }) => {

	return (
		<StyledButton
			type={type}
			onClick={onClick}
			variant={variant}
			role="button"
		>{icon && icon} {text !== "" && <span>{text}</span>}</StyledButton>
	);
}

export { Button };