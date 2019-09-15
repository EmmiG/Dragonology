import React, { Component } from 'react';
import './sass/style.scss';
import Admin from "./components/routes/Admin";
import DropdownMenu from "./components/DropdownMenu";




class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Admin />
        
        <DropdownMenu />
        
        <p className="TEST"> lorem imsum </p>
      </div>
        
    
    );
  }
}

export default App;
