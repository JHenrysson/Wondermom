import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <drawerToggleButton />
            </div>
            <div className="toolbar_logo"><a href="/">MENY</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Offers</a></li>
                    <li><a href="/">Programs</a></li>
                    <li><a href="/">Nutrition</a></li>
                    <li><a href="/">Profile</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;