import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel' 
import './BootstrapCarousel.css'
class BootstrapCarousel extends Component {  

    render() {  

    return (
        
    <div>

            <Carousel>  
                <Carousel.Item> 
                    <img className="d-block w-100"
                        src={'/wondermom/images/workoutabs.jpg'}  />  
                </Carousel.Item  >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/workoutbutt.jpg'}    />  
                </Carousel.Item >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/workouthug.jpg'}   />  
                </Carousel.Item>  

            </Carousel>  
        </div>   
            
    );
    }  
};  

export default BootstrapCarousel;  

