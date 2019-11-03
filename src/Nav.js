import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';




class Nav extends React.Component {
    
constructor(props) {
    super(props);
        
        this.state = {
            allMenus: [],
            hover: false
            
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

renderHomeHover = () =>
this.state.allMenus
    .filter(menu => menu.id == 17)
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

hoverop()
{
     this.setState({ 
     hover: true
     })  
}

hoverout()
{
     this.setState({ 
     hover: false
     })  
}

render () {
     let homehover
     if (this.state.hover) {
         homehover = <div>{ this.renderHomeHover() } </div>
         
     } else {
         homehover = <div>{ this.renderHome() } </div>
     }
    
    
     
        
    
 
      return (
      <div className="nav--wrapper">
         
          <div className="mainmenu--container">
          <div onClick={()=>this.hoverop()} onClick={()=>this.hoverout()}> 
          {   
              this.state.hover ? 
                (
                    <div>{ this.renderHomeHover() } </div>
                ) : (
                    <div>{ this.renderHome() } </div>
                )
            } 
          <div >HOOVER </div>  
    </div>
           <nav> 
              <div id="logo"> Logo </div>
              <ul className="nav-links">
              <Link to="/homepage">
              <li onClick={()=>this.hoverop()} >  {homehover} </li>
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