import React, { Component } from 'react';
import './sass/style.scss';
import Admin from "./components/routes/Admin";
import DropdownMenu from "./components/DropdownMenu";
import MainMenu from "./components/MainMenu";




class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Admin />
        
        <DropdownMenu />
        
         <MainMenu />
        
        <p className="TEST"> lorem imsum </p>
        <div><img src='./images/Buttons/main_menu_home.png'/> </div>
      </div>
        
    
    );
  }
}

export default App;
