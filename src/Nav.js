import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';
import logo from './images/logo_dragonology.png';
import logoonClick from './images/logo_dragonology_onClick.png';

class Nav extends React.Component {
    
/*
    * Here the state allMenus is being implemented and given
    * a default state with an empty array property. 
    * The rest of the Click* states have a default state of the value false.
*/
    
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
    * Here are the Mainmenu with the 4 different images.
    
    * Fetches Mainmenu images in two sets from the database:
    * The first set is the default Mainmenu images: id 1 - 4.
    * The second set is the onClick Mainmenu images: id 17 - 20.
    
    * Every render* arrow function using filter to fetch the
    * specific id from the menus table in the database.  
    * Also create an unique key name in the filter and map.
    * Making an image tag with beginning and self closing, which will
    * be fetching from the picUrl column the specific image.
    * the picName data allows the image to display the name of the picture,
    * if for some reason the webpage cant show the picture.    
*/

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

 /* 
    * Here is 5 different functions made to handle the status of the buttons, 
    * meaning if they are clicked or not. As a default the value is set to false.
    
    * The setState changes one of the Click* value with the !this.state on the 
    * first row to true, the other values is set to false.
    * This way other buttons will not lit upp, showing they are selected, 
    * when the user is navigating between the button images.
    
    * The prevState checking if the value is true or false and toggle between the values. 
*/

    clickstatuslogo()
    {
        this.setState((prevState)=>({
        Clicklogo: !this.state.Clicklogo, 
        Clickhome: false,
        Clickdragons:false,  
        Clickdragontest: false,
        Clickfortunecookie: false,
        Clicklogo: !prevState.Clicklogo

        }));
    }

    clickstatushome()
    {
       this.setState((prevState)=>({
        Clickhome: !this.state.Clickhome, 
        Clicklogo: false,
        Clickdragons:false,  
        Clickdragontest: false,
        Clickfortunecookie: false,
        Clickhome: !prevState.Clickhome

        }));
    }


    clickstatusdragons()
    {
        this.setState((prevState)=>({
        Clickdragons: !this.state.Clickdragons,
        Clicklogo: false,
        Clickhome: false,
        Clickdragontest: false,
        Clickfortunecookie: false,
        Clickdragons: !prevState.Clickdragons

        }));


    }

    clickstatusdragontest()
    {
        this.setState((prevState)=>({
        Clickdragontest: !this.state.Clickdragontest, 
        Clicklogo: false,
        Clickhome: false,
        Clickdragons: false,
        Clickfortunecookie: false,
        Clickdragontest: !prevState.Clickdragontest
        })); 
    }

    clickstatusfortunecookie()
    {
        this.setState((prevState)=>({
        Clickfortunecookie: !this.state.Clickfortunecookie,
        Clicklogo: false,
        Clickhome: false,
        Clickdragons: false,
        Clickdragontest: false,
        Clickfortunecookie: !prevState.Clickfortunecookie

        }));

    }


render () {
    
/* 
    * The purpose here is to toogle between the default Mainmenu image and the clicked one, 
    * also between the logo default and clicked one.
    * Created five different let variable called logoclick, homeclick, dragonsclick, 
    * dragontestclick and fortunecookieclick. 
    * Using an if else statement to toggle between the button images.
*/

    
    let logoclick
        if (this.state.Clicklogo) {
            logoclick = <div><img alt="logoonclick" src={ logoonClick } /> </div>

        } else {
            logoclick = <div> <img alt="logo" src={ logo } /> </div>
        }
    
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


    return (
        <div className="nav--wrapper">

            <div className="mainmenu--container">

                <nav> 

                    <ul className="nav-links">
        
                        <Link to="/homepage">
        
                        {/*
                        * When the user click on the desired button image, the function clickstatus* will run.
                        * In the div the let variable with the if, else statement are located 
                        */}
        
                        <div className="logo--background">
                           <div id="logo" onClick={()=>this.clickstatuslogo()}> { logoclick } </div>
                        </div>
            
                        </Link>
            
                        <div className="nav--menu">
                            
                        <Link to="/homepage">
                            <li onClick={()=>this.clickstatushome()} >  { homeclick } </li>
                        </Link>
            
                        <Link to="/dragons">
                            <li onClick={()=>this.clickstatusdragons()}> { dragonsclick } </li>
                        </Link>
            
                        <Link to="/dragontest">
                            <li onClick={()=>this.clickstatusdragontest()}> { dragontestclick } </li>
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