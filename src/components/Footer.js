import React from 'react';

/* 
    * Footer Component displayed in the MasterContainer.js
*/


export default class Footer extends React.Component {
  render() {
    return (
  
        <div className="footer-contact-info">
        <ul id="footer--unorder--list--useful--links">
          <li className="footer--title"> Useful links: </li>
          <li> w3schools: <a href="https://www.w3schools.com/"> w3schools </a></li>
          <li> Flexbox guide: <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox Guide</a></li>
          <li> React.org: <a href="https://reactjs.org/"> React docs </a></li> 
          <li> Stackoverflow: <a href="https://stackoverflow.com/"> Stackoverflow </a></li> 
        </ul>
        
        <ul id="footer--unorder--list">
          <li className="footer--title"> Contact Info: </li>
          <li> Name: Emmi G </li>
          <li> Occupation: Front End Developer </li>
          <li> Github: <a href="https://github.com/EmmiG/"> My github page Emmi G</a></li>
          <li> Mockup: </li>
        </ul>
        </div>
  
    );
  }
}