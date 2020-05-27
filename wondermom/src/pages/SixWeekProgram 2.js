import React from 'react';
import './Programs/SixWeekProgram.css';

const sixWeekProgram = props => (
    <div id = "main">
        <div id = "headline">
            <p> 6 Week Program </p>
        </div>
        <div id= "button">
            <a href="www.facebook.com" className="button">Join Now!</a>
        </div>
        <div id ="cardContainer" className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">
                    <img src="https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Week One</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
                        </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2019/10/cheap-home-workout-equipment-feature.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Week Two</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="https://www.outsideonline.com/sites/default/files/styles/full-page/public/2020/03/18/at-home-workout-yoga_h.jpg?itok=S0R1vbEk" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Week Three</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                        </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="https://media4.s-nbcnews.com/j/newscms/2019_26/2909556/190625-yoga-stock-cs-1245p_446d66606391ef5abb6f27856216325a.fit-760w.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Week Four</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-tying-shoe-on-sports-mat-royalty-free-image-1587302457.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Week Five</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                    <img src="https://dynamicmedia.zuza.com/zz/m/original_/8/8/8835af72-db2b-40fc-a533-96a5d2b15264/workout___Super_Portrait.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Week Six</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    <div id ={"progressBar"}>
        <p> the progress bar will go here</p>
    </div>



    </div>
);

export default sixWeekProgram;