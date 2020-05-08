import React from 'react';
import './Nutrition.css'; 



function Nutrition() {
    return (
        
    <>
    <div id="button">
        <h2>Nutrition</h2>
        <button className="btn1">Join now!</button>
    </div>

    <div className="spaceing">
        <h3>spaceing</h3>
    </div>

      <div className="container">
          <h2>Breakfast</h2>
          <div className="row justify-content-center">
              <div className="col-md">
                  <div className="card shadow">
                      <div className="card-img-top">
                          <img src="/images/breakfast.jpg" alt="Breakfast"/>
                          </div>

                    <div className="card-body text-left">
                    <h4 className="card-title">Breakfast</h4>
                    <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
            </div>

                <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/lunch.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-left">
                        <h4 className="card-title">Lunch</h4>
                        <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md">
                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/images/dinner.jpg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-left">
                    <h4 className="card-title">Dinner</h4>
                    <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
            </div>
            <div className="col-md">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/lunch.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-left">
                        <h4 className="card-title">Lunch</h4>
                        <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
  }

  export default Nutrition;