//Basic stuff that is important for things to work
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Navbar Components
import Toolbar from './components/cak/Toolbar/Toolbar';
import SideDrawer from './components/cak/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ProgramOverview from './pages/Programs/ProgramOverview';
import DayOne from "./pages/Programs/Exercises";
import SixWeekProgram from "./pages/Programs/Program";
import WeekOne from "./pages/Programs/Week";
import Nutrition from './pages/Nutritionpages/Nutrition';
import Breakfast from './pages/Nutritionpages/Breakfast';
import Lunch from './pages/Nutritionpages/Lunch';
import Dinner from './pages/Nutritionpages/Dinner';
import Snacks from './pages/Nutritionpages/Snacks';
import Footer from "./pages/Footer";
import Login from "./pages/Login";

// This is the animation of the navbar
class App extends Component {
    state = {
      sideDrawerOpen: false,
      progress: {

      }
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

  progress = {
    getProgress: () => {
      return { ...this.state.progress };
    },

    setProgress: (progress) => {
      this.setState({
        progress: progress
      });
    }
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler}/>
    }

//here is the pages//navbar linking.
//the router is linking the pages to the link to="/example" 
    return (
      <Router basename="/wondermom">
        <div>
          <div style={{marginTop: '56px'}}>  {/* Added to fix spacing between nav bar */}
          <Route exact path="/" component = {Home}/>
          <Route path ="/home" component ={Home}/>
          <Route path ="/nutrition" component ={Nutrition}/>
          <Route path ="/breakfast" component ={Breakfast}/>
          <Route path ="/lunch" component ={Lunch}/>
          <Route path ="/dinner" component ={Dinner}/>
          <Route path ="/snacks" component ={Snacks}/>
          <Route path ="/about" component ={About}/>
          <Route path ="/programs" component ={Programs}/>
          <Route path ="/dayOne" render={ () => <DayOne getUser={ this.getUser } /> }/>
          <Route path ="/sixWeekProgram" component={SixWeekProgram}/>
          <Route path ="/weekOne" component={WeekOne}/>
          <Route path ="/Login" component={Login}/>


          </div>

            <div style={{height: '100%'}}>
              <Toolbar drawerClickHandler ={this.drawerToogleClickHandler}/>
              <SideDrawer show={this.state.sideDrawerOpen}/>
              {backdrop}
                <main style={{marginTop: '64px'}}>
                </main>
                <Footer></Footer>
              </div>
          </div>
        </Router>
      );
    }
  }

export default App;