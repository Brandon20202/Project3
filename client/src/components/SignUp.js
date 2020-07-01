import React from 'react';
import {Typography, Box} from '@material-ui/core';
import Typed from 'react-typed';
import SignUp from './signup-form';

const useStyles = () => ({
	title: {
		color: 'textPrimary',
	},

	// typedContainer: {
	// 	position: 'absolute',
	// 	top: '50%',
	// 	left: '50%',
	// 	transform: 'translate(-50%, -50%',
	// 	width: '100vw',
	// 	textAlign: 'center',
	// 	zIndex: 3,
	// },
});

const HomeSignUp = () => {
	const classes = useStyles();
	return (
		<Box className={classes.typedContainer}>
			<Typography className={classes.title} variant="h1" align="center" color="secondary">
				<Typed strings={['Landscaping For All']} typeSpeed={40} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h4" align="center" color="secondary">
				<Typed strings={['Find The Best Landscaping Service...']} typeSpeed={40} backSpeed={60} />
			</Typography>
            <SignUp />
		</Box>
	);
};

export default HomeSignUp;