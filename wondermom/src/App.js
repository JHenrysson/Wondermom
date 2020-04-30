import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/cak/Toolbar/Toolbar';
import SideDrawer from './components/cak/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


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
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler ={this.drawerToogleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>Hello im page one</p>
        </main>

      </div>
    );
  }  
}

export default App;