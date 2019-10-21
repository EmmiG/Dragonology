import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';




function Nav() {

      
      return (
      
      <div>
       <nav> 
          <h3> Logo </h3>
          <ul className="nav-links">
          <Link to="/homepage">
          <li> Home </li>
          </Link>
          <Link to="/dragons">
          <li> Dragons </li>
          </Link>
          <Link to="/dragontest">
          <li> Dragon Test </li>
          </Link>
          <Link to="/fortunecookie">
          <li> Fortune Cookie </li>
          </Link>
          </ul>
          </nav>
          
       
        
    </div>

      
      
      );
        
}

export default Nav;