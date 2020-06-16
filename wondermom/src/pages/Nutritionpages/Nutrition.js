import React from 'react';
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
            <h2>Recipes</h2>
        </div>
        
        <div className="container">
            <div className="card-columns">   
          
                <div className="card shadow">
                        <div className="card-img-top">
                            <img src="/wondermom/images/bk2.jpg" alt="Breakfast"/>
                            </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Breakfast</h4>
                        <p className="card-text">
                Some info about good and healthy Breakfast recipes and
                if you click on the button you can see all the breakfast recipes.
                        </p>
                        <a href="breakfast" className="centerButton btn btn-info justify-content-center">Show more</a>
                        </div>
                </div>

                
                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/wondermom/images/lh2.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Lunch</h4>
                        <p className="card-text">
                Some info about good and healthy Lunch recipes and
                if you click on the button you can see all the lunch recipes.
                        </p>
                        <a href="lunch" className="centerButton btn btn-info justify-content-center">Show more</a>
                    </div>
                
                </div>

                <div className="card shadow">
                    <div className="card-img-top">
                    <img src="/wondermom/images/dn1.jpeg" alt="dinner"/> 
                        </div>

                    <div className="card-body text-center">
                    <h4 className="card-title text-center">Dinner</h4>
                    <p className="card-text">
                Some info about good and healthy Dinner recipes and
                if you click on the button you can see all the dinner recipes.
                    </p>
                    <a href="dinner" className="centerButton btn btn-info justify-content-center">Show more</a>
                    </div>
                </div>

                <div className="card shadow">
                      <div className="card-img-top">
                      <img src="/wondermom/images/bk3.jpg" alt="lunch"/>
                          </div>

                        <div className="card-body text-center">
                        <h4 className="card-title text-center">Snacks</h4>
                        <p className="card-text">
                Some info about good and healthy Snacks recipes and
                if you click on the button you can see all the snacks recipes.
                        </p>
                        <a href="snacks" className="centerButton btn btn-info justify-content-center">Show more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  }

  export default Nutrition;