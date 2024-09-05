import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Header />
			<Home />
			<AboutMe />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
