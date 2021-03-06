import React from "react";
import Icon from "../icon/Icon.component";

const Select = ({ children, onChange, defaultOption, ...otherProps }) => {
	return (
		<div className='select'>
			<select
				onChange={onChange}
				{...otherProps}
				className='select__item'
				style={{ color: `${defaultOption ? "#000" : "#8C8985" /*Gray color*/}` }}>
				{children}
			</select>
			<Icon name='chevron-down-outline' className='select__icon' />
		</div>
	);
};

export default Select;

