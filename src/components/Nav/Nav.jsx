import React, { useState } from 'react';
import Icon from "../Icon/Icon.jsx";
import classNames from 'classnames';

function Nav(props) {
	const [nav, setNav] = useState(0);
	const toggle = () => {
		setNav(!nav);
	}

	return (
		<div>
			<span
				onClick={toggle}
				className={classNames('nav-burger', nav ?
					"nav-open" : "nav-closed")}
			>
					<Icon
						name="si-glyph-askterisk"
					/>
			</span>
			<nav className={classNames("nav", nav ?
				"nav-open" : "nav-closed")}>
				{props.items.map( (item) => {
					return (
						<li key={item.id}
							className="nav-item"
							onClick={toggle}
						>
							{item.component}
						</li>
					)
				})}
			</nav>
		</div>
	);
}

export default Nav;
