import React, { useEffect } from 'react';

function Home() {
	useEffect(() => {
		const box = document.getElementById('box');
		if (box && !box.querySelector('video')) {
			const video = document.createElement('video');
			video.src = "/Video/Blue Minimalistic AI Technology Instagram Reel (1).mp4"; // Make sure the path is correct
			video.autoplay = true;
			video.loop = true;
			video.controls = false;
			video.muted = true;
			video.height = 340;
			video.width = 420;
			box.appendChild(video);
		}
	}, []);

	return (
		<section id="home" className="p-5 text-center">
			{/* Background image - ensure it's in the public folder */}
			<section id='container1'>
				<div className="container">
					<div id="box"></div>
					<h1 className="display-4">Welcome to CodeHerWay</h1>
					<p className="lead">A blog for web development enthusiasts, featuring tutorials, insights, and personal stories.</p>
					<a href="#blog" className="btn btn-primary btn-lg">Check Out My Latest Posts</a>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="p-5">
				<div className="p-2 bg-dark text-light" id='container2'>
					<div className="row">
						<div className="col-lg-6">
							<h2>About Me</h2>
							<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
						</div>
						<div className="col-lg-6">
						</div>
					</div>
				</div>
			</section>

			{/* Blog Section */}
			<section id="blog" className="p-5">
				<div className="container" id='container3'>
					<h2>Latest Blog Posts</h2>
					<div className="row">
						{/* Blog post cards */}
						<div className="col-md-4">
							<div className="card mb-4">
								<div className="card-body">
									<h5 className="card-title">Understanding React Hooks</h5>
									<p className="card-text">A deep dive into how hooks work in React and how they can simplify your code.</p>
									<a href="/" className="btn btn-primary">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4">
								<div className="card-body">
									<h5 className="card-title">An Introduction to GraphQL</h5>
									<p className="card-text">Learn how to use GraphQL to create flexible APIs for your applications.</p>
									<a href="/" className="btn btn-primary">Read More</a>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card mb-4">
								<div className="card-body">
									<h5 className="card-title">Building a RESTful API with Express</h5>
									<p className="card-text">Discover how to create a RESTful API using Node.js and Express.</p>
									<a href="/" className="btn btn-primary">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Home;
