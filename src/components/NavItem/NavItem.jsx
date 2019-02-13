import React from "react";
import Icon from "../Icon/Icon.jsx";

function NavItem (props) {
	return (
		<div className="nav-item"
			onClick={props.handleOnClick}
		>
			<span className="nav-item-icon"><Icon name={props.icon} /></span>
			<span className="nav-item-title">{props.title}</span>
		</div>
	);
}

export default NavItem;
