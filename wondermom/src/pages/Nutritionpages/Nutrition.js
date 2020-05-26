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
        <h2>Breakfast</h2>
    </div>

    <div className="container">
          <div className="row jusify-content-center">
              <div className="col-4-lg">
                  <div className="card">
                  <div className="card shadow">
                      <div className="card-img-top">
                        <img src="/images/bk1.jpeg" alt="Breakfast"/>
                        </div>
                        <div className="card-img-overlay text-center">

                        </div>
                    <div className="card-body text-center">
                    <h4 className="card-title">Acai Bowl</h4>
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    
                    <a href="/Breakfast"className="card-link justify-content-center">Read more</a>
                    </div>
                </div>
            </div>
            </div>
            <div className="col-4-lg">
                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/images/lh1.jpg" alt="lunch1"/> 
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
            <div className="col-4-lg">
                    <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/images/dn1.jpeg" alt="Dinner1"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Title</h4>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/dinner" className="card-link justify-content-center">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </>
    );
  }

  export default Nutrition;