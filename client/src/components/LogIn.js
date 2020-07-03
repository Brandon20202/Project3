import React from 'react';
import {Typography, Box} from '@material-ui/core';
import Typed from 'react-typed';
import Login from './login-form';
import NavBarLogIn from './NavBarLogin'

const useStyles = () => ({
	title: {
		color: 'textPrimary',
	},

});

const HomeLogIn = () => {
	const classes = useStyles();
	return (
		<div>
		<NavBarLogIn />
		<Box className={classes.typedContainer}>
			<Typography className={classes.title} variant="h1" align="center" color="secondary">
				<Typed strings={['Landscaping For All']} typeSpeed={40} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h4" align="center" color="secondary">
				<Typed strings={['Find The Best Landscaping Service...']} typeSpeed={40} backSpeed={60} />
			</Typography>
            <Login />
		</Box>
		</div>
	);
};

export default HomeLogIn;