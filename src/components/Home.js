import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';

function Home() {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;
		if (videoElement && !videoElement.querySelector('video')) {
			const video = document.createElement('video');
			video.src = "/Video/Blue Minimalistic AI Technology Instagram Reel (1).mp4"; // Ensure the path is correct
			video.autoplay = true;
			video.loop = true;
			video.controls = false;
			video.muted = true;
			video.style.height = '340px';
			video.style.width = '420px';
			videoElement.appendChild(video);
		}
	}, []);

	return (
		<section id="home" className="p-5 text-center">
			{/* Background image - ensure it's in the public folder */}
			<div id="box" ref={videoRef}></div> {/* Ref for video handling */}
			<section id='container1'>
				<div className="container">
					<img src="/Images/About_Image/codeherway-font-4.png" alt="CodeHerWay Logo" height="300" width="auto" />
					<br />
					<br />
					<img src="/Image_Logos/About_Blog_Banner.png" alt="CodeHerWay Logo" height="400" width="auto" font-color='white' />
					<br />
					<br />

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
							{/* Add additional content or images */}
						</div>
					</div>
				</div>
			</section>

			{/* Blog Section */}
			<section id="carousel" className="p-5">
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block"
							src="/Images/Images/laptop-women-tech.png"
							alt="Women in tech working on laptop" id='carousel-image'
						/>
						<Carousel.Caption>
							<h3 id='carousel-caption'>Bridging the Gender Gap in Tech</h3>
							<p>Women remain underrepresented in tech roles, particularly in areas like design, web development, and software engineering. </p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block"
							src="/Images/Women_Tech/women-tech-image-1.png"
							alt="Coding on a laptop" id='carousel-image'
						/>
						<Carousel.Caption class='carousel-caption'>
							<h3 id='carousel-caption'>Second Slide Label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block"
							src="/Images/Women_Tech/women-tech-image-5.png"
							alt="Web development project showcase" id='carousel-image'
						/>
						<Carousel.Caption>
							<h3 id='carousel-caption'>Third Slide Label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block"
							src="/Images/Women_Tech/women-tech-image-7.png"
							alt="Web development project showcase" id='carousel-image'
						/>
						<Carousel.Caption>
							<h3 id='carousel-caption'>Fourth Slide Label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</section>
		</section>
	);
}

export default Home;
