import React from 'react';
import './SideDrawer.css';
import drawerToggleButton from './DrawerToggleButton';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses= 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Offers</a>
            </li>
            <li>
                <a href="/">Programs</a>
            </li>
            <li>
                <a href="/">Nutrition</a>
            </li>
            <li>
                <a href="/">Profile</a>
            </li>
        </ul>
    </nav>
);
};

export default sideDrawer;