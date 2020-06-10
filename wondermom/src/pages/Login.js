import React from 'react';
import "./Login.css"
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';   
import { Form, Button } from 'react-bootstrap';

class Login extends Component {  

  render() {  

  return (


<div className="wrapper">

<Form>
<Form.Group controlId="formBasicEmail">
  <Form.Label id="emailText">Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email"/>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  <Form.Label id="passwordText">Password</Form.Label>
  <Form.Control type="password" placeholder="Password"/>
</Form.Group>

<div className="text-center">
  <Button variant="primary btn-block" type="submit" id="loginButton">
    Log In
  </Button>

  <Button variant="primary btn-block" type="submit" id="signinButton">
    Sign In
  </Button>
</div>
</Form>

</div> 

  );
  }
};

export default Login;