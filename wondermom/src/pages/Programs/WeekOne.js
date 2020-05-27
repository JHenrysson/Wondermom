import React from 'react';
import './WeekOne.css';

const weekOne = props => (
    <div id = "main">
        <div id = "headline">
            <h1> Week One </h1>
        </div>
        <h3>Lorem ipsum dolor sit amet,iaisi ut aure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.</h3>
        <div id= "button">
            <a href="/login" className="btn button">Join Now!</a>
        </div>

        <div id ="cardContainer" className="row row-cols-1 row-cols-md-1">
            <div className="col mb-5">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day One</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day Two</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id ="cardContainer" className="row row-cols-1 row-cols-md-1">
            <div className="col mb-5">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day Three</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day Four</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id ="cardContainer" className="row row-cols-1 row-cols-md-1">
            <div className="col mb-5">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day Five</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Day Six</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );


        export default weekOne;
