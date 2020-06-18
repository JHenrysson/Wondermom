import React, {Component} from 'react';
import './DayOne.css';

const exercises = [
    {
        slug: 'Exercise 1',
        title: 'Exercise 1',
        img: '/wondermom/images/plankstretch.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    },
    {
        slug: 'Exercise 2',
        title: 'Exercise 2',
        img: '/wondermom/images/mountainclimbers.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    },
    {
        slug: 'Exercise 3',
        title: 'Exercise 3',
        img: '/wondermom/images/planktwist.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    },
    {
        slug: 'Exercise 4',
        title: 'Exercise 4',
        img: '/wondermom/images/squats.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    },
    {
        slug: 'Exercise 5',
        title: 'Exercise 5',
        img: '/wondermom/images/backlift.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    },
    {
        slug: 'Exercise 6',
        title: 'Exercise 6',
        img: '/wondermom/images/pushups.gif',
        description: 'Description on how to best perform the exercise.',
        reps: 'Do 3 sets with 10 reps.',
        check: 'Check when done'
    }
];


class dayOne extends Component {
    constructor(props) {
        super(props);
    }

    saveDay = (page) => {
        let currentUser = window.auth.onAuthStateChanged(function(currentUser) {
            window.db.collection("progress").doc(currentUser ? '' + currentUser.uid : 'YY96Loo6X6SNZx5tvq1x').get().then(function (field) {
                var databaseStatus = field.data().days;

                if (databaseStatus) {
                    
                } else {
                    databaseStatus = [];
                    for (let i = 0; i < page; i++) {
                        databaseStatus.push(i === page-1);
                    }

                    window.db.collection("progress").doc(currentUser ? '' + currentUser.uid : 'YY96Loo6X6SNZx5tvq1x').set({days: databaseStatus, weeks: field.data().weeks})
                }
            });
        });
    }

    render() {
        return (
    <div>
        <div id="jumbotronDayOne" className="jumbotron jumbotron-fluid">
            <div className="container">

            </div>
        </div>

        <div className="container">
            {
                exercises.map(exercises => {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-sm grid-item item1">
                                    <img className="img-thumbnail align-self-start mr-3"
                                        src={exercises.img}
                                        alt={exercises.slug} />
                                </div>
                                <div className="col-sm grid-item item2">
                                    <h3 id="headerOne" className="card-title">{exercises.title}</h3>
                                    <p id="descriptionText">{exercises.description} </p>
                                    <p id="descriptionText">{exercises.reps} </p>
                                    <br />
                                    <label className="checkboxContainer">
                                        <input type="checkbox" /> {exercises.check}
                                        <span className="checkmark" />
                                    </label>
                                </div>
                            </div>
                            <hr className="line" />
                        </div>
                    )
                })
            }
        </div>
        <br />
        <a id="completeWorkout" href="WeekOne" className="btn btn-lg centerButton card-link justify-content-center btn-lg" onClick={this.saveDay(1)}>Complete workout!</a>



    </div>






);}}

export default dayOne;