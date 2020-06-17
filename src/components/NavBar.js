import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./NavBar.css";
import Sidetoggle from './SideToggle/Sidetoggle'


const NavBar = props => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    


    return (
        <header className="navbar">
            <nav className="navbar_navigation">
                <div className="navbar__toggle-button">
                    <Sidetoggle click={props.menuClickHandler} />
                </div>
                <div className="navbar_logo"><a href="/">Lime Tree</a></div>
                <div className="navbar_space"></div>
                <div className="navbar_navigation-items">
                    <ul>
                        <li><a href="/">Services</a></li>

                        <div>
                            {!isAuthenticated && (
                                <button onClick={() => loginWithRedirect({})}>Login</button>
                            )}

                            {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );

};

// const { loading } = useAuth0();
  
// if (loading) {
//   return <div>Loading...</div>;
// }

// return (
//   <div className="App">
//     <header>
//       <NavBar />
//     </header>
//   </div>
// );

export default NavBar;

