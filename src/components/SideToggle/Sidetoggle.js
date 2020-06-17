import React from 'react';

import './Sidetoggle.css';


const sideToggle = props => (
    <button className="toggle_button" onClick={props.click}>
        <div className="button_line"/>
        <div className="button_line"/>
        <div className="button_line"/>
    </button>
)

export default sideToggle; 