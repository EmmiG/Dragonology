import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box/index';
import WaterDragon from './components/Dragons/WaterDragon';

import Nav from './Nav';
import WoodDragon from './components/Dragons/WoodDragon';
import Dragons from './Dragons';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    

      
      /* klassen Homepage ska till Homepage.js komponenten senare */
      return (
      <Router>
      <div className="App">
        
          <Nav />
          <Route path="/dragons" component={Dragons}/>
           <Route path="/wooddragon" component={WoodDragon}/>
          <Route path="/waterdragon" component={WaterDragon}/>
          
            <div>
           
          
                <SelectBox
        
                   items={[
          
          
          
          { value: '', id: 0 },
          
          ]} 
          
          
          
          />
            </div>
           
          
          
        <p className="TEST">  </p>
        
      
        <div className="homepage">
          
         
          
           
        
            <div className="container_header">
          
          
            </div>

           <div className="container_menu">
                
            </div>

            <div className="container_stats">
          
         
            </div>

            <div className="container_facts">
            </div>

            <div className="container_footer">
            </div>
        
        </div>
        
    </div>
</Router>
      
      
      );
        
}

export default App;
