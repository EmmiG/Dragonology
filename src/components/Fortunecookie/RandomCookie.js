/* 
    * RandomCookie Component displayed in the FortuneCookie.js
*/


import React, { Component } from "react";
import "./../../App.scss";

{/* 
    * The class allFortunes.
    * The data column comes from the database table cookies.
    * Will be used with a combination of a fetch file to generate the data.
*/}

class allFortunes {
    id: 0;
    Fortune: "";    
}  

class RandomCookie extends Component {
    
 /*
    * Here the class is being implemented and given
    * a default state with an empty array property. 
    * Another state created named fortuneId with the property of undefined.
 */
    
constructor(props) {
    super(props);
        this.state = {
            allFortunes: [],
            fortuneId: undefined,
    };
}
      
 /* 
    * Fetching the data from the database from a php file.
    * Updating the state of the class with the data fetched.
*/

  fetchFortune = () => {
    fetch("http://localhost/dragonology/server/fetchRandomCookie.php")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ allFortunes: data });
      });
  };

  componentDidMount() {
    this.fetchFortune();
  }

/* generate a random number between 1 - 25. */

getRandomNumber = () => {
  const max = Math.ceil(25);
  const min = Math.floor(1);

  return Math.floor(Math.random() * (min - max)) + max;
};

/*  
    * Making a const with the name fortuneId that is linked to the getRandomNumber arrow function.
    * Meaning that fortuneId will get the same result as getRandomNumber.
    * using setstate to set a new state and converting the fortuneId into a string, 
    * because the data will just be text which is coming from the database.
    * the String will also handle so no errors which may occur relating to the double == and triple ===. 
*/

onFortuneClick = () => {
    const fortuneId = this.getRandomNumber();
    this.setState ({ fortuneId: String(fortuneId) });
    
}
  
  render() {
      
{/*  
    * Create a new const variable called TodaysFortune which gets the
    * result from the const variable fortuneId that is located inside 
    * the arrow function named onFortuneClick.
    
    * Create a let variable function called renderFortuneCookie which will fetch the data from the state allFortunes.
    * Also create an unique key name that is used in filter and map, that is linked to the class name.
    * which will be looping trough the class and fetch the data from 
    * the database and display it on the website.
    * In the filter the cookie.id is linked to the const TodaysFortune.
    * The result will be to display one of the 25 random fortune quotes from the database column Fortune. 
     
*/}
    
  const TodaysFortune = this.state.fortuneId;

  let renderFortuneCookie = this.state.allFortunes.filter(cookie => cookie.id === TodaysFortune).map((cookie) => {

    return ( 

        <div key={cookie.id}>

            <span> {cookie.Fortune}</span>

        </div>)
    });
      
      
    return (
        
        <div>
            <div className="fortune"><span id="fortune--text">{renderFortuneCookie}</span></div>
        
            <div className="button--container--todays--fortune">
        
                <button id="todays--fortune--button" onClick={this.onFortuneClick} >Today´s Fortune</button>
            </div>
        </div>
    );
  }
}

export default RandomCookie;