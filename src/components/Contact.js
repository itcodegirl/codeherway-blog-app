import React from 'react';

function Contact() {
	return (
		<section id="contact" className="p-5 bg-light">
			<div className="container">
				<h2>Contact Me</h2>
				<form>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input type="email" className="form-control" required />
					</div>
					<div className="mb-3">
						<label className="form-label">Message</label>
						<textarea className="form-control" rows="3" required></textarea>
					</div>
					<button type="submit" className="btn btn-primary">Send</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
