import React from 'react';
import './Exercises.css';


const exercises = props => (
    <div>
        <div id="jumbotronDayOne" className="jumbotron jumbotron-fluid">
            <div className="container">

            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-sm grid-item item1">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/plankstretch.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item2">
                    <h3 id ="headerOne" className="card-title">Exercise 1</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                </div>
            </div>
            
            <hr className="line" />

            <div className="row">
                <div className="col-sm grid-item item3">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/mountainclimbers.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item4">
                    <h3 id ="headerOne" className="card-title">Exercise 2</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                </div>
            </div>

            <hr className="line" />

            <div className="row">
                <div className="col-sm grid-item item5">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/planktwist.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item6">
                    <h3 id ="headerOne" className="card-title">Exercise 3</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                </div>
            </div>

            <hr className="line" />

            <div className="row">
                <div className="col-sm grid-item item7">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/squats.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item8">
                    <h3 id ="headerOne" className="card-title">Exercise 4</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                    
                </div>
            </div>

            <hr className="line" />

            <div className="row">
                <div className="col-sm grid-item item9">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/backlift.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item10">
                    <h3 id ="headerOne" className="card-title">Exercise 5</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                </div>
            </div>

            <hr className="line" />

            <div className="row">
                <div className="col-sm grid-item item11">
                    <img className="img-thumbnail align-self-start mr-3"
                        src="/wondermom/images/pushups.gif"
                        alt="Generic placeholder image" />
                </div>
                <div className="col-sm grid-item item12">
                    <h3 id ="headerOne" className="card-title">Exercise 6</h3>
                    <p id="descriptionText">Description on how to best perform the exercise. </p>
                </div>
            </div>
            </div>
            <br />
            <a id="completeWorkout" href="SixWeekProgram" className="btn btn-lg centerButton card-link justify-content-center btn-lg">Complete workout!</a>
        


    </div>






);

export default exercises;