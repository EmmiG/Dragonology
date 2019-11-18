import React, { Component } from 'react';
import "../App.scss";
import homepagepicture from '../images/dragonology_homepage_picture.jpg';



class HomepageStats {
    id: 0;
    Description: "";
    Purpose: "";
    Goal: "";
    ThankYouWords: "";
    Sources: "";
    
}



    
class HomePage extends Component {
    
 constructor(props) {
    super(props);
       this.state = {
           HomepageStats: [],
            
      } 
     
        
     }  
    
   
 fetchHomepageStats = () => {
	    fetch("http://localhost/dragonology/server/fetchHomepage.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ HomepageStats: data });
	        
	      });
	  }
 
 

  componentDidMount() {
      this.fetchHomepageStats();
    
  }   
    
 
render () {
    

    let HomeStats = this.state.HomepageStats.map((homestats) => {
        return ( 
            
            <div className="homepage--stats--text" key={homestats.id}>
            <div> <h3 className="homepage--title">Description:</h3><span> {homestats.Description}</span></div>
            <div> <h3 className="homepage--title">Purpose:</h3><span> {homestats.Purpose}</span></div>
            <div> <h3 className="homepage--title">Goal:</h3><span> {homestats.Goal}</span></div>
            <div> <h3 className="homepage--title">Thank you words:</h3><span> {homestats.ThankYouWords}</span></div>
            <div> <h3 className="homepage--title">Sources:</h3><span> {homestats.Sources}</span></div>
            
            </div>)
    });
        
   
        
 return (
     
     <div className="homepage--stats--wrapper">
     
             <div className="dragonology">

                         <img src={homepagepicture} alt="homepage_picture"/>

             </div>
     
             <div>
                        <h1 className="homepage--title--dragonology">Dragonology:</h1>
                         <h2 className="what--dragon">"What type of dragon are you?"</h2>

             </div>
     
     
            
     
     
             <div className="homestats--container">
                
                        { HomeStats }

              </div>
     
     
        </div>
     
     
    );
        
        
    


}
   
                                                 
}
                                                                                                                    

export default HomePage;