import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./navBarStyle.css"

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button className="logInButton" onClick={() => loginWithRedirect({})}>Log In</button>
            )}

            {isAuthenticated && <button className="logOutButton" onClick={() => logout()}>Log Out</button>}
        </div>
    );
};

export default NavBar;