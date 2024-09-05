import React from 'react';
import { useEffect } from 'react';
function Home() {
	useEffect(() => {
		const box = document.getElementById('box');
		if (box && !box.querySelector('video')) {
			const video = document.createElement('video');
			video.src = "/Video/Blue Minimalistic AI Technology Instagram Reel (1).mp4";

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
		<section id="home" className="p-5 text-center bg-light">
			<div className="container">
				<div id="box"></div>
				<h1 className="display-4">Welcome to CodeHerWay</h1>
				<p className="lead">A blog for web development enthusiasts, featuring tutorials, insights, and personal stories.</p>
				<a href="#blog" className="btn btn-primary btn-lg">Check Out My Latest Posts</a>
			</div>
		</section >
	);
}

export default Home;

