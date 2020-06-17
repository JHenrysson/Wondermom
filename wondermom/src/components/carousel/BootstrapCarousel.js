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
                        src={'/wondermom/images/review1.png'}  />
                </Carousel.Item  >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/review3.png'}    />
                </Carousel.Item >  

                <Carousel.Item>  
                    <img className="d-block w-100"  
                    src={'/wondermom/images/review4.png'}   />
                </Carousel.Item>  

            </Carousel>  
        </div>   
            
    );
    }  
};  

export default BootstrapCarousel;  

