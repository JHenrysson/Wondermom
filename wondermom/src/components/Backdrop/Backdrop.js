import React from 'react';
import './Backdrop.css';

//this is the shadow behind the sidedrawer or as called the backdrop. 
const backdrop = props => (
    <div className="backdrop" onClick={props.click}/>

);

export default backdrop;