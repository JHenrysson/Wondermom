import React, { Component } from 'react';
import './SixWeekProgram.css';

const weeks = [
    {
        slug:"Week One",
        title:"Week One",
        img:"/wondermom/images/sixweek1.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    },
    {
        slug:"Week Two",
        title:"Week Two",
        img:"/wondermom/images/sixweek2.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    },
    {
        slug:"Week Three",
        title:"Week Three",
        img:"/wondermom/images/sixweek3.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    },
    {
        slug:"Week Four",
        title:"Week Four",
        img:"/wondermom/images/sixweek4.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    },
    {
        slug:"Week Five",
        title:"Week Five",
        img:"/wondermom/images/sixweek7.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    },
    {
        slug:"Week Six",
        title:"Week Six",
        img:"/wondermom/images/6weeks.jpg",
        description: "This is where the user will find information about the weekly workouts plans. " +
            "A summary will explain which body parts or areas the user will focus on for the weeks workout plan.  " +
            "The user can click the button to see more about that week's workout or click \"finished\" to mark that week complete. "
    }
]

class sixWeekProgram extends Component {
    constructor(props) {
        super(props);
    }

    countChecked = () => {
        var checked = document.querySelectorAll("input:checked").length;
        console.log(checked);
        var percentage = parseInt(((checked / this.checkboxes.length) * 100), 10);
        this.progressIndicator.style.width = percentage + "%";
        document.querySelector(".progressbar-label").innerHTML = percentage + "%";
    }

    getCheckboxStatus = (document) => {
        window.db.collection("progress").doc('YY96Loo6X6SNZx5tvq1x').get().then(function(field) {
            var databaseStatus = field.data().weeks;
            for (let i = 0; i < document.checkboxes.length; i++) {
                document.checkboxes[i].checked = databaseStatus[i];
            }

            document.countChecked();
        });
    }

    componentDidMount() {
        this.progressIndicator = document.querySelector('.progress-indicator');
        this.checkboxes = document.querySelectorAll("input[type='checkbox']");

        this.getCheckboxStatus(this);
    }

    render() {
        return (
            <div>
                <div id="jumbotronSixWeek" className="jumbotron jumbotron-fluid">
                    <div className="container">
                    </div>
                </div>
                <div className="container-fluid bg-white p-3">
                <div className="progressHeadline">
                    <img src="images/progress5.png" alt="headline"/>
                </div>

        <div className="progressbar-container">
            <div className="progressbar-bar">
                <div className="progress-indicator"></div>
            </div>
            <div className="progressbar-label"></div>
        </div>
                </div>
        <div className="ready"></div>
                <div id="cardContainer" className="row row-cols-1 row-cols-md-3">
                    {
                        weeks.map(weeks =>{
                            return(
                                <div className="col mb-4">
                                    <div className="card">
                                        <img src= {weeks.img} className="card-img-top" alt={weeks.slug}/>
                                        <div className="card-body">
                                            <a href="./weekOne" id= "button"className="centerButton btn btn-info" role="button">Show More</a>

                                            <h4 className="card-title">{weeks.title}</h4>
                                            <p className="card-text"> {weeks.description} </p>
                                            <p>Finished! <input type="checkbox" name="box1" onClick={this.countChecked}/></p>


                                        </div>
                                    </div>
                                </div>

                            )
                        })

                    }

                </div>
            </div>
        );
    }
}



export default sixWeekProgram;