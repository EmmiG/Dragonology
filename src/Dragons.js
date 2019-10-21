import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';



function Dragons() {
    

      
      return (
      
      <div>
        <h1> List of dragons </h1>
          
          <ul className="dragon-links">
            <Link to="/waterdragon">
              <li>Water dragon</li>
            </Link>
            <Link to="/wooddragon">
              <li>Wood dragon</li>
            </Link>
            <Link to="/brassdragon">
              <li>Brass dragon</li>
            </Link>
            <Link to="/firedragon">
              <li>Fire dragon</li>
            </Link>
            <Link to="/forestdragon">
              <li>Forest dragon</li>
            </Link>
            <Link to="/lightningdragon">
              <li>Lightning dragon</li>
            </Link>
            <Link to="/icedragon">
              <li>Ice dragon</li>
            </Link>
            <Link to="/earthdragon">
              <li> Earth dragon </li>
            </Link>
            <Link to="/lightdragon">
              <li>Light dragon</li>
            </Link>
            <Link to="/bronzedragon">
              <li>Bronze dragon</li>
            </Link>
            <Link to="/darkdragon">
              <li>Dark dragon</li>
            </Link>
            <Link to="/metaldragon">
              <li>Metal dragon</li>
            </Link>
    
          </ul>
       
        
    </div>

      
      
      );
        
}

export default Dragons;