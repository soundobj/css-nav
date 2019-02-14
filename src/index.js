import React from "react";
import ReactDOM from "react-dom";
import Icon from "./components/Icon/Icon.jsx";
import Nav from "./components/Nav/Nav.jsx";
import NavItem from "./components/NavItem/NavItem.jsx";
import NavBanner from "./components/NavBanner/NavBanner.jsx";
import "normalize.css";
import "./main.scss";
import lorem from "./lorem.txt";

const nav = [
	{
		"id": 0,
		"component": <NavBanner />,
	},
	{
		"id": 1,
		"component": <NavItem
			title="Home"
			icon="si-glyph-electron"
			handleOnClick={() => console.log("home clicked")}
		/>,
	},
	{
		"id": 2,
		"component": <NavItem
			title="Spending"
			icon="si-glyph-money-3"
			handleOnClick={() => console.log("spending clicked")}
		/>,
	},
	{
		"id": 3,
		"component": <span className="nav-delimiter" />,
	},
	{
		"id": 4,
		"component": <NavItem
			title="Account Management"
			icon="si-glyph-adjustment-horizon"
			handleOnClick={() => console.log("acc mngt clicked")}
		/>,
	},
];

const App = () => {
	return (
		<div className="wrapper">
			<Nav items={nav} />
			<main className="main">{lorem}</main>
		</div>
	)
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : 0;
