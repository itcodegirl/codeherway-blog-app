import React from 'react';

function Footer() {
	return (
		<footer className="p-4 bg-dark text-light text-center">
			<div className="container">
				<p>&copy; 2024 CodeHerWay. All Rights Reserved.</p>
				<div>
					<a href="https://github.com" className="text-light me-2">GitHub</a>
					<a href="https://linkedin.com" className="text-light me-2">LinkedIn</a>
					<a href="https://twitter.com" className="text-light">Twitter</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
