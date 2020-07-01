import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/Drawer';
import './navBarStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
	Drawer, List, ListItem, ListItemIcon, ListItemText,
	Container, Typography, Button, useTheme, Divider
} from '@material-ui/core';
import LandscapeIcon from '@material-ui/icons/Landscape';
import LaunchIcon from '@material-ui/icons/Launch';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.text.primary
	},
	appBar: {
		backgroundColor: '#00a82d',
		color: 'white',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
}));

const drawerWidth = 240;

export default function ButtonAppBar() {
	const classes = useStyles();
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	}


	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}>
					<Toolbar>
						<IconButton edge="start" className={clsx(classes.menuButton, open && classes.hide)} color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
							<MenuIcon />
						</IconButton>

						<Typography variant="h6" className={classes.title} nowrap>
							Lime Tree
						</Typography>
						<Button color="inherit">Services</Button>
						<div>
							{!isAuthenticated && (
								<Button className="logInButton" color="inherit" onClick={() => loginWithRedirect({})}>
									Log In
								</Button>
							)}

							{isAuthenticated && (
								<Button className="logOutButton" color="inherit" onClick={() => logout()}>
									Log Out
								</Button>
							)}
						</div>
					</Toolbar>
				</AppBar>
				<Drawer className={classes.drawer} variant='persistent' anchor='left' open={open} classes={{ paper: classes.drawerPaper, }}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</div>
					<Divider />
					<List>
						<Link to='/Services' className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<LandscapeIcon />
								</ListItemIcon>
								<ListItemText primary={'Services'} />
							</ListItem>
						</Link>
					</List>
					<List>
						<Link to='/Login' className={classes.link}>
							<ListItem button>
								<ListItemIcon>
									<LaunchIcon />
								</ListItemIcon>
								<ListItemText primary={'Login'} />
							</ListItem>
						</Link>
					</List>
				</Drawer>


				<Switch>
					<Route exact path='/'>

					</Route>

					<Route exact path='/services'>
						<Container>
							<Typography>Services</Typography>
						</Container>
					</Route>

					<Route exact path='/login'>
						<div>
							{!isAuthenticated && (
								<Button className="logInButton" color="inherit" onClick={() => loginWithRedirect({})}>
									Log In
								</Button>
							)}

							{isAuthenticated && (
								<Button className="logOutButton" color="inherit" onClick={() => logout()}>
									Log Out
								</Button>
							)}
						</div>
					</Route>
				</Switch>
			</div>
		</Router>

	);
}
