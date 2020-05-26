import React from 'react';
import './Nutrition.css';

function Lunch() {
    return (
        <>
        <div id="headline2">
            <h1>Lunch</h1>
        </div>
    
        <div className="spaceing">
        </div>
        <div className="card-deck">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md">
                  <div className="card shadow">
                      <div className="card-img-top">
                          <img src="/images/lh1.jpg" alt="Breakfast"/>
                          </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Title</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/lunch" className="card-link justify-content-center">Read more</a>
                    </div>
                </div>
            </div>

                <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/lh2.jpg" alt="lunch"/>
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
                    <img src="/images/lh3.jpg" alt="dinner"/> 
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
                      <img src="/images/lh4.jpg" alt="lunch"/>
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

  export default Lunch;