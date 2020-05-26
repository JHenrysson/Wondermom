import React from 'react';
import './Nutrition.css';

function Dinner() {
    return (
        <>
        <div id="headline2">
            <h1>Dinner</h1>
        </div>
    
        <div className="spaceing">
        </div>
    
        <div className="card-deck">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md">
                  <div className="card shadow">
                      <div className="card-img-top">
                          <img src="/images/dn1.jpeg" alt="Dinner1"/>
                          </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Title</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="card-link justify-content-center">Read more</button>
                    </div>
                </div>
            </div>

                <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/dn2.jpg" alt="Dinner2"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="card-link justify-content-center">Read more</button>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/images/dn3.jpg" alt="Dinner3"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Title</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="card-link justify-content-center">Read more</button>
                    </div>
                </div>
            </div>
            <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/dn4.jpeg" alt="Dinner4"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button className="card-link justify-content-center">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        </>
        );
      }

  export default Dinner;