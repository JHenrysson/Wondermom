import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/cak/Toolbar/Toolbar';
import SideDrawer from './components/cak/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Pages
import Nutrition from './pages/Nutrition';
import About from './pages/About';
import Home from './pages/Home';
import Programs from './pages/Programs';

import {BrowserRouter as Router, Route} from 'react-router-dom';


 
class App extends Component {
    state = {
      sideDrawerOpen: false
    };

  drawerToogleClickHandler = () => {
    this.setState((prevState)=> {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler}/>
    }

    return (
      <Router>
        <div>
          <Route exact path="/home" component = {Home}/>
          <Route path ="/nutrition" component ={Nutrition}/>
          <Route path ="/about" component ={About}/>
          <Route path ="/programs" component ={Programs}/>

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