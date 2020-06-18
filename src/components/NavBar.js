import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./navBarStyle.css";
import { makeStyles } from '@material-ui/core/styles';
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
        color: 'white'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
                    <Button color="inherit">Services</Button>
                    <div>
                        {!isAuthenticated && (
                            <Button className="logInButton" color="inherit" onClick={() => loginWithRedirect({})}>Log In</Button>
                        )}

                        {isAuthenticated && <Button className="logOutButton" color="inherit" onClick={() => logout()}>Log Out</Button>}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

