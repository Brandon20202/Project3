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
			</header>

			<Grid item container>
				<Grid item xs={false} sm={2} />
				<Grid item xs={12} sm={8}>
					<Content />
				</Grid>
				<Grid item xs={false} sm={2} />
				{/* <Card /> */}
			</Grid>
		</div>
	);
}

export default App;
