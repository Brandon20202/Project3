import React from 'react';
import {Typography, Box} from '@material-ui/core';
import Typed from 'react-typed';
import NavBarLogIn from "./NavBarLogin"

const useStyles = () => ({
	title: {
		color: 'textPrimary',
	},

});

const Home = () => {
	const classes = useStyles();
	return (
		
		<Box className={classes.typedContainer}>
			<NavBarLogIn />
			<Typography className={classes.title} variant="h1" align="center" color="secondary">
				<Typed strings={['Landscaping For All']} typeSpeed={40} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h4" align="center" color="secondary">
				<Typed strings={['Find The Best Landscaping Service...']} typeSpeed={40} backSpeed={60} />
			</Typography>
		</Box>
	);
};

export default Home;
