import React from 'react';
import './Nutrition.css';

function Nutrition() {
    return (     
    <div>
        <div id="img-jumbo" className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="centered">Nutrition</div>
            </div>
        </div>

        <div className="spaceing">
            <h2>Recipes</h2>
        </div>
        
        <div className="container">
            <div className="card-columns">   
          
                <div className="card shadow">
                        <div className="card-img-top">
                            <img src="images/bk2.jpg" alt="Breakfast"/>
                            </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Breakfast</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/breakfast" className="card-link justify-content-center">Show more</a>
                        </div>
                </div>

                
                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="images/lh2.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Lunch</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/lunch" className="card-link justify-content-center">Show more</a>
                    </div>
                
                </div>

                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="images/dn1.jpeg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Dinner</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/dinner" className="card-link justify-content-center">Show more</a>
                    </div>
                </div>

                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="images/bk3.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Snacks</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/snacks" className="card-link justify-content-center">Show more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }

  export default Nutrition;