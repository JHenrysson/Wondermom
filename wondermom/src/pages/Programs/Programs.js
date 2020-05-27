import React from 'react';
import './Programs.css';

function Programs() {
    return (
        <div className="main">
            <h1>Programs</h1>
            <div id="main">
                <div className="card-deck">
                    <div className="card">
                        <img src="./images/6weeks.jpg" class="card-img-top" alt="6weeks"></img>
                        <div className="card-body">
                            <h5 className="card-title">6 week program</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="/SixWeekProgram" className="card-link justify-content-center">Try this program</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/8weeks.jpg" class="card-img-top" alt="8weeks"></img>
                        <div className="card-body">
                            <h5 className="card-title">8 week program</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="card-link">Try this program</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/12weeks.jpg" class="card-img-top" alt="12weeks"></img>
                        <div className="card-body">
                            <h5 className="card-title">12 week program</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="card-link">Try this program</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs;