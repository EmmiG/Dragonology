import React, { Component } from 'react';
import './sass/style.scss';
import Admin from "./components/routes/Admin";
import MainMenu from "./components/MainMenu";




class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Admin />
        
        
         <MainMenu />
        
        <p className="TEST"> lorem imsum </p>
        
      </div>
        
    
    );
  }
}

export default App;
