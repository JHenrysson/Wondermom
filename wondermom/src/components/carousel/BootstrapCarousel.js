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

                            <Carousel.Caption>  
                                <h3>First Demo </h3>  
                            </Carousel.Caption>  

                </Carousel.Item  >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/workoutbutt.jpg'}    />  

                        <Carousel.Caption>  
                            <h3>Second Demo</h3>  
                        </Carousel.Caption>  

                </Carousel.Item >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/workouthug.jpg'}   />  

                        <Carousel.Caption>  
                            <h3>Third Demo</h3>  
                        </Carousel.Caption>  

                </Carousel.Item>  

            </Carousel>  
        </div>   
            
    );
    }  
};  

export default BootstrapCarousel;  

