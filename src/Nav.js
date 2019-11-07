import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';
import logo from './images/logo_dragonology.png';
import logoonClick from './images/logo_dragonology_onClick.png';





class Nav extends React.Component {
    
constructor(props) {
    super(props);
        
        this.state = {
            allMenus: [],
            Clicklogo: false,
            Clickhome: false,   
            Clickdragons: false,
            Clickdragontest: false,
            Clickfortunecookie: false,
            
            
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
          <div id= "home" className="select-box--home" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
          
            </div>
    ));

renderHomeOnClick = () =>
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

renderDragonsOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 18)
    .map(menu => (
          <div className="select-box--home" key={menu.id}>
            
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

renderDragonTestOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 19)
    .map(menu => (
          <div className="select-box--home" key={menu.id}>
            
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

renderFortuneCookieOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 20)
    .map(menu => (
          <div className="select-box--home" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
          
            </div>
    ));


clickstatuslogo()
{
     this.setState((prevState)=>
         
         ({ 
     Clicklogo: !prevState.Clicklogo
         
     })); 
}

clickstatushome()
{
     this.setState((prevState)=>
         
         ({ 
     Clickhome: !prevState.Clickhome
         
     })); 
}


clickstatusdragons()
{
    this.setState((prevState)=>
         
         ({ 
     Clickdragons: !prevState.Clickdragons
         
     })); 
}

clickstatusdragontest()
{
    this.setState((prevState)=>
         
         ({ 
     Clickdragontest: !prevState.Clickdragontest
         
     })); 
     
}

clickstatusfortunecookie()
{
    this.setState((prevState)=>
         
         ({ 
     Clickfortunecookie: !prevState.Clickfortunecookie
         
     })); 
     
}


render () {
     let homeclick
     if (this.state.Clickhome) {
         homeclick = <div>{ this.renderHomeOnClick() } </div>
         
     } else {
         homeclick = <div>{ this.renderHome() } </div>
     }

     let dragonsclick
     if (this.state.Clickdragons) {
       
         dragonsclick = <div>{ this.renderDragonsOnClick() } </div>
         
     } else {
        
         dragonsclick = <div>{ this.renderDragons() } </div>
     }
    
    let dragontestclick
     if (this.state.Clickdragontest) {
       
         dragontestclick = <div>{ this.renderDragonTestOnClick() } </div>
         
     } else {
        
         dragontestclick = <div>{ this.renderDragonTest() } </div>
     }
    
    let fortunecookieclick
     if (this.state.Clickfortunecookie) {
         fortunecookieclick = <div>{ this.renderFortuneCookieOnClick() } </div>
         
     } else {
         fortunecookieclick = <div>{ this.renderFortuneCookie() } </div>
     }
    
    
    let logoclick
     if (this.state.Clicklogo) {
         logoclick = <div> <img src={ logo } /> </div>
         
     } else {
         logoclick = <div><img src={ logoonClick } /> </div>
     }
 
      return (
      <div className="nav--wrapper">
         
          <div className="mainmenu--container">

           <nav> 
            
              <ul className="nav-links">
          <Link to="/homepage">
             <div className="logo--background">
              <div id="logo" onClick={()=>this.clickstatuslogo()}> {logoclick} </div>
             </div>
               </Link>
              <div className="nav--menu">
              <Link to="/homepage">
              <li onClick={()=>this.clickstatushome()} >  {homeclick} </li>
              </Link>
              <Link to="/dragons">
              <li onClick={()=>this.clickstatusdragons()}> {dragonsclick}</li>
              </Link>
              <Link to="/dragontest">
              <li onClick={()=>this.clickstatusdragontest()}> { dragontestclick }  </li>
              </Link>
              <Link to="/fortunecookie">
              <li onClick={()=>this.clickstatusfortunecookie()}> { fortunecookieclick } </li>
              </Link>
              </div>
              </ul>
              </nav>

            </div>
    </div>
      
      
      );
        
}
}

export default Nav;