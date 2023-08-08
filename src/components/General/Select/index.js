import React from 'react';
import "./style.css";

const Select = ({onChange, children}) => {
	return ( 
		<select className='custom-select' onChange={onChange}>
			{children}
		</select>
	 );
}
 
export  {Select};