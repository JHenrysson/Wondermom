import React from 'react';
import "./Signup.css"
import { Component } from 'react'
import { Form } from 'react-bootstrap';
import {Link} from "react-router-dom";

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            validation: {
                email: {
                    status: 'pristine',
                    error: ''
                },
                password: {
                    status: 'pristine',
                    error: ''
                },
                form: {
                    disabled: true,
                    error: ''
                }
            }
        }
    }

    signup = () => {
        window.auth.createUserWithEmailAndPassword(
            this.email,
            this.password
        ).then(() => {
            window.location.href = '/wondermom';
        }).catch(error => {

        });
    }

    validateEmail = (e) => {
        const value = e.target.value;
        const validation = { ...this.state.validation };
        const newStatus = /^[^@]+@[^@]+$/.test(value) ? 'is-valid' : 'is-invalid';
        if (newStatus != validation.email.status) {
            validation.email.status = newStatus;
            validation.email.error = newStatus == 'is-invalid' ? 'Not a valid email address!' : '';
            this.setState({ validation });
        }
        this.email = value;
        this.validateForm();
    }


    validatePassword = (e) => {
        const value = e.target.value;
        const validation = { ...this.state.validation };
        const newStatus = value.length > 5 ? 'is-valid' : 'is-invalid';
        if (newStatus != validation.password.status) {
            validation.password.status = newStatus;
            validation.password.error = newStatus == 'is-invalid' ? 'Must be at least 6 characters!' : '';
            this.setState({ validation });
        }
        this.password = value;
        this.validateForm();
    }

    validateForm() {
        const validation = { ...this.state.validation };
        const isFormDisabled = validation.email.status != 'is-valid' || validation.password.status != 'is-valid';
        if (isFormDisabled != validation.form.disabled) {
            validation.form.disabled = isFormDisabled;
            this.setState({ validation });
        }
    }

    render() {

        return (
            <div className="wrapper">
                <div className="form-container">
                    <Form>
                        <div className="text-center">
                            <h3 id="signUp">Sign up</h3>
                        </div>
                        <Form.Group controlId="formName">
                            <Form.Label id="emailText">Firstname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Firstname" label="firstname" name="firstname" />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label id="emailText">Lastname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Lastname" label="lastname" name="lastname" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label id="emailText">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" label="Email" name="email" className={this.state.validation.email.status} onChange={this.validateEmail} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label id="passwordText">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className={this.state.validation.password.status} label="Password" name="password" onChange={this.validatePassword} />
                            <Form.Text className="textpassword">
                                Password needs to be at least 6 characters.
              </Form.Text>
                        </Form.Group>

                        <div className="text-center">

                            <Link className="primary btn-block" type="button" id="signupButton" disabled={this.state.validation.form.disabled} onClick={this.signup} >
                            Sign Up
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
};

export default Signup;