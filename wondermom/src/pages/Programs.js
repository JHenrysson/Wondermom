import React from 'react';
import './Programs.css';

function Programs() {
    return (
        <div id="main">
            <h1>Programs</h1>
            <div id="main">
                <div class="card-deck">
                    <div class="card">
                        <img src="./images/6weeks.jpg" class="card-img-top" alt="6weeks"></img>
                        <div class="card-body">
                            <h5 class="card-title">6 week program</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="card-link">Try this program</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./images/8weeks.jpg" class="card-img-top" alt="8weeks"></img>
                        <div class="card-body">
                            <h5 class="card-title">8 week program</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="card-link">Try this program</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./images/12weeks.jpg" class="card-img-top" alt="12weeks"></img>
                        <div class="card-body">
                            <h5 class="card-title">12 week program</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="card-link">Try this program</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Programs;