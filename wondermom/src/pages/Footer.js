import React from 'react';
import './Footer.css';

const footer = props => (
    <footer class="page-footer font-small stylish-color-dark pt-4 ">
        <hr></hr>
        <div class="container text-center text-md-left">

            <div class="row">

                <div class="col-md-4 mx-auto">

                    <h5 class="font-weight-bold mt-3 mb-4">Wondermom</h5>
                    <p>The logo will go here or information about the site??? TBD @ meeting lol</p>

                </div>

                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                    <h5 class="font-weight-bold mt-3 mb-4">About</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="#!">Home</a>
                        </li>
                    </ul>

                </div>

                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                    <h5 class="font-weight-bold mt-3 mb-4">Nutrition</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="/Nutrition">Breakfast</a>
                        </li>
                        <li>
                            <a href="">Lunch</a>
                        </li>
                        <li>
                            <a href="">Dinner</a>
                        </li>
                    </ul>
                </div>
                <hr class="clearfix w-100 d-md-none"/>

                <div class="col-md-2 mx-auto">

                    <h5 class="font-weight-bold mt-3 mb-4">Programs</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="/SixWeekProgram">Six Week</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <hr/>

        <ul class="list-unstyled list-inline text-center py-2">
            <li class="list-inline-item">
                <h5 class="mb-1">Monthly Newsletter </h5>
            </li>
            <li class="list-inline-item">
                <a href="#!" class="btn btn-outline-light ">Sign up!</a>
            </li>
        </ul>

        <hr/>

        <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
                <a class="btn-floating btn-fb mx-1">
                    <i class="fab fa-facebook-f"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-tw mx-1">
                    <i class="fab fa-twitter"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-gplus mx-1">
                    <i class="fab fa-google-plus-g"> </i>
                </a>
            </li>
            <li class="list-inline-item">
                <a class="btn-floating btn-li mx-1">
                    <i class="fab fa-linkedin-in"> </i>
                </a>
            </li>
        </ul>
    </footer>
);

export default footer;