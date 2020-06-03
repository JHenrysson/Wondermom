import React, { Component } from 'react';
import './SixWeekProgram.css';

class sixWeekProgram extends Component {
    constructor(props) {
        super(props);
    }

    countChecked = () => {
        var checked = document.querySelectorAll("input:checked").length;
        console.log(checked);
        var percentage = parseInt(((checked / this.numberOfCheckboxes) * 100), 10);
        this.progressIndicator.style.width = percentage + "%";
        document.querySelector(".progressbar-label").innerHTML = percentage + "%";
    }

    componentDidMount() {
        this.progressIndicator = document.querySelector('.progress-indicator');
        this.numberOfCheckboxes = document.querySelectorAll("input[type='checkbox']").length;
        this.countChecked();
    }

    render() {
        return (
            <div>
                <div id="jumbotronSixWeek" className="jumbotron jumbotron-fluid">
                    <div className="container">
                    </div>

                </div>
                <div id="cardContainer" className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/sixweek1.jpg" className="card-img-top" alt="Woman by weight"/>
                            <div className="card-body">
                                <h4 className="card-title">Week One</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box1" onClick={this.countChecked}/></p>


                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/sixweek2.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Week Two</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box2" onClick={this.countChecked}/></p>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/sixweek3.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Week Three</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box3" onClick={this.countChecked}/></p>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/sixweek4.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Week Four</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box4" onClick={this.countChecked}/></p>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/sixweek7.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Week Five</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box5" onClick={this.countChecked}/></p>

                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/6weeks.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Week Six</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <a href="/weekOne" className="centerButton btn btn-info" role="button">Show More</a>
                                <p>Finished! <input type="checkbox" name="box6" onClick={this.countChecked}/></p>
                            </div>
                        </div>
                    </div>
                    <div className="progressHeadline">
                        <img src="images/progress3.png" alt="headline"/>
                    </div>

                </div>
                <div className="progressbar-container">
                    <div className="progressbar-bar">
                        <div className="progress-indicator"></div>
                    </div>
                    <div className="progressbar-label"></div>
                </div>
                <div className="ready"></div>
            </div>
        );
    }
}



export default sixWeekProgram;