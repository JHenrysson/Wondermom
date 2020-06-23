import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

const footer = props => (

    <footer>
        <hr/>

        <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-block">
            <img id="logo"src="/wondermom/images/logowondermom4.png" alt="logofooter"/>
            </li>

            <li className="list-inline-item">
                <h5>
                    <Link to="home">Home</Link>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <Link to="about">About</Link>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <Link to="programs">Program</Link>
                </h5>
            </li>
            <li className="list-inline-item">
                <h5>
                    <Link to="nutrition">Nutrition</Link>
                </h5>
            </li>


            <li className="list-inline-item">
                <h5><a href="mailto:someoneImportant@wondermom.se">Contact Us</a></h5>
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