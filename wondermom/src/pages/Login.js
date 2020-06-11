import React from 'react';
import "./Login.css"
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';   
import { Form, Button } from 'react-bootstrap';

class Login extends Component {  

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

/*signupUser = () => {
  window.auth.createUserWithEmailAndPassword(
    this.email, 
    this.password
  );
  loginUser = () => {
    window.auth.signInWithEmailAndPassword(
      this.email,
      this.password
    );
  }
}
*/

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

  render() {  

  return (
<div className="wrapper">

<div className="background">
</div>

<Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label id="emailText">Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" label="Email" name="email" className={this.state.validation.email.status} onChange={this.validateEmail}/>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label id="passwordText">Password</Form.Label>
  <Form.Control type="password" placeholder="Password" className={this.state.validation.password.status} label="Password"  name="password"  onChange={this.validatePassword}/>
</Form.Group>

<div className="text-center">
  <Button variant="primary btn-block" type="submit" id="loginButton">
    Log In
  </Button>

  <Button variant="primary btn-block" type="button" id="signinButton">
    Sign In
  </Button>
</div>
</Form>

</div> 
  );
  }
};

export default Login;