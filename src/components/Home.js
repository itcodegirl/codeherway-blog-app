import React from 'react';

function Home() {
	return (
		<section id="home" className="p-5 text-center bg-light">
			<div className="container">
				<h1 className="display-4">Welcome to CodeHerWay</h1>
				<p className="lead">A blog for web development enthusiasts, featuring tutorials, insights, and personal stories.</p>
				<a href="#blog" className="btn btn-primary btn-lg">Check Out My Latest Posts</a>
			</div>
		</section>
	);
}

export default Home;

