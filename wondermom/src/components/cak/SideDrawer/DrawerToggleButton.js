import React from 'react';
import './DrawerToggleButton.css';


const drawerToggleButton = props => (
    <button className="toogle-button" onClick={props.click}>
        <div className ="toogle-button_line"/>
        <div className ="toogle-button_line"/>
        <div className ="toogle-button_line"/>
    </button>
);

export default drawerToggleButton;