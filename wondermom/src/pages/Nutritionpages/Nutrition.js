import React from 'react';
import './Nutrition.css';

function Nutrition() {
    return (     
    <>
    <div className="jumbotron jumbotron-fluid" id="img-jumbo">
        <div className="container">
    </div>
</div>


    <div className="spaceing">
        <h1>Recipes</h1>
    </div>
        
        <div className="container">
        <div className="card-deck">   
          <div className="row justify-content-center">
              <div className="col-md">
                  <div className="card shadow">
                      <div className="card-img-top">
                          <img src="/images/bk2.jpg" alt="Breakfast"/>
                          </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Breakfast</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/breakfast" className="card-link justify-content-center">Show more</a>
                    </div>
                </div>
            </div>

                <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/lh2.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Lunch</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/lunch" className="card-link justify-content-center">Show more</a>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/images/dn3.jpg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Dinner</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/dinner" className="card-link justify-content-center">Show more</a>
                    </div>
                </div>
            </div>
            <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/bk3.jpg" alt="lunch"/>
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
</div>

    
    </>
    );
  }

  export default Nutrition;