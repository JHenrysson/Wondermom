import React from 'react';
import './Footer.css';

const footer = props => (
    <footer className="page-footer font-small stylish-color-dark pt-4 ">
        <hr></hr>
        <div className="container text-center text-md-left">
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