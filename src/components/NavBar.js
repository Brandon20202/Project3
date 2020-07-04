import React, { Component } from 'react';
import './navBarStyle.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import SideBar from './SideBar';
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
    },
}));
class ButtonAppBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false
        }
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    handleLogOut() {
        document.cookie = "connect.sid=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";
        axios.get("/authentication/logout")
            .then(res => {
                this.setState({
                    loggedOut: true
                });
            });
    }
    render() {
        if (this.state.loggedOut) {
            return (
                <Redirect to="/" />
            )
        }
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <SideBar />
                    <Button color="inherit" onClick={this.handleLogOut}>Log Out</Button>
                </div>
            </Router>
        );
    }
}
ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ButtonAppBar);