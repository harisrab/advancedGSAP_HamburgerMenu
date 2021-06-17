import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Opportunities from "./components/Opportunities";
import Solutions from "./components/Solutions";
import Home from "./components/Home";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				{/* <Hamburger /> */}

				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/opportunities"
						component={Opportunities}
					/>
					<Route exact path="/solutions" component={Solutions} />
					<Route exact path="/contact-us" component={Contact} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
