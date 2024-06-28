import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);



	const logout = () => {
		console.log("estoy en logout");
		actions.setIsLogin(false)
		localStorage.removeItem("token")
	}

	return (
		<nav className="navbar navbar-expand-sm bg-dark d-flex" data-bs-theme="dark">
			<div className="container-fluid d-flex align-items-center justify-content-center">
				<Link to="/home">
					<button type="button" className="btn btn-outline-light d-flex justify-content-between">Home</button>
				</Link>
				<div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarColor02">
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<Link to="/signup">
									<button type="button" className="btn btn-outline-danger">Sign Up</button>
								</Link>
							</li>
							<li className="nav-item">
							</li>
							<li className="nav-item">
								{store.isLogin ?
									<>
										<Link to="/">
											<button type="button" onClick={logout} className="btn btn-outline-info">Logout</button>
										</Link>
										<Link to="/demo">
											<button type="button" className="btn btn-outline-info">Profile</button>
										</Link>
									</>
									:
									<Link to="/login">
										<button type="button" className="btn btn-outline-success">Login</button>
									</Link>
								}
							</li>
							<Link to="/dashboard">
								<button type="button" className="btn btn-outline-light d-flex justify-content-between">Dashboard</button>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
