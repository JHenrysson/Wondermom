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
                <Link to="home">Home</Link>
            </li>

            <li>
                <Link to="about">About</Link>
            </li>

            <li>
                <Link to="programs">Programs</Link>
            </li>

            <div className="subchild">
            <li>
                
                <Link to="sixWeekProgram">6 week program</Link>
            </li>
            <li>
                <Link to="dayOne">Day 1</Link>
            </li>
            <li> 
                <Link to= "weekone">Week 1</Link>
            </li>
            </div>
            
            <div className="headmenu">
            <li>
                <Link to="nutrition">Nutrition</Link>
            </li>
            </div>

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
            <li>
                <Link to="login">Login/Sign up<i className="fa fa-sign-in" aria-hidden="true"></i></Link>
            </li>

        </ul>
    </nav>
    
);
};

export default sideDrawer;