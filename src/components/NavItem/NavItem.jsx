import React from "react";
import Icon from "../Icon/Icon.jsx";

function NavItem (props) {
	return (
		<a className="nav-item-item"
			onClick={props.handleOnClick}
		>
			<span className="nav-item-icon"><Icon name={props.icon} /></span>
			<span className="nav-item-title">{props.title}</span>
		</a>
	);
}

export default NavItem;
