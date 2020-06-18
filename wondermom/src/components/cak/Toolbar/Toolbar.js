import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {Link} from "react-router-dom";


//navbar for the browser
const toolbar = props => {
    
function logoutUser() {
    window.auth.signOut();
}

console.log("check login", props.getUser());

let authButton = null;

if (props.getUser()) {
  authButton = <Link id="logout" onClick={logoutUser}>Logout<i className="fa fa-sign-in" aria-hidden="true"></i></Link>
} else {
    authButton = <Link to="login">Login/Sign Up<i className="fa fa-sign-in" aria-hidden="true"></i></Link>
}

return (

        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>

                <div className="toolbar_logo">
                   <a href="./home">
                    < img src= "./images/logowm3.png"/></a>
                </div>

                <div className="toolbar_brand">
                   <a href="./home">
                    <img src="./images/logowondermom4.png"/>
                   </a>
                </div>

                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <Link to="home">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>

                        <li className="dropdown">
                            <Link to="programs">Programs<i className="fa fa-chevron-down"></i></Link>
                                <div className="dropdown-content">
                            <Link to="sixWeekProgram">6 Week program</Link>
                            <Link to="weekOne">Week 1 </Link>
                            <Link to="dayOne">Day 1</Link>
                                </div>
                        </li>
                        <li>
                        <li className="dropdown">
                        <Link to="nutrition">Nutrition<i className="fa fa-chevron-down"></i></Link>
                            <div className="dropdown-content">
                        <Link to="breakfast">Breakfast</Link>
                        <Link to="lunch">Lunch</Link>
                        <Link to="dinner">Dinner</Link>
                        <Link to="snacks">Snacks</Link>
                            </div>
                        </li>
                    </li>
                        <li>
                        {authButton}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default toolbar;