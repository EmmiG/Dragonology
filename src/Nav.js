import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';



class Nav extends React.Component {
    
constructor(props) {
    super(props);
        
        this.state = {
            allMenus: [],
            
        }
     }
    
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

renderHome = () =>
this.state.allMenus
    .filter(menu => menu.id == 1)
    .map(menu => (
          <div className="select-box--home" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
          
            </div>
    ));

renderDragons = () =>
this.state.allMenus
    .filter(menu => menu.id == 2)
    .map(menu => (
          <div className="select-box--dragons" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));

renderDragonTest = () =>
this.state.allMenus
    .filter(menu => menu.id == 3)
    .map(menu => (
          <div className="select-box--test" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />

           </div>
    ));

renderFortuneCookie = () =>
this.state.allMenus
    .filter(menu => menu.id == 4)
    .map(menu => (
          <div className="select-box--cookie" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
    
          </div>
    ));

render () {
      
      return (
      <div className="nav--wrapper">
          <div className="mainmenu--container">
           <nav> 
              <div id="Logo"> Logo </div>
              <ul className="nav-links">
              <Link to="/homepage">
              <li>  { this.renderHome() } </li>
              </Link>
              <Link to="/dragons">
              <li> { this.renderDragons() } </li>
              </Link>
              <Link to="/dragontest">
              <li> { this.renderDragonTest() }  </li>
              </Link>
              <Link to="/fortunecookie">
              <li> { this.renderFortuneCookie() } </li>
              </Link>
              </ul>
              </nav>

            </div>
    </div>
      
      
      );
        
}
}

export default Nav;