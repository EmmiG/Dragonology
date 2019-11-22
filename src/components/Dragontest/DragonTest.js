/*
* Which dragon are you? Take a test to know which type
* of dragon you are, does your personality fit with your dragon.
* Do the dragon match your Zodiac sign find out.
*/

import React from 'react';
import "./../../App.scss";
import underconstruction from './../../images/under_construction.jpg';

 


function DragonTest() {
    

      
      return (
      
      <div className="dragontest--wrapper">
           <div className="dragontest--container">
                <h1 className="dragontest--title"> Welcome to Dragon Test Page </h1>
          
                <p className="dragontest--text"> 
          Sadly the page is under construction for the moment. Sorry for the inconvenience.  
                </p>
                        <div className="under-construction">
                       <img alt="underconstruction" src={underconstruction}  />
                            
                        </div>
          
        </div>
          
        
          
          
          
          
          
       
        
    </div>

      
      
      );
        
}

export default DragonTest;