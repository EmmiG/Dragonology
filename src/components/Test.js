import React, { Component } from "react";
import "../App.scss";


class allFortunes {
    id: 0;
    Fortune: "";
    
    
}  

class Test extends Component {
 

    constructor(props) {
    super(props);
    
      
    this.state = {
      allFortunes: [],
    };
  }
      


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


// generate a random number
getRandomNumber = () => {
  const max = Math.ceil(25);
  const min = Math.floor(1);

  return Math.floor(Math.random() * (min - max)) + max;
}
  



  render() {
      
      
      let renderFortuneCookie = this.state.allFortunes.filter(cookie => cookie.id).map((cookie) => {
        return ( 
            
            <div key={cookie.id}>
            
            <span> {cookie.Fortune}</span>
            
            </div>)
    });
      
    
      
      
    return (
   <div>
      <div className="fortune"><span id="fortune--text">{renderFortuneCookie}</span> </div>
      <div className="button--container--todays--fortune">
        <button id="todays--fortune--button" >Today´s Fortune</button>
      </div>
    </div>
    );
  }
}

export default Test;


