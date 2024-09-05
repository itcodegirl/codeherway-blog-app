import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AboutMe from './components/AboutMe';

function App() {
	return (
		<div>
			<Header />
			<Home />
			<AboutMe />
		</div>
	);
};

export default App;
