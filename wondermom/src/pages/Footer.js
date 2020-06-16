import React from 'react';
import './Footer.css';

const footer = props => (

    <footer>
        <hr/>
        <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
                <h5 className="mb-1">Join Wondermom </h5> <button type="button" className="centerButton btn btn-info btn-sm">Sign Up</button>

            </li>


        </ul>


        <hr/>
        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
                <h5>
                    <a href="./home">
                        Home
                    </a>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <a href="./about">
                        About
                    </a>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <a href="./programs">
                        Program
                    </a>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <a href="./nutrition">
                        Nutrition
                    </a>
                </h5>
            </li>
        </ul>
        <hr/>
        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
                <a href="https://www.facebook.com/" className="btn-floating btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i></a>
            </li>
            <li className="list-inline-item">
                <a href="https://twitter.com/" className="btn-floating btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://www.instagram.com/" className="btn-floating btn-gplus mx-1">
                    <i className="fab fa-instagram"> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a href="https://www.linkedin.com/" className="btn-floating btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                </a>
            </li>
        </ul>
        <hr/>

        <div className="text">
            <p className="text-center">© Wondermom 2020</p>
        </div>

    </footer>

);

export default footer;