import React from 'react';
import './Home.css'
import BootstrapCarousel from  '../components/carousel/BootstrapCarousel'
  
function Home() {
    return (
    <div>
      <div className="jumbotron" id="homejumbotron">
      </div>   

      <div>
        <img id="logohome"src="/images/logo.png" alt="logoimage"/>
      </div>

      <div className="container-md">
        <div className="row">
          <div className="col-md-6 col-xs-6">
            <p className="texthome">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              Feugiat nisl pretium fusce id velit ut tortor pretium viverra. 
              Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. 
              Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. 
              Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. 
              Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              Feugiat nisl pretium fusce id velit ut tortor pretium viverra. 
              Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. 
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