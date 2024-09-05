import React from 'react';
import logo from '../Images/Image_Logos/codeherway-logo-head.png';  // Adjust the path as necessary

function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<img src={logo} alt="CodeHerWay Logo" height="100" width="auto" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
						<li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
						<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;
