import React from 'react';
import './SideDrawer.css';
//import drawerToggleButton from './DrawerToggleButton';

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

            <li className="dropdown">
                <a href="/">Programs</a>
                <div className="dropdown-content">

                    <a href="/">6 week program</a>
                    <a href="/">Program 2</a>
                    <a href="/">Program 3</a>
                    </div>
            </li>

            <li>
                <a href="/">Nutrition</a>
            </li>
            <li>
                <a href="/">Profile</a>
            </li>
            <li><a href="/">Sign Up</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
);
};

export default sideDrawer;