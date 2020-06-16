import React, { Component } from 'react';

class loginLink extends Component{
    render(){
        return(

            <Link to="login">Login/Sign up<i className="fa fa-sign-in" aria-hidden="true"></i></Link>
        )
    }
}

export default loginLink;  