import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Wonder Mom</a>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Offers<i className=""></i></a></li>

                    <li><a href="/">About</a></li>

                    <li className="dropdown">
                        <a href="/">Programs<i className="fa fa-chevron-down"></i></a>
                    <div className="dropdown-content">
                        <a href="/">6 week program</a>
                        <a href="/">Program 2</a>
                        <a href="/">Program 3</a>
                    </div>
                    </li>

                    <li><a href="/">Nutrition</a></li>

                    <li><a href="/">Profile</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;