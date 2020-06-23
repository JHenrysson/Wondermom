import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './WeekOne.css';


function weekOne(props) {
    let currentUser = props.getUser();
    // reads the data from the database from the logged in or not logged in user
    window.db.collection("progress").doc(currentUser ? '' + currentUser : 'YY96Loo6X6SNZx5tvq1x').get().then(function (field) {
        let data = field.data();

        let days;
        if (data) {
            if (data.days)
                days = data.days;
            else
                days = 0;
        } else
            days = 0;

        document.getElementById("amount").innerHTML = days > 6 ? 6 : days;
    });

    return (
            <div>
                <div id="jumbotronWeekOne" className="jumbotron jumbotron-fluid">
                    <div className="container"></div>
                </div>
                <div id="containerProgress" className="container-fluid p-3">
                    <p id="text4">You completed <span id='amount'>0</span> out of 6 days! </p>
                    <div className="progressHeadline">

                    </div>
                </div>
                <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <div className="card">
                            <img src="/wondermom/images/sixweek2.jpg" className="card-img-top" alt="woman stretching"/>
                            <div className="card-body">
                                <h4 className="card-title">Day One</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="/wondermom/images/sixweek4.jpg" className="card-img-top" alt="Woman tying shoe"/>
                            <div className="card-body">
                                <h4 className="card-title">Day Two</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-5">
                        <div className="card">
                            <img src="/wondermom/images/sixweek1.jpg" className="card-img-top"
                                 alt="Woman next to weights"/>
                            <div className="card-body">
                                <h4 className="card-title">Day Three</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="/wondermom/images/sixweek7.jpg" className="card-img-top"
                                 alt="Woman laying on yoga ball"/>
                            <div className="card-body">
                                <h4 className="card-title">Day Four</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>

                              
            </div>
                        </div>
                    </div>
                </div>
                <div id="cardContainer" className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-5">
                        <div className="card">
                            <img src="/wondermom/images/sixweek3.jpg" className="card-img-top"
                                 alt="Woman on floor stretching "/>
                            <div className="card-body">
                                <h4 className="card-title">Day Five</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="/wondermom/images/sixweek5.jpg" className="card-img-top"
                                 alt="Woman doing a sit-up on yogaball"/>
                            <div className="card-body">
                                <h4 className="card-title">Day Six</h4>
                                <p className="card-text">Here is where the user will find information about the
                                    different daily workout plans. There will be a summary explaining the workout plan
                                    and its areas of focus.
                                    The user can click the button to see that day's workout. </p>
                                <Link to="/dayOne" className="centerButton btn btn-info" role="button">Begin Workout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default weekOne;
