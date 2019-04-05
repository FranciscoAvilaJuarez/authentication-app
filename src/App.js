import React, { Component } from 'react';
//*set up router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//*imports
import Home from './components/pages/home';
import Navbar from './components/layout/Navbar';
import Staff from './components/pages/staff';

import './App.css';

//* toggle switch
class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<div className="Container">
						<Route path="/" exact={true} component={Home} />
						<Route path="/staff" exact={true} component={Staff} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
