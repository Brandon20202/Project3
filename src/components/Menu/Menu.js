import React from 'react';
import { useAuth0 } from "../../react-auth0-spa";

import './Menu.css'

const menu = props => {
    let drawerClasses = 'menu_drawer';
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    if (props.show) {
        drawerClasses = 'menu_drawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Services</a></li>
            <div>
                {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect({})}>Login</button>
                )}

                {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
            </div>
        </ul>
    </nav>
    )
}




export default menu;