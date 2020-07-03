import React from 'react';
import './navBarStyle.css';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	bg: {
		backgroundColor: '#00a82d',
		color: 'white',
	},
}));

export default function ButtonAppBar() {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.bg}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Lime Tree
					</Typography>
					<Button color="inherit" href="/">Home</Button>
					<Button color="inherit" href="/login">Log In</Button>
					<Button color="inherit" href="/signup">Sign Up</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
