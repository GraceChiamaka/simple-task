import React from 'react';
import "./style.css";

const Button = ({ type = "button", text = "", variant = "default", onClick }) => {
	const renderClassName = () => {
		if (variant === "default") {
			return "btn-default"
		} else if (variant === "success") {
			return "btn-success"
		}
		return "btn-danger"
	}
	return (
		<button
			type={type}
			className={"btn " + (renderClassName())}
			onClick={onClick}
		>{text}</button>
	);
}

export { Button };