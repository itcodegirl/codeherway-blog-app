import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Image_Logos/codeherway-logo-head.png';

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="CodeHerWay Logo" height="100" width="auto" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/about">About Me</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;

