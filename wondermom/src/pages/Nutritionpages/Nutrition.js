import React from 'react';
import { Link } from "react-router-dom";
import './Nutrition.css';


function Nutrition() {
    return (     
    <div>
        <div id="img-jumbo-nutrition" className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="centered"></div>
            </div>
        </div>

        <div className="spaceing">
        </div>
        
        <div className="container">
            <div className="card-columns">   
          
                <div className="card shadow">
                        <div className="card-img-top">
                            <img src="/wondermom/images/bk2.jpg" alt="Breakfast"/>
                            </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Breakfast</h4>
                        <div className="stars2">
                                        <li className="icon-start">
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star-o m-0"></i>
                                        </li>
                                    </div>

                        <p className="card-text">
                        Some info about good and healthy breakfast recipes.
                        The user can click the button to see all the meal recipes
                        </p>
                        <Link to="breakfast" className="centerButton btn btn-info justify-content-center">Show more</Link>
                        </div>
                </div>

                
                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/wondermom/images/lh2.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Lunch</h4>
                        <div className="stars2">
                                        <li className="icon-start">
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                        </li>
                                    </div>
                        <p className="card-text">
                        Some info about good and healthy lunch recipes. The user can click the button to see all the meal recipes
                        </p>
                        <Link to="lunch" className="centerButton btn btn-info justify-content-center">Show more</Link>
                    </div>
                
                </div>

                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/wondermom/images/dn1.jpeg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Dinner</h4>
                    <div className="stars2">
                                        <li className="icon-start">
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star-o m-0"></i>
                                            <i id="star" className="fa fa-star-o m-0"></i>
                                        </li>
                                    </div>
                    <p className="card-text">
                    Some info about good and healthy dinner recipes.
                    The user can click the button to see all the meal recipes
                    </p>
                    <Link to="dinner" className="centerButton btn btn-info justify-content-center">Show more</Link>
                    </div>
                </div>

                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/wondermom/images/bk3.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Snacks</h4>
                        <div className="stars2">
                                        <li className="icon-start">
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                            <i id="star" className="fa fa-star m-0"></i>
                                        </li>
                                    </div>
                        <p className="card-text">
                        Some info about good and healthy snack recipes.
                        The user can click the button to see all the meal recipes
                        </p>
                        <Link to="snacks" className="centerButton btn btn-info justify-content-center">Show more</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }

  export default Nutrition;