import React, { Component } from 'react';
import "../App.scss";
import homepagepicture from '../images/dragonology_homepage_picture.jpg';


{/* 
    * The class HomepageStats.
    * The data column comes from the database table homepage.
    * Will be used with a combination of a fetch file to generate the data.
*/}

class HomepageStats {
    id: 0;
    Description: "";
    Purpose: "";
    Goal: "";
    ThankYouWords: "";
    Sources: "";   
}

    
class HomePage extends Component {
    
/*
    * Here the class is being implemented and given
    * a default state with an empty array property. 
*/
    
 constructor(props) {
    super(props);
       this.state = {
           HomepageStats: [],   
        } 
        
 }  
    
 /* 
    * Fetching the data from the database from a php file.
    * Updating the state of the class with the data fetched.
*/
    
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
    
/*
    *  A function is created with a special variable name,
    * Also create an unique key name in map, that is linked to the class name.
    * Which will be looping trough the class and fetch all the data from 
    * the database and display it on the website. 
*/ 
    

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
            {/* return the imported image to the website */}
            <img src={homepagepicture} alt="homepage_picture"/>
        </div>

        <div>
            <h1 className="homepage--title--dragonology">Dragonology:</h1>
            <h2 className="what--dragon">"What type of dragon are you?"</h2>
        </div>

        <div className="homestats--container">
            {/* return all the let arrow functions from the render section and display on the website */} 
            { HomeStats }
        </div>


    </div>

);


}   
                                                 
}
                                                                                                                    

export default HomePage;