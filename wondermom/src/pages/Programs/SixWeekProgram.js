import React from 'react';
import './SixWeekProgram.css';

const sixWeekProgram = props => (
<div>
    <div id="jumbotronSixWeek" className="jumbotron jumbotron-fluid">
        <div className="container">
        </div>

    </div>
        <div id="button">
            <a href="/login" className="btn button">Join Now!</a>
        </div>
        <div id="cardContainer" className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek1.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week One</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek2.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week Two</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek3.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week Three</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek4.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week Four</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek7.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week Five</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="./images/sixweek8.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h4 className="card-title">Week Six</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default sixWeekProgram;