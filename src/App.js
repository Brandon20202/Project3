import React from 'react';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import {useAuth0} from './react-auth0-spa';
import {Grid, makeStyles} from '@material-ui/core';
import Content from './components/Content';
import Home from './components/Home';
import Footer from './Footer';

import CheckBoxes from './components/CheckBoxes';

// import Header from './components/Header';
import './App.css';

function App() {
	const {loading} = useAuth0();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="page-container">
			<div className="content-wrap">
			<NavBar />
			<header>
				<BrowserRouter>
					<NavBar />

					{/* <li>
						<Link to="/">Home</Link>
					</li> */}
					{/* <li>
						<Link to="/NavBar">NavBar</Link>
					</li>
					<li>
						<Link to="/Content">Content</Link>
					</li> */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/content" component={Content} />
						<Route exact path="/checkbox" component={CheckBoxes} />

						{/* <Route exact path="/navBar" component={NavBar} /> */}
					</Switch>

					<Grid container direction="column">
						<Grid item container>
							<Grid items xs={false} sm={2} />
							<Grid item xs={12} sm={8} />
						</Grid>
						{/* <Content /> */}
						<Grid item xs={false} sm={2} />
					</Grid>
				</BrowserRouter>
			</header>
			
			</div>
			<Footer />
		</div>
	);
}

export default App;