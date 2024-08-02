import React from "react";
import { Link } from "react-router-dom"
import "../../styles/navbar.css";

export const Footer = () => (
	<footer className="container d-flex justify-content-around">
		<p id="navbarText">© 2024 Binaurapp, Inc.</p>
		<p id="navbarText">Terms</p>
		<p id="navbarText">Privacy</p>
		<p id="navbarText">Security</p>
		<Link to="/mail" id="navbarText">Contact</Link>
		<p id="navbarText">Manage cookies</p>
	</footer>
);