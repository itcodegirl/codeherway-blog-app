import React from 'react';

function Blog() {
	return (
		<section id="blog" className="p-5">
			<div className="container">
				<h2>Latest Blog Posts</h2>
				<div className="row">
					<div className="col-md-4">
						<div className="card mb-4">
							<div className="card-body">
								<h5 className="card-title">Understanding React Hooks</h5>
								<p className="card-text">A deep dive into how hooks work in React and how they can simplify your code.</p>
								<a href="/" className="btn btn-primary">Read More</a>
							</div>
						</div>
					</div>
					{/* Add more blog cards */}
				</div>
			</div>
		</section>
	);
}

export default Blog;
