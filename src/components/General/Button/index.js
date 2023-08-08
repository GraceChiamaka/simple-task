import React from 'react';
import "./style.css";

const Button = ({ type="button", text="", variant="default", onClick}) => {
	return ( 
		<button
			type={type}
			className={"btn " + (variant === "default" ? "btn-default" : variant === "danger"? "btn-danger": "btn-secondary")}
			onClick={onClick}
		>{ text }</button>
	 );
}
 
export {Button};