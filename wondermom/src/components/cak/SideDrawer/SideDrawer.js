import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';


//navbar for the app as a sidedrawer

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses= 'side-drawer open';
    }

    function logoutUser() {
        window.auth.signOut();
    }

    console.log("check login", props.getUser());

    let authButton = null;

    if (props.getUser()) {
        authButton = <Link to ="home" id="logout" onClick={logoutUser}>Logout <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
    } else {
        authButton = <Link to="login">Login/Sign Up <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
    }

    let programsButton = null;

    if (props.getUser()) {
        programsButton =
            <li className="dropdown">
                <Link to="programs">Programs <i className="fa fa-chevron-down"></i></Link>
                <div className="subchild">
                    <li>
                        <Link to="sixWeekProgram">6 Week program </Link>
                    </li>
                    <li>
                        <Link to="weekOne">Week 1 </Link>
                    </li>
                    <li>
                        <Link to="dayOne">Day 1</Link>
                    </li>
                </div>
            </li>    
    }

    let nutritionButton = null;

    if (props.getUser()) {
        nutritionButton = 
        <li>
        <li className="dropdown">
            <Link to="nutrition">Nutrition <i className="fa fa-chevron-down"></i></Link>
            <div className="subchild">
                <li>
                    <Link to="breakfast">Breakfast</Link>
                </li>
                <li>
                    <Link to="lunch">Lunch</Link>
                </li>
                <li>
                    <Link to="dinner">Dinner</Link>
                </li>
                <li>
                    <Link to="snacks">Snacks</Link>
                </li>
            </div>
        </li>
    </li>
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li>
                <Link to="home">Home</Link>
            </li>

            <li>
                <Link to="about">About</Link>
            </li>

            <li>
                {programsButton}    
            </li>
            <li>
                {nutritionButton}
            </li>
            <li>
            {authButton}
            </li>
        </ul>
    </nav>
    
);
};

export default sideDrawer;