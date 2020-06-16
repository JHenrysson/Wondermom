import React, { Component } from 'react';

class logoutLink extends Component{
    render(){
        return(

            <i className="logout" onClick={firebase.doSignOut}>Logout</i>
        )
    }
}

export default logoutLink;  