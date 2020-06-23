import React, { Component } from 'react';
import './Programs.css';
import {Link} from "react-router-dom";


const programs = [
    {
        slug: '6 weeks',
        title: '6 weeks',
        img: './images/6weeks2.jpg',
        description: 'This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete. The user can click the button to see more about the workout plan they choose.',
        href: 'SixWeekProgram'
    },
    {
        slug: '8 weeks',
        title: '8 weeks',
        img: './images/8weeks.jpg',
        description: 'This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete. The user can click the button to see more about the workout plan they choose.',
        href: 'SixWeekProgram'
    },
    {
        slug: '12 weeks',
        title: '12 weeks',
        img: './images/12weeks.jpg',
        description: 'This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete. The user can click the button to see more about the workout plan they choose.',
        href: 'SixWeekProgram'
    }
]

class Programs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <div id="jumbotronForPrograms" className="jumbotron jumbotron-fluid">
                    <div className="container"></div>
                </div>

                <div className="titleBox">
                    <img id= "titleImage" alt="headimg"src="./images/programsHeadlineTextOnly.png"/>
                </div>
                <div id="main">
                    <div className="card-deck">
                        {
                            programs.map(programs => {
                                return (
                                    <div className="card">
                                        <img src={programs.img} className="program-img card-img-top" alt={programs.slug}></img>
                                        <Link id="tryThisButton" to={programs.href} className="centerButton btn btn-info justify-content-center">{programs.title}</Link>
                                        <div className="card-body">
                                            <p className="card-text">{programs.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Programs;