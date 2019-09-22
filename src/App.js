import React, { Component } from 'react';
import './sass/style.scss';
import Admin from "./components/routes/Admin";
import MainMenu from "./components/MainMenu";




class App extends Component {
  render() {
/* klassen Homepage ska till Homepage.js komponenten senare */
      return (
      <div className="App">
        
        <Admin />
        
        <p className="TEST"> lorem imsum </p>
        
      
        <div className="homepage">
        
            <div className="container_header">
            </div>

           <div className="container_menu">
                <MainMenu />
            </div>

            <div className="container_stats">
            </div>

            <div className="container_facts">
            </div>

            <div className="container_footer">
            </div>
        
        </div>
        
    </div>
    );
  }
}

export default App;
