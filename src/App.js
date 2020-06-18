import React from 'react';
import NavBar from './components/NavBar';
import {useAuth0} from './react-auth0-spa';
import {Grid} from '@material-ui/core';
import Content from './components/Content';

function App() {
	const {loading} = useAuth0();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="App">
			<header>
				<NavBar />
				<Grid container direction="column">
					<Grid item container>
						<Grid items xs={false} sm={2} />
						<Grid item xs={12} sm={8} />
					</Grid>
					<Content />
					<Grid item xs={false} sm={2} />
				</Grid>
			</header>
		</div>
	);
}

export default App;
