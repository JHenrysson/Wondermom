import React from 'react';
import './Week.css';

const week = props => (
    <div>
        <div id="jumbotronWeekOne" className="jumbotron jumbotron-fluid">
            <div className="container"></div>
        </div>
        <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                    <img src="/wondermom/images/sixweek2.jpg" className="card-img-top" alt="woman stretching"/>
                    <div className="card-body">
                        <h4 className="card-title">Day One</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout. </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="/wondermom/images/sixweek4.jpg" className="card-img-top" alt="Woman tying shoe"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Two</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout. </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-5">
                <div className="card">
                    <img src="/wondermom/images/sixweek1.jpg" className="card-img-top" alt="Woman next to weights"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Three</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout.  </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="/wondermom/images/sixweek7.jpg" className="card-img-top" alt="Woman laying on yoga ball"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Four</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout. </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-5">
                <div className="card">
                    <img src="/wondermom/images/sixweek3.jpg" className="card-img-top" alt="Woman on floor stretching "/>
                    <div className="card-body">
                        <h4 className="card-title">Day Five</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout. </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="/wondermom/images/sixweek5.jpg" className="card-img-top" alt="Woman doing a sit-up on yogaball"/>
                    <div className="card-body">
                        <h4 className="card-title">Day Six</h4>
                        <p className="card-text">Here is where the user will find information about the different daily workout plans. There will be a summary explaining the workout plan and its areas of focus.
                            The user can click the button to see that day's workout. </p>
                        <a href="/dayOne" className="centerButton btn btn-info" role="button">Show More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default week;