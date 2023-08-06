import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/Main.js";
import About from "./pages/About.js";
import Helicopters from "./pages/Helicopters.js";
import Webdesign from "./pages/Webdesign.js";
import Navbar from "./elements/Navbar.js";

import "./App.css";

const App = () => {
	return (
		<Router>
			<div className="container">
			<Navbar />

				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/helicopters" element={<Helicopters />} />
					<Route exact path="/webdesign" element={<Webdesign />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;

