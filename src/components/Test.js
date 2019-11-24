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
      fortuneId: undefined,
    };
        this.onFortuneClick = this.onFortuneClick.bind(this);
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
};

onFortuneClick(){
    const fortuneId = this.getRandomNumber();
    this.setState ({ fortuneId: String(fortuneId) });
    
}
  
  

  render() {
    
      const fortuneId = this.state.fortuneId;
      
      let renderFortuneCookie = this.state.allFortunes.filter(cookie => cookie.id === fortuneId).map((cookie) => {
          
          
        return ( 
            
            <div key={cookie.id}>
            
            <span> {cookie.Fortune}</span>
            
            </div>)
    });
      
    
      
      
    return (
   <div>
      <div className="fortune"><span id="fortune--text">{renderFortuneCookie}</span> </div>
      <div className="button--container--todays--fortune">
        <button id="todays--fortune--button" onClick={this.onFortuneClick} >Today´s Fortune</button>
      </div>
    </div>
    );
  }
}

export default Test;


