import React from 'react';
import { StyledAvatar } from "./style.js";

const Avatar = ({ username }) => {
	return (
		<StyledAvatar className='user-avatar'>
			{username ? username[0] : ""}
		</StyledAvatar>
	);
}

export { Avatar };