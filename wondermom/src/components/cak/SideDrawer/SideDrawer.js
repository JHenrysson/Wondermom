import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

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
                <Link href="/home" to="/home">Home</Link>
            </li>
            <li>
                <Link to="/offers">Offers</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li className="dropdown">
                <Link to="/programs">Programs<i className="fa fa-chevron-down"></i></Link>
                <div className="dropdown-content">

                    <Link to="/">6 week program</Link>
                    <Link to="/">Program 2</Link>
                    <Link to="/">Program 3</Link>
                    </div>
            </li>

            <li>
                <Link to="/nutrition">Nutrition</Link>
            </li>
            <li>
                <Link to="/">Sign Up</Link>
            </li>
            <li>
                <Link to="/">Login</Link>
            </li>
        </ul>
    </nav>

);
};

export default sideDrawer;