import React from 'react';
import './Home.css'
import BootstrapCarousel from  '../components/carousel/BootstrapCarousel'
  
function Home() {
    return (
    <div>
      <div className="jumbotron" id="homejumbotron">
      </div>   

      <div>
        <img id="logohome"src="/wondermom/images/logo1.png" alt="logoimage"/>
      </div>

      <div className="container-md">
        <div className="row">
          <div className="col-md-6 col-xs-6 offset-md-1">
            <p className="texthome">
             This is where there will be an introduction for people visiting the site, and 
             have a summary about the purpose of the site, and what the content is, which are
             workout exericises, diet recommendations, and information.
             The targeted demographic are mothers who want to get back in shape mostly. 
            </p>

          </div>

            <div className="col-md-4 col-xs-6 text-right">
              <BootstrapCarousel></BootstrapCarousel>  
            </div>

          </div>
      </div>

  </div>
   

    );
  }

  export default Home;