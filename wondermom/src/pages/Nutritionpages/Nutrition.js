import React from 'react';
import './Nutrition.css';

function Nutrition() {
    return (     
    <>
    <div id="headline2">
        <h1>Nutrition</h1>
        <h3>Lorem ipsum dolor sit amet,iaisi ut aure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
        <button className="btn-join">Join now!</button>
    </div>
        <div className="spaceing">
        </div>
        
        <div className="container">
        <div className="card-deck">   
          <div className="row justify-content-center">
              <div className="col-md">
                  <div className="card shadow">
                      <div className="card-img-top">
                          <img src="/images/lh1.jpg" alt="Breakfast"/>
                          </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Breakfast</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/breakfast" className="card-link justify-content-center">Read more</a>
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
                        <a href="/lunch" className="card-link justify-content-center">Read more</a>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/images/lh3.jpg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Dinner</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="/dinner" className="card-link justify-content-center">Read more</a>
                    </div>
                </div>
            </div>
            <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/lh4.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Snacks</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/snacks" className="card-link justify-content-center">Read more</a>
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