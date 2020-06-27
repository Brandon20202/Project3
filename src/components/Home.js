import React from 'react';
import {Typography, Box} from '@material-ui/core';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';
import CheckBoxes from './CheckBoxes';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	title: {
		color: 'white',
		fontWeight: '500',
		fontStyle: 'oblique',
	},
	subtitle: {
		color: 'white',
		fontWeight: 'Light',
		fontStyle: 'oblique',
	},
	typography: {
		fontFamily: 'Apple Color Emoji',
	},
});

const Home = () => {
	const classes = useStyles();

	return (
		<Box className={classes.typedContainer}>
			<Typography className={classes.title} variant="h1" align="center" color="secondary">
				<Typed strings={['Landscaping For All']} typeSpeed={40} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h4" align="center" color="secondary">
				<Typed strings={['Find The Best Landscaping Service!!!']} typeSpeed={40} backSpeed={60} />
			</Typography>
			<br />
			<Grid container justify="center">
				<CheckBoxes />
			</Grid>
		</Box>
	);
};

export default Home;
