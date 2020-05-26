import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';

//navbar for the app as a sidedrawer

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses= 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li className="dropdown">
                <Link to="/programs">Programs<i className="fa fa-chevron-down"></i></Link>
                <div className="dropdown-content">

                    <Link to="/sixWeekProgram">6 week program</Link>
                    <Link to="/dayOne">Day 1</Link>
                    <Link to= "/">Week One</Link>
                    </div>
            </li>

            <li>
                <Link to="/nutrition">Nutrition</Link>
            </li>
            <li>
                <Link to="/">Login <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
            </li>

        </ul>
    </nav>
);
};

export default sideDrawer;