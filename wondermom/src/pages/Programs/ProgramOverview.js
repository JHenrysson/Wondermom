import React, { Component } from 'react';
import './ProgramOverview.css';
import './ProgramData.js';


class ProgramOverview extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>

                <div id="jumbotronForPrograms" className="jumbotron jumbotron-fluid">
                    <div className="container"></div>
                </div>

                <div className="titleBox">
                    <h2 className="title">Choose your program</h2>
                </div>

                <div id="main">
                    <div className="card-deck">
                        {
                            programs.map(programs => {
                                return (
                                    <div className="card">
                                        <img src={ programs.img } className="program-img card-img-top" alt={ programs.slug }></img>
                                        <a id="tryThisButton" href={ programs.href } className="centerButton card-link justify-content-center">{ programs.title }</a>
                                        <div className="card-body">
                                            <p className="card-text">{ programs.description }</p>

                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/*<div className="card">*/}
                        {/*    <img src="./images/6weeks2.jpg" className="program-img card-img-top" alt="6weeks"></img>*/}
                        {/*    <a id="tryThisButton" href="SixWeekProgram" className="centerButton card-link justify-content-center">6 Weeks</a>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <p className="card-text">This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete.*/}
                        {/*            The user can click the button to see more about the workout plan they choose. </p>*/}
                        {/*        */}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="card">*/}
                        {/*    <img src="./images/8weeks.jpg" className="card-img-top" alt="8weeks"></img>*/}
                        {/*    <a id="tryThisButton" href="SixWeekProgram" className="centerButton card-link justify-content-center">8 Weeks</a>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <p className="card-text">This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete.*/}
                        {/*            The user can click the button to see more about the workout plan they choose. </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="card">*/}
                        {/*    <img src="./images/12weeks.jpg" className="card-img-top" alt="12weeks"></img>*/}
                        {/*    <a id="tryThisButton" href="SixWeekProgram" className="centerButton card-link justify-content-center">12 Weeks</a>*/}
                        {/*    <div className="card-body">*/}
                        {/*        <p className="card-text">This is where the user will find information about the workouts plans offered by Wondermom. Here there will be a summary explaining the workout plan and its areas of focus and time needed to complete.*/}
                        {/*            The user can click the button to see more about the workout plan they choose. </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgramOverview;