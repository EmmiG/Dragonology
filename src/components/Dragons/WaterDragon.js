/* 
* Water dragon =
* Color: Blue
* Month Number: 1
* Zodiac sign: Capricorn
*/


import React, { Component } from 'react';
import "./../../App.scss";
import SelectBox from './../../features/select-box/index';


class DragonStats {
    id: 0;
    Name: "";
    LatinName: "";
    Personality: "";
    Element: "";
    TreasuredGemstone: "";
    Colour: "";
    Sign: "";
    Nesting: "";
    
}
    
class WaterDragon extends Component {
    
 constructor(props) {
    super(props);
       this.state = {
          allDragons: []
      } 
     
        
     }  
    
   
 fetchAllDragons = () => {
	    fetch("http://localhost/dragonology/server/fetchWater.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ allDragons: data });
	        
	      });
	  }

  

  componentDidMount() {
    this.fetchAllDragons();
    
  }   
    
    
   


render () {
    
    
    
    
    let waterDragon = this.state.allDragons.map((stats) => {
        return ( 
            
            <div key={stats.id}>
            <div><span className="bold">Name:</span><span> {stats.Name}</span></div>
            <div><span className="bold">Latin name:</span><span> {stats.LatinName}</span></div>
            <div><span className="bold">Personality:</span><span> {stats.Personality}</span></div>
            <div><span className="bold">Element:</span><span> {stats.Element}</span></div>
            <div><span className="bold">Treasured gemstone:</span><span> {stats.TreasuredGemstone}</span></div>
            <div><span className="bold">Colour:</span><span> {stats.Colour}</span></div>
            <div><span className="bold">Sign:</span><span> {stats.Sign}</span></div>
            <div><span className="bold">Nesting:</span><span> {stats.Nesting}</span></div>
            
            </div>)
    });
        
        console.log(waterDragon);
        
        
        
 return (
     
     <div>
     <div className="Header">
     
      
     
     <p> TEST </p>
     
     
     </div>
     
     <div className="Stats--container">
     
            <div className="Stats--box">
     
     
                    
                <div>{ waterDragon }</div>
     
            </div>
     
     
     
     </div>
     
     </div>
     
     
    );
        
        
    
}

}

export default WaterDragon;
