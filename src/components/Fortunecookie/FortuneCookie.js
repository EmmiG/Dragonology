/*
* Here you will meet the Wise dragon
* Which will ask if you wanna know 
* what fortune you will get for the day.
*/



import React, { Component } from 'react';
import "./../../App.scss";
import RandomCookie from './RandomCookie';
import wiseDragon from '../../images/Dragonheads/wise.jpg';



class FortuneCookie extends Component {
    
 constructor(props) {
    super(props);
       this.state = {
        databasecookie: {},
        getCookieMessage: false 
      }; 
     
        
     }  
    

  componentDidMount() {
 console.log('component Mounted');
  }  
    
 getCookieMessage = () =>{
 // Here will the code be for fetching from my database the Fortune id number.
 // To know which Fortune message that will be displayed.
 // The generated number that I will get from the getRandomInt function
 // will be used.
 
 // The question is how to make this work?
   
     
  this.setState({
          //Here I put the state of "randomcookie", change it to true 
          getCookieMessage:true
        });    
     
 }   

 
 
    
    
getRandomInt = (min, max) => {
  min = Math.ceil(25);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min)) + min;

}

 // console.log(getRandomInt());
// expected output: 1 - 25 random fortune cookie
 
   


render () {
    
 // think I need a let variable with a function to bind together getCookieMessage and getRandomInt?
// let displaymessage = code

    
console.log(this.state)
          
        
        
 return (
     
     <div className="fortune--wrapper">
     
     <div>
     <h1>Cave of wonder</h1>
     </div>
     
     <div>
     <h2>Get your fortune today</h2>
     </div>
     
     <div className="wisedragon--picture">
     <img src={wiseDragon}  alt="wisedragon--image" />
     </div>
     
     <div className="fortune--cookie--text--container">
     <h3>  "Welcome young one,Wise dragon here" </h3>
     <h3>  "Let's see what type of wisdom I can give you today". </h3>
     </div>
     
     <main>
     
     {this.state.getRandomInt ? (
          <div className="display-fortune"> 
            
            <div className="paper">
              <div className="fortune">
                {
     /* 
     * Here is a ternary operator, I know this is wrong in the code, but here I will display the message
     * that will be generated from the database   
     */
     }
                <p className="print-fortune"> { this.state.databasecookie.cookies 
 === undefined ? null : this.state.databasecookie.cookies.Fortune} </p>
                
              </div>
            </div>
   
          </div> 
         ) : (
            <div className="cookie">
              <button type="submit" className="get-fortune--btn" onClick={this.getRandomInt}>Today´s Fortune</button>
            </div>
        )}
     
     
     
    
     
     




     </main> 
     </div>
     
            
     
    );
        
        
    
}

}

export default FortuneCookie;