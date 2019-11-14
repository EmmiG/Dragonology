/* 
* Bronze dragon =
* Color: Bronze
* Month Number: 10
* Zodiac sign: Libra
*/

import React, { Component } from 'react';
import "./../../App.scss";
import BronzeDragonhead from '../../images/Dragonheads/bronze.jpg';



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


    
class BronzeDragon extends Component {
    
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
	    fetch("http://localhost/dragonology/server/fetchBronze.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonStats: data });
	        
	      });
	  }
 
 fetchOneSkill = () => {
	    fetch("http://localhost/dragonology/server/fetchSkillsBronze.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonSkills: data });
	        
	      });
	  }
 
  fetchOneGem = () => {
	    fetch("http://localhost/dragonology/server/fetchGemBronze.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonGems: data });
	        
	      });
	  }
  
    fetchMagic = () => {
	    fetch("http://localhost/dragonology/server/fetchMagicBronze.php")
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
    

    let bronzeDragonStats = this.state.DragonStats.map((stats) => {
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
        
        
        let bronzeDragonFactsPart1 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
            
            <div> <h1 className="title">Common Traits</h1><span> {facts.Traits}</span></div>
            
             
            </div>)
    });
        
            
   let bronzeDragonSkills = this.state.DragonSkills.map((skill) => {
        return ( 
            
            <div className="parchment--text" key={skill.id}>
            
            <div> 
            
            <span className="bold"> {skill.Name}: </span>
            <span> {skill.Description}</span>
            </div>
            
            
            
            </div>)
    });   
       
       
   let bronzeDragonMagic = this.state.DragonMagic.map((magic) => {
        return ( 
            
            <div  className="parchment--text" key={magic.id}>
            
            <div> 
            <span className="bold"> {magic.Name}: </span>
            <span> {magic.Description}</span>
            </div>
            
            
            
            </div>)
    });  
       
    
            let bronzeDragonFactsPart2 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
            
            <div> <h1 className="title">Appearance</h1><span> {facts.Appearance}</span></div>
            <div> <h1 className="title">Habitat</h1><span> {facts.Habitat}</span></div>
            
             
            </div>)
    });
        
       

    let bronzeDragonGem = this.state.DragonGems.map((gem) => {
        return ( 
            
             <div className="parchment--text" key={gem.id}>
            
            <div className="Gem--box"> 
            <p>{gem.Description}:</p> 
            <p>{gem.Abilities}</p>
            <p>{gem.Found}</p>
            </div>
            </div>)
            
    });
        

            let bronzeDragonFactsPart3 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
            

            <div> <h1 className="title">Characteristics</h1>
            <span> {facts.Characteristics}</span></div>
            
             
            </div>)
    });
        
             
        
        
 return (
     
     <div className="fact--wrapper">
     <div className="header"></div>
     
            <div className="dragonhead">
            
                 <img alt="bronzedragonhead" src={BronzeDragonhead} />
            
            </div>
     
     <div className="stat--container">
     
            <div className="stat--paragraph">
     
                { bronzeDragonStats }
     
            </div>
     
           </div>
     
     <div className="fact--container">
     
         { bronzeDragonFactsPart1 }

         <h1 className="title">Skills:</h1>
         { bronzeDragonSkills }

         <h1 className="title">Magic:</h1>
          { bronzeDragonMagic }

          { bronzeDragonFactsPart2 }

         <h1 className="title">Bronze dragon´s treasured gemstones:</h1>
         { bronzeDragonGem }

         { bronzeDragonFactsPart3 }
     
     
     
     </div>
     
     </div>
     
     
    );
        
        
    
}

}

export default BronzeDragon;