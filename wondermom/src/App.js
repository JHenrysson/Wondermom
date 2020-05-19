//Basic stuff that is important for things to work
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Navbar Components
import Toolbar from './components/cak/Toolbar/Toolbar';
import SideDrawer from './components/cak/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Pages
import Nutrition from './pages/Nutrition';
import About from './pages/About';
import Home from './pages/Home';
import Programs from './pages/SixWeekProgram';
import Offers from './pages/Offers';

// This is the animation of the navbar
class App extends Component {
    state = {
      sideDrawerOpen: false
    };

//This is the hamburgerbutton
  drawerToogleClickHandler = () => {
    this.setState((prevState)=> {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  
//This is a backdrop for the sidedrawer like a shadow over the background in the browser.
//control by click on site.
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler}/>
    }

//here is the pages//navbar linking.
//the router is linking the pages to the link to="/example" 
    return (
      <Router>
        <div>
          <div style={{marginTop: '56px'}}>  {/* Added to fix spacing between nav bar */}
          <Route exact path="/home" component = {Home}/>
          <Route path ="/nutrition" component ={Nutrition}/>
          <Route path ="/about" component ={About}/>
          <Route path ="/offers" component ={Offers}/>
          <Route path ="/sixWeekProgram" component ={Programs}/>
          <Route path ="/dayOne" component={DayOne}/>
          </div>

            <div style={{height: '100%'}}>
              <Toolbar drawerClickHandler ={this.drawerToogleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen}/>
              {backdrop}
                <main style={{marginTop: '64px'}}>
                </main>
              </div>
          </div>
        </Router>
      );
    }
  }

export default App;