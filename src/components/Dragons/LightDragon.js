/* 
    * Light dragon =
    * Color: White
    * Month Number: 9
    * Zodiac sign: Virgo
*/


import React, { Component } from 'react';
import "./../../App.scss";
import LightDragonhead from '../../images/Dragonheads/light.jpg';

{/* 
    * The classes DragonStats, DragonFacts, DragonSkills, DragonMagic and DragonGems.
    * All the data columns come from the database tables dragons, skills, magics and gems.
    * Will be used with a combination of the fetch files to generate the data.
*/}


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

class DragonMagic {
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


class LightDragon extends Component {
    
/* 
    * Here the classes being implemented and given
    * a default state with an empty array property.
*/
    
 constructor(props) {
    super(props);
       this.state = {
           DragonStats: [],
           DragonSkills: [],
           DragonGems: [],
           DragonMagic: [],    
        } 
       
 }  
    
/* 
    * All the fetches from the database are made here.
    * Using 5 different fetch files.
    * Updating the state of the classes with the data fetched.
*/
    
 fetchOneDragon = () => {
	    fetch("http://localhost/dragonology/server/fetchLight.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonStats: data });
	        
	      });
  }
 
 fetchOneSkill = () => {
	    fetch("http://localhost/dragonology/server/fetchSkillsLight.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonSkills: data });
	        
	      });
  }
 
 fetchMagic = () => {
	    fetch("http://localhost/dragonology/server/fetchMagicLight.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonMagic: data });
	        
	      });
 }
 
  fetchOneGem = () => {
	    fetch("http://localhost/dragonology/server/fetchGemLight.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ DragonGems: data });
	        
	      });
  }  
    
 	  
/*
    * It will trigger an extra rendering, but it will
    * happen before the browser updates the screen.
*/ 
  

  componentDidMount() {
      this.fetchOneDragon();
      this.fetchOneSkill();
      this.fetchOneGem();
       this.fetchMagic();
    
  }   
    
    
   
render () {
    
/*
    * Functions are being created each with a special variable name,
    * Also create an unique key name in map, that is linked to the each classes name.
    * which will be looping trough all the classes and fetch all the data from 
    * the database and display it on the website. 
*/ 
    

    let lightDragonStats = this.state.DragonStats.map((stats) => {
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
        
        
    let lightDragonFactsPart1 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
                <div> <h1 className="title">Common Traits</h1><span> {facts.Traits}</span></div>
            </div>)
    });
        
            
   let lightDragonSkills = this.state.DragonSkills.map((skill) => {
        return ( 
            
            <div className="parchment--text" key={skill.id}>
                <div> 
                    <span className="bold"> {skill.Name}: </span>
                    <span> {skill.Description}</span>
                </div>
            </div>)
    });   
       
       
   let lightDragonMagic = this.state.DragonMagic.map((magic) => {
        return ( 
            
            <div  className="parchment--text" key={magic.id}>
                <div> 
                    <span className="bold"> {magic.Name}: </span>
                    <span> {magic.Description}</span>
                </div>
            </div>)
    });  
       
    
            let lightDragonFactsPart2 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
                <div> <h1 className="title">Appearance</h1><span> {facts.Appearance}</span></div>
                <div> <h1 className="title">Habitat</h1><span> {facts.Habitat}</span></div>
            </div>)
    });
        
       
    let lightDragonGem = this.state.DragonGems.map((gem) => {
        return ( 
            
            <div className="parchment--text" key={gem.id}>
                <div> 
                    <h1 className="title">Light dragon´s treasured gemstone:</h1>
                    <p>{gem.Description}:</p> 
                    <p>{gem.Abilities}</p>
                    <p>{gem.Found}</p>
                </div>
            </div>)
            
    });
        

    let lightDragonFactsPart3 = this.state.DragonStats.map((facts) => {
        return ( 
            
            <div className="parchment--text" key={facts.id}>
                <div> 
                    <h1 className="title">Characteristics</h1>
                    <span> {facts.Characteristics}</span>
                </div>
            </div>)
    });    
        
 return (
     
    <div className="fact--wrapper">

        <div className="dragonhead">
            {/* return the imported image to the website */} 
            <img alt="lightdragonhead" src={LightDragonhead} />
        </div>

        <div className="stat--container">

            <div className="stat--paragraph">
                {/* return all the let arrow functions from the render section and display on the website */} 
                { lightDragonStats }
            </div>
        </div>

        <div className="fact--container">

            { lightDragonFactsPart1 }

            <h1 className="title">Skills:</h1>
            { lightDragonSkills }

            <h1 className="title">Magic:</h1>
            { lightDragonMagic }

            { lightDragonFactsPart2 }

            { lightDragonGem }

            { lightDragonFactsPart3 }

        </div>

    </div>
     
    );
          
}

}

export default LightDragon;