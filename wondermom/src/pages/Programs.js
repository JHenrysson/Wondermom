import React from 'react';
import './Programs.css';

const programs = props => (
    <div id = "main">
        <div id = "headline">
            <p>  6 Week Program </p>
        </div>
        <div id= "button">
            <a href="www.facebook.com" className="button">Join Now!</a>
        </div>
        <div id ="dayChart">
            <table className="table table-hover table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Day #</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default programs;