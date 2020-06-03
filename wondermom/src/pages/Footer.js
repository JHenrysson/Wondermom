import React from 'react';
import './Footer.css';

const footer = props => (

    <footer>
        <hr/>
        <ul className="list-unstyled list-inline text-center py-2">
            <div className="row">
                <li className="col-sm list-inline-item">
                    <h5>
                        <a href="/home">
                            Home
                        </a>
                    </h5>
                </li>
                <li className="col-sm list-inline-item">
                    <h5>
                        <a href="/about">
                            About
                        </a>
                    </h5>
                </li>
                <li className="col-sm list-inline-item">
                    <h5>
                        <a href="/programs">
                            Program
                        </a>
                    </h5>
                </li>
                <li className="col-sm list-inline-item">
                    <h5>
                        <a href="/nutrition">
                            Nutrition
                        </a>
                    </h5>
                </li>
            </div>
        </ul>
        <hr/>
        <div className="text">
            <p className="text-center">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex
                communi. At nos hinc posthac, sitientis piros Afros. </p>
        </div>
        <hr/>
        <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item">
                <h5 className="mb-1">Join Wondermom </h5>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-light">Sign Up</button>
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
    </footer>

);

export default footer;