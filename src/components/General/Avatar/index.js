import React from 'react';
import "./style.css";

const Avatar = ({ username }) => {
	return (
		<span className='user-avatar'>
			{username ? username[0] : ""}
		</span>
	);
}

export { Avatar };