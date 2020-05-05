import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const toolbar = props => (
    <Router>
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>

                <div className="toolbar_logo"><Link to="/">Wonder Mom</Link>
                </div>

                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <Link href="/offers" to="/offers">Offers<i className=""></i></Link>
                        </li>
                        <li>
                            <Link href="about" to ="/about" >About</Link>
                        </li>

                        <li className="dropdown">
                            <Link to="/orogram">Programs<i className="fa fa-chevron-down"></i></Link>
                                <div className="dropdown-content">
                            <Link to="/">6 week program</Link>
                            <Link to="/">Program 2</Link>
                            <Link to="/">Program 3</Link>
                                </div>
                        </li>
                        <li>
                            <Link href="/nutrition" to="/nutrition">Nutrition</Link>
                        </li>

                        <li>
                            <Link to="/">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </Router>
);

export default toolbar;