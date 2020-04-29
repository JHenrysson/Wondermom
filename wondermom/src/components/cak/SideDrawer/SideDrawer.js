import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Offers</a></li>
            <li><a href="/">Programs</a></li>
            <li><a href="/">Nutrition</a></li>
            <li><a href="/">Profile</a></li>
        </ul>
    </nav>
);

export default sideDrawer;