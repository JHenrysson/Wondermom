import React from 'react';
import './WeekOne.css';

const weekOne = props => (
    <div>
        <div id="jumbotronWeekOne" className="jumbotron jumbotron-fluid">
            <div className="container"></div>

            </div>

            <div id= "button">
            <a href="/login" className="btn button">Join Now!</a>
        </div>

        <div id ="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/weekOnehighFive.jpg" className="card-img-top" alt="Women High Five"/>
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
                    <img src="./images/sixweek4.jpg" className="card-img-top" alt="Woman tying shoe"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Two</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id ="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-5">
                <div className="card">
                    <img src="./images/sixweek1.jpg" className="card-img-top" alt="Woman next to weights"/>
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
                    <img src="./images/sixweek8.jpg" className="card-img-top" alt="Woman doing sit-up"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Four</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id ="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-5">
                <div className="card">
                    <img src="./images/sixweek3.jpg" className="card-img-top" alt="Woman on floor stretching "/>
                    <div className="card-body">
                        <p> className="card-title">Day Five</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek5.jpg" className="card-img-top" alt="Woman doing a sit-up on yogaball"/>
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