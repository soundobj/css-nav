import React from 'react';

function Nav(props)
{
	return (
		<nav className="nav">
			{props.items.map( (item) => {
				return (
					<li key={item.id}
						className="nav-item"
					>
						{item.component}
					</li>
				)
			})}		
		</nav>
	);
}

export default Nav;
