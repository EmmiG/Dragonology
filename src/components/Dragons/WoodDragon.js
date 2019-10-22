/* 
* Wood dragon =
* Color: Dark Brown
* Month Number: 2
* Zodiac sign: Aquarius
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

class DragonFacts {
    id: 0;
    Traits: "";
    Appearance: "";
    Habitat: "";
    Characteristics: "";
}

class DragonSkills {
    id: 0;
    Name: "";
    Description: "";
}

class DragonGems {
    id: 0;
    Description: "";
    Abilites: "";
    Found: "";
}

class DragonMagic {
    id: 0;
    Name: "";
    Description: "";
}


    
class WoodDragon extends Component {
    
 constructor(props) {
    super(props);
       this.state = {
           DragonStats: [],
           DragonSkills: [],
           DragonGems: [],
           DragonMagic: [],
            
      } 
     
        
     }  
    
   
 fetchOneDragon = () => {
	    fetch("http://localhost/dragonology/server/fetchWood.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonStats: data });
	        
	      });
	  }
 
 fetchOneSkill = () => {
	    fetch("http://localhost/dragonology/server/fetchskills.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonSkills: data });
	        
	      });
	  }
 
  fetchOneGem = () => {
	    fetch("http://localhost/dragonology/server/fetchGem.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonGems: data });
	        
	      });
	  }
  
    fetchMagic = () => {
	    fetch("http://localhost/dragonology/server/fetchMagic.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonMagic: data });
	        
	      });
	  }

  

  componentDidMount() {
      this.fetchOneDragon();
      this.fetchOneSkill();
      this.fetchOneGem();
       this.fetchMagic();
    
  }   
    
    
   


render () {
    
    
    
    
    let waterDragonStats = this.state.DragonStats.map((stats) => {
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
        
        
        let waterDragonFactsPart1 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div key={facts.id}>
            
            <div> <h1 className="Title">Common Traits</h1><span> {facts.Traits}</span></div>
            
             
            </div>)
    });
        
            
   let waterDragonSkills = this.state.DragonSkills.map((skill) => {
        return ( 
            
            <div key={skill.id}>
            
            <div> 
            
            <span className="bold"> {skill.Name}: </span>
            <span> {skill.Description}</span>
            </div>
            
            
            
            </div>)
    });   
       
       
   let waterDragonMagic = this.state.DragonMagic.map((magic) => {
        return ( 
            
            <div key={magic.id}>
            
            <div> 
            <span className="bold"> {magic.Name}: </span>
            <span> {magic.Description}</span>
            </div>
            
            
            
            </div>)
    });  
       
    
            let waterDragonFactsPart2 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div key={facts.id}>
            
            <div> <h1 className="Title">Appearance</h1><span> {facts.Appearance}</span></div>
            <div> <h1 className="Title">Habitat</h1><span> {facts.Habitat}</span></div>
            
             
            </div>)
    });
        
       

    let waterDragonGem = this.state.DragonGems.map((gem) => {
        return ( 
            
             <div key={gem.id}>
            
            <div className="Gem--box"> 
            <h1 className="Title">Water dragon´s treasured gemstone:</h1>
            <p>{gem.Description}:</p> 
            <p>{gem.Abilities}</p>
            <p>{gem.Found}</p>
            </div>
            </div>)
            
    });
        

            let waterDragonFactsPart3 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div key={facts.id}>
            

            <div> <h1 className="Title">Characteristics</h1><span> {facts.Characteristics}</span></div>
            
             
            </div>)
    });
        
             
        
        
 return (
     
     <div className="Fact--Wrapper">
     <div className="Header"></div>
     
     
     
     <div className="Stat--Container">
     
            <div className="Stat--paragraph">
     
                { waterDragonStats }
     
            </div>
     
     
     
     <div className="Fact--Container">
     
     
     { waterDragonFactsPart1 }
     
     <h1 className="Title">Skills:</h1>
     { waterDragonSkills }
     
     <h1 className="Title">Magic:</h1>
      { waterDragonMagic }
     
      { waterDragonFactsPart2 }
     
     { waterDragonGem }
     
     { waterDragonFactsPart3 }
     

     </div>
     
     </div>
     
     </div>
     
     
    );
        
        
    
}

}


export default WoodDragon;
