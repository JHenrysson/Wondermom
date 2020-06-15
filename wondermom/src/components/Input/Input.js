import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    randomId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    render() {
        const randomId = this.randomId();
        const attributes = (({type, name, placeholder, value}) => ({type, name, placeholder, value}))(this.props);
        
        return (
            <div className="form-group">
                <label htmlFor={ randomId }>{ this.props.label }</label>
                <input 
                    id={ randomId }
                    className={"form-control " + this.props.className }
                    { ...attributes }
                    onChange={ this.props.onChange } />

                <div className="invalid-feedback">
                    { this.props.errorMessage }
                </div>
            </div>
        )
    }
}

export default Input;