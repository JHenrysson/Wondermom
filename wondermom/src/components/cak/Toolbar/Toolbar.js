import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {Link} from "react-router-dom";

const toolbar = props => (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>

                <div className="toolbar_logo"><Link to="/home">Wonder Mom</Link>
                </div>

                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
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
                    </ul>
                </div>
            </nav>
        </header>
);

export default toolbar;