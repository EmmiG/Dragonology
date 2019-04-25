import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/style.scss';
import Admin from "./components/routes/Admin";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <Admin />
        
        <p className="TEST"> lorem imsum </p>
      </div>
        
    
    );
  }
}

export default App;
