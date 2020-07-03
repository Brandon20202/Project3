import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid} from '@material-ui/core';
import Content from './components/Content';
import Home from './components/Home';
import HomeLogIn from './components/LogIn';
import HomeSignUp from './components/SignUp';
import axios from 'axios';
import './App.css';

class App extends React.Component {

	componentDidMount() {
		axios.get("/authentication")
			.then(res => {
				console.log(res)
			})
	}

	constructor(props) {
		super(props)

		this.state = {
			loggedIn: false
		}
	}

	render() {

			return (
				<div className="App">
					<header>
						<BrowserRouter>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/login" component={HomeLogIn} />
								<Route exact path="/signup" component={HomeSignUp} />
								<Route exact path="/content" component={Content} />
							</Switch>
							<CssBaseline />
							<Grid container direction="column">
								<Grid item container>
									<Grid items xs={false} sm={2} />
									<Grid item xs={12} sm={8} />
								</Grid>
								<Grid item xs={false} sm={2} />
							</Grid>
						</BrowserRouter>
					</header>
				</div>
			);

	}

}

export default App;
