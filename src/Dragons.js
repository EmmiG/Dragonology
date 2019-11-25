import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';


class Dragons extends React.Component {
    
 /*
    * Here the state allMenus is being implemented and given
    * a default state with an empty array property. 
 */
    
constructor(props) {
    super(props);
        this.state = {
            allMenus: []    
        }
}
    
 /* 
    * Fetching the data from the database from a php file.
    * Updating the state of the class with the data fetched.
*/
    
    fetchAllMenus = () => {
    fetch("http://localhost/dragonology/server/fetchMenu.php")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ allMenus: data });
      });
    };

  componentDidMount() {
    this.fetchAllMenus();
  }

 /* 
    * Here are the dragon list with the 12 different dragons from the Submenu section.
    
    * Fetches Submenu images from the database id 5 - 16.
    * Every renderSubmenu* arrow function using filter to fetch the
    * specific id from the menus table in the database.  
    * Also create an unique key name in the filter and map.
    * Making an image tag with beginning and self closing, which will
    * be fetching from the picUrl column the specific image.
    * the picName data allows the image to display the name of the picture,
    * if for some reason the webpage cant show the picture. 
     
*/

renderSubmenuWater = () =>
this.state.allMenus
    .filter(menu => menu.id == 5)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuWood = () =>
this.state.allMenus
    .filter(menu => menu.id == 6)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuBrass = () =>
this.state.allMenus
    .filter(menu => menu.id == 7)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuFire = () =>
this.state.allMenus
    .filter(menu => menu.id == 8)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuForest = () =>
this.state.allMenus
    .filter(menu => menu.id == 9)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));

renderSubmenuLightning = () =>
this.state.allMenus
    .filter(menu => menu.id == 10)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuIce = () =>
this.state.allMenus
    .filter(menu => menu.id == 11)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuEarth = () =>
this.state.allMenus
    .filter(menu => menu.id == 12)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuLight = () =>
this.state.allMenus
    .filter(menu => menu.id == 13)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));

renderSubmenuBronze = () =>
this.state.allMenus
    .filter(menu => menu.id == 14)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuDark = () =>
this.state.allMenus
    .filter(menu => menu.id == 15)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuMetal = () =>
this.state.allMenus
    .filter(menu => menu.id == 16)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));

   
render () {
     
      return (
      
        <div className="dragon--links--wrapper">

            <div className="dragon--links--container">

                <h1 className="dragon--list--title"> List of dragons </h1>
                {/* Return all the arrow functions Submenu images */}
                <ul className="dragon-links">
                    <Link to="/waterdragon">
                        <li>{ this.renderSubmenuWater() }</li>
                    </Link>
                    <Link to="/wooddragon">
                        <li>{ this.renderSubmenuWood() }</li>
                    </Link>
                    <Link to="/brassdragon">
                        <li>{ this.renderSubmenuBrass() }</li>
                    </Link>
                    <Link to="/firedragon">
                        <li>{ this.renderSubmenuFire() }</li>
                    </Link>
                    <Link to="/forestdragon">
                        <li>{ this.renderSubmenuForest() }</li>
                    </Link>
                    <Link to="/lightningdragon">
                        <li>{ this.renderSubmenuLightning() }</li>
                    </Link>
                    <Link to="/icedragon">
                        <li>{ this.renderSubmenuIce() }</li>
                    </Link>
                    <Link to="/earthdragon">
                        <li>{ this.renderSubmenuEarth() }</li>
                    </Link>
                    <Link to="/lightdragon">
                        <li>{ this.renderSubmenuLight() }</li>
                    </Link>
                    <Link to="/bronzedragon">
                        <li>{ this.renderSubmenuBronze() }</li>
                    </Link>
                    <Link to="/darkdragon">
                        <li>{ this.renderSubmenuDark() }</li>
                    </Link>
                    <Link to="/metaldragon">
                        <li>{ this.renderSubmenuMetal() }</li>
                    </Link>

                </ul>

            </div>
       
        </div>
        
      
      );
        
}

}


export default Dragons;