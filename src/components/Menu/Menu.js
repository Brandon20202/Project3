import React from 'react';

import './Menu.css'

const menuDrawer = props => {
    let drawerClasses = 'menu_drawer';
    if (props.show) {
        drawerClasses = 'menu_drawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Services</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
    )
}

export default menuDrawer;