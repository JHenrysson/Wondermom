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
                
                <Link to="program"><b>6 week program</b></Link>
            </li>
            <li> 
                <Link to= "weekone"><b>Week 1</b></Link>
            </li>
            <li>
                <Link to="exercises"><b>Day 1</b></Link>
            </li>
            </div>
            
            <li>
                <Link to="nutrition">Nutrition</Link>
            </li>

            <div className="subchild">
            <li>
                <Link to="breakfast"><b>Breakfast</b></Link>
            </li>
            <li>
                <Link to="lunch"><b>Lunch</b></Link>
            </li>
            <li>
                <Link to="dinner"><b>Dinner</b></Link>
            </li>
            <li>
                <Link to="snacks"><b>Snacks</b></Link>
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