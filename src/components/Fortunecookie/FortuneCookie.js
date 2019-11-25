/*
    * Here you will meet the Wise dragon
    * Which will ask if you wanna know 
    * what fortune you will get for the day.
*/

import React, { Component } from 'react';
import "./../../App.scss";
import RandomCookie from './RandomCookie';
import wiseDragon from '../../images/Dragonheads/wise.jpg';


function FortuneCookie () { 
            
 return (

    <div className="fortune--wrapper">

        <div>
            <h1 id="cave--wonder--title">Cave of wonder</h1>
        </div>

        <div>
            <h2 id="get--fortune--title">Get your fortune today</h2>
        </div>

        <div className="wisedragon--picture">
            {/* return the imported image to the website */}
            <img src={wiseDragon}  alt="wisedragon" />
        </div>

        <div className="fortune--cookie--text--container">
     
            <h3 className="fortune--cookie--text--title">  "Welcome young one,Wise dragon here" </h3>
            <h3 className="fortune--cookie--text--title">  "Let's see what type of wisdom I can give you today". </h3>
        </div>
        
        <div>  
             {/* Display the RandomCookie Component */}
             <RandomCookie />  
        </div>
    </div>      
     
    );
          
}


export default FortuneCookie;