import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import { Context } from "../store/appContext";
import Binaural_Logo from "../../img/binaural_logos/Logo_binaurapp.png"


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const logout = () => {
		console.log("estoy en logout");
		actions.setIsLogin(false)
		actions.setUser(null)
		localStorage.removeItem("token")
	}

	return (
		<nav className="navbar navbar-expand-sm">
			<div id="logo" className="container-fluid">
				<div className="navbar-nav me-auto mb-2">
					<img id="binauralLogo" src={Binaural_Logo} alt="Binaural_logo" />
					<h2 className="nav-link link-light left" id="binaurappLogoName">Binaurapp</h2>
				</div>
			</div>
			<div className="d-flex justify-content-middle">
				<Link id="navbarText" className="nav-link link-light" to="/">What's Binaurapp</Link>
				<Link id="navbarText" className="nav-link link-light" to="/">About Us</Link>
			</div>
			<div className="d-flex justify-content-end">
				{store.isLogin ?
					"" :
					<Link id="navbarText" className="nav-link link-light px-1" to="/signup">Signup</Link>
				}
				<p id="navbarText" className="nav-link link-light px-1">/</p>
				{store.isLogin ?
					<Link id="navbarText" className="nav-link link-light px-1" to="/dashboard">Dashboard</Link>
					: ""}
				{store.isLogin ?
					<>
						<Link id="navbarText" className="nav-link link-light px-1" onClick={logout} to="/">Logout</Link>
						<Link id="navbarText" className="nav-link link-light px-1" to="/profile">Profile</Link>
					</>
					:
					<Link id="navbarText" className="nav-link link-light px-1" to="/login">Login</Link>
				}
			</div>
        </nav>
	);
};

