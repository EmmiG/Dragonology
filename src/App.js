import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box/index';


import Nav from './Nav';

import HomePage from './components/HomePage';
import Dragons from './Dragons';
import DragonTest from './components/Dragontest/DragonTest';
import FortuneCookie from './components/Fortunecookie/FortuneCookie';

import WaterDragon from './components/Dragons/WaterDragon';
import WoodDragon from './components/Dragons/WoodDragon';
import BrassDragon from './components/Dragons/BrassDragon';
import FireDragon from './components/Dragons/FireDragon';
import ForestDragon from './components/Dragons/ForestDragon';
import LightningDragon from './components/Dragons/LightningDragon';
import IceDragon from './components/Dragons/IceDragon';
import EarthDragon from './components/Dragons/EarthDragon';
import LightDragon from './components/Dragons/LightDragon';
import BronzeDragon from './components/Dragons/BronzeDragon';
import DarkDragon from './components/Dragons/DarkDragon';
import MetalDragon from './components/Dragons/MetalDragon';

import Footer from './components/Footer';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    
      return (
      <Router>
      <div className="App">
        
          <div className="homepage--wrapper">
          
          <div className="dragon--menu--container">
          <Nav />
          <Switch> 
          <Route path="/" exact component={HomePage}/>
          <Route path="/homepage" exact component={HomePage}/>
          <Route path="/dragons" component={Dragons}/>
          <Route path="/dragontest" component={DragonTest}/>
          <Route path="/fortunecookie" component={FortuneCookie}/>
           </Switch>
          </div>
          
          <div className="dragons--facts--container">
           <Switch>
           <Route path="/waterdragon" component={WaterDragon}/>
           <Route path="/wooddragon" component={WoodDragon}/>
           <Route path="/brassdragon" component={BrassDragon}/>
           <Route path="/firedragon" component={FireDragon}/>
           <Route path="/forestdragon" component={ForestDragon}/>
           <Route path="/lightningdragon" component={LightningDragon}/>
           <Route path="/icedragon" component={IceDragon}/>
           <Route path="/earthdragon" component={EarthDragon}/>
           <Route path="/lightdragon" component={LightDragon}/>
           <Route path="/bronzedragon" component={BronzeDragon}/>
           <Route path="/darkdragon" component={DarkDragon}/>
           <Route path="/metaldragon" component={MetalDragon}/>
          </Switch>
           </div>
         
          
          </div>
          
          <div>
          {/* footer Component */} 
          
            </div> 
    
    </div>
{/* end of the wrapper */}     
</Router>
      
             
      );
        
}

export default App;
