import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuth0} from '../react-auth0-spa';
import './navBarStyle.css';
import {ListItem, List, Typography, Box, ListItemText} from '@material-ui/core';
// import {Home} from '@material-ui/icons';
// import Header from './Header';

const NavBar = () => {
	const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

	return (
		<div>
			{!isAuthenticated && (
				<button className="logInButton" onClick={() => loginWithRedirect({})}>
					Log In
				</button>
			)}

			{isAuthenticated && (
				<button className="logOutButton" onClick={() => logout()}>
					Log Out
				</button>
			)}
		</div>
	);
};

export default NavBar;
