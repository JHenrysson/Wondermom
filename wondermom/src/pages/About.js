import React from 'react';
import './About.css';


function About() {
    return (
      <>

<div id="jumbotronabout" className="jumbotron jumbotron-fluid px-0">
                    <div className="container-fluid px-0">
                    </div>
                </div>

                <div className="info-panel text-center">
    <div class="container p-5">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="info-header py-5">
      <h2 id="aboutrubrik" className="pb-3 text-dark">Created to help moms to live a better, stronger and healthier life.</h2>
      
            </div>
         </div>
         </div>
    </div>
 </div>
 </div>
 
 
 <section className="container">
      <div className="row align-items-center content">
          <div className="col-lg-6 order-2 order-lg-1">
            <img src="./images/health.jpg" alt="" class="img-fluid"></img>
            </div>    
            <div className="col-lg-6 text-center order-1 order-lg-2">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-10 mb-5 blurb m-md-0">
              
                        <h3 className="text-weight-bold">THE WONDERMOM STORY</h3>
                        <p className="lead">Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
                    dlolo Lorem ipsus dolor lorem ipsis dlolo. Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo</p>

                    </div>
                </div>
            </div>
            </div>
            </section>

<section className="container mt-5">
            <div className="row align-items-center content">
            <div className="col-lg-6 text-center">
              <div className="row justify-content-center">
              <div className="col-10 col-lg-10 mb-5 mb-md-0 blurb m-4 m-md-0">
                        <h3 className="text-weight-bold">OUR MISSION</h3>
                        <p className="lead">Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
                    dlolo Lorem ipsus dolor lorem ipsis dlolo. Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis dlolo Lorem ipsus dolor lorem ipsis 
            dlolo Lorem ipsus dolor lorem ipsis dlolo </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
            <img src="images/heart.jpg" alt="" class="img-fluid"></img>
            </div>
            </div>
        </section>
 



     </>
  

      
      );
    }



  export default About;