import React from 'react';
import './Footer.css';

const footer = props => (
    <footer className="page-footer font-small stylish-color-dark pt-4 ">
        <hr></hr>
        <div className="container text-center text-md-left">

            <div className="row">

                <div className="col-md-4 mx-auto">

                    <h5 className="font-weight-bold mt-3 mb-4">Wondermom</h5>
                    <p>The logo will go here or information about the site??? TBD @ meeting lol</p>
                    <img src ="/images/logo1.png" alt={"logo"}/>
                </div>

                <hr className="clearfix w-100 d-md-none"/>

                <div className="col-md-2 mx-auto">

                    <h5 className="font-weight-bold mt-3 mb-4">About</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>

                </div>

                <hr className="clearfix w-100 d-md-none"/>

                <div className="col-md-2 mx-auto">

                    <h5 className="font-weight-bold mt-3 mb-4">Nutrition</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="/">Breakfast</a>
                        </li>
                        <li>
                            <a href="/">Lunch</a>
                        </li>
                        <li>
                            <a href="/">Dinner</a>
                        </li>
                    </ul>
                </div>
                <hr className="clearfix w-100 d-md-none"/>

                <div className="col-md-2 mx-auto">

                    <h5 className="font-weight-bold mt-3 mb-4">Programs</h5>

                    <ul className="list-unstyled">
                        <li>
                            <a href="/SixWeekProgram">Six Week</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <hr/>

        <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
                <h5 className="mb-1">Monthly Newsletter </h5>
            </li>
            <li className="list-inline-item">
                <a href="/" className="btn btn-outline-light ">Sign up!</a>
            </li>
        </ul>

        <hr/>

        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
                <a href="/" className="btn-floating btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="/" className="btn-floating btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="/" className="btn-floating btn-gplus mx-1">
                    <i className="fab fa-google-plus-g"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="/" className="btn-floating btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                </a>
            </li>
        </ul>
    </footer>
);

export default footer;