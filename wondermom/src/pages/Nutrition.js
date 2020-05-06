import React from 'react';
import './Nutrition.css'; 



function Nutrition() {
    return (
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-4">
                  <div className="card shadow">
                      <div className="card-img-top" alt="Breakfast">
                          <img src="/images/breakfast.jpg"/>
                          </div>

                    <div className="card-body text-left">
                    <h4 className="card-title">Breakfast</h4>
                    <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
            </div>

                <div className="col-md-4">
                    <div className="card shadow">
                      <div className="card-img-top" alt="lunch">
                      <img src="/images/lunch.jpg"/>
                          </div>

                        <div className="card-body text-left">
                        <h4 className="card-title">Lunch</h4>
                        <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow">
                    <div className="card-img-top" alt="dinner">
                    <img src="/images/dinner.jpg"/> 
                        </div>

                    <div className="card-body text-left">
                    <h4 className="card-title">Dinner</h4>
                    <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }

  export default Nutrition;