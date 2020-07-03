import React from 'react';
import './navBarStyle.css';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';


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

const handleLogOut = function() {

	document.cookie = "connect.sid=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

	axios.get("/authentication/logout")

}

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
					<Button color="inherit" onClick={handleLogOut}>Log Out</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
