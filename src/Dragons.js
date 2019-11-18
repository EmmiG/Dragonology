import React from 'react';
import "./App.scss";
import { Link } from 'react-router-dom';




class Dragons extends React.Component {
    
constructor(props) {
    super(props);
        
        this.state = {
            allMenus: [],
            Clickwater: false,
            Clickwood: false,
            Clickbrass: false,
            Clickfire: false,
            Clickforest: false,
            Clicklightning: false,
            Clickice: false,
            Clickearth: false,
            Clicklight: false,
            Clickbronze: false,
            Clickdark: false,
            Clickmetal: false
            
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


renderSubmenuWater = () =>
this.state.allMenus
    .filter(menu => menu.id == 5)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


renderSubmenuWaterOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 21)
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

renderSubmenuWoodOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 22)
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

renderSubmenuBrassOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 23)
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

renderSubmenuFireOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 24)
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

renderSubmenuForestOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 25)
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

renderSubmenuLightningOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 26)
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


renderSubmenuIceOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 27)
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

renderSubmenuEarthOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 28)
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

renderSubmenuLightOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 29)
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

renderSubmenuBronzeOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 30)
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

renderSubmenuDarkOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 31)
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

renderSubmenuMetalOnClick = () =>
this.state.allMenus
    .filter(menu => menu.id == 32)
    .map(menu => (
          <div className="dragon-links--images" key={menu.id}>
            
            <img src={menu.picUrl} alt={menu.picName} />
             
            </div>
    ));


clickstatuswater()
{
     this.setState((prevState)=>
         
         ({ 
     Clickwater: !prevState.Clickwater
         
     })); 
}

clickstatuswood()
{
     this.setState((prevState)=>
         
         ({ 
     Clickwood: !prevState.Clickwood
         
     })); 
}

clickstatusbrass()
{
     this.setState((prevState)=>
         
         ({ 
     Clickbrass: !prevState.Clickbrass
         
     })); 
}

clickstatusfire()
{
     this.setState((prevState)=>
         
         ({ 
     Clickfire: !prevState.Clickfire
         
     })); 
}

clickstatusforest()
{
     this.setState((prevState)=>
         
         ({ 
     Clickforest: !prevState.Clickforest
         
     })); 
}

clickstatuslightning()
{
     this.setState((prevState)=>
         
         ({ 
     Clicklightning: !prevState.Clicklightning
         
     })); 
}

clickstatusice()
{
     this.setState((prevState)=>
         
         ({ 
     Clickice: !prevState.Clickice
         
     })); 
}

clickstatusearth()
{
     this.setState((prevState)=>
         
         ({ 
     Clickearth: !prevState.Clickearth
         
     })); 
}

clickstatuslight()
{
     this.setState((prevState)=>
         
         ({ 
     Clicklight: !prevState.Clicklight
         
     })); 
}

clickstatusbronze()
{
     this.setState((prevState)=>
         
         ({ 
     Clickbronze: !prevState.Clickbronze
         
     })); 
}

clickstatusdark()
{
     this.setState((prevState)=>
         
         ({ 
     Clickdark: !prevState.Clickdark
         
     })); 
}

clickstatusmetal()
{
     this.setState((prevState)=>
         
         ({ 
     Clickmetal: !prevState.Clickmetal
         
     })); 
}
    
render () {
    
    let waterclick
     if (this.state.Clickwater) {
         waterclick = <div>{ this.renderSubmenuWaterOnClick() } </div>
         
     } else {
         waterclick = <div>{ this.renderSubmenuWater() } </div>
     }
    
    let woodclick
     if (this.state.Clickwood) {
         woodclick = <div>{ this.renderSubmenuWoodOnClick() } </div>
         
     } else {
         woodclick = <div>{ this.renderSubmenuWood() } </div>
     }
    
    let brassclick
     if (this.state.Clickbrass) {
         brassclick = <div>{ this.renderSubmenuBrassOnClick() } </div>
         
     } else {
         brassclick = <div>{ this.renderSubmenuBrass() } </div>
     }
    
    let fireclick
     if (this.state.Clickfire) {
         fireclick = <div>{ this.renderSubmenuFireOnClick() } </div>
         
     } else {
         fireclick = <div>{ this.renderSubmenuFire() } </div>
     }
    
    let forestclick
     if (this.state.Clickforest) {
         forestclick = <div>{ this.renderSubmenuForestOnClick() } </div>
         
     } else {
         forestclick = <div>{ this.renderSubmenuForest() } </div>
     }
    
    let lightningclick
     if (this.state.Clicklightning) {
         lightningclick = <div>{ this.renderSubmenuLightningOnClick() } </div>
         
     } else {
         lightningclick = <div>{ this.renderSubmenuLightning() } </div>
     }
    
    let iceclick
     if (this.state.Clickice) {
         iceclick = <div>{ this.renderSubmenuIceOnClick() } </div>
         
     } else {
         iceclick = <div>{ this.renderSubmenuIce() } </div>
     }
    
    let earthclick
     if (this.state.Clickearth) {
         earthclick = <div>{ this.renderSubmenuEarthOnClick() } </div>
         
     } else {
         earthclick = <div>{ this.renderSubmenuEarth() } </div>
     }
    
    let lightclick
     if (this.state.Clicklight) {
        lightclick = <div>{ this.renderSubmenuLightOnClick() } </div>
         
     } else {
         lightclick = <div>{ this.renderSubmenuLight() } </div>
     }
    
    let bronzeclick
     if (this.state.Clickbronze) {
         bronzeclick = <div>{ this.renderSubmenuBronzeOnClick() } </div>
         
     } else {
         bronzeclick = <div>{ this.renderSubmenuBronze() } </div>
     }
    
    let darkclick
     if (this.state.Clickdark) {
         darkclick = <div>{ this.renderSubmenuDarkOnClick() } </div>
         
     } else {
         darkclick = <div>{ this.renderSubmenuDark() } </div>
     }
    
    let metalclick
     if (this.state.Clickmetal) {
         metalclick = <div>{ this.renderSubmenuMetalOnClick() } </div>
         
     } else {
         metalclick = <div>{ this.renderSubmenuMetal() } </div>
     }

      
      return (
      
          
      <div className="dragon--links--wrapper">
          
          <div className="dragon--links--container">
          
        
        <h1 className="dragon--list--title"> List of dragons </h1>
          
          <ul className="dragon-links">
            <Link to="/waterdragon">
              <li onClick={()=>this.clickstatuswater()}>{ waterclick }</li>
            </Link>
            <Link to="/wooddragon">
              <li onClick={()=>this.clickstatuswood()}>{ woodclick }</li>
            </Link>
            <Link to="/brassdragon">
              <li onClick={()=>this.clickstatusbrass()}>{ brassclick }</li>
            </Link>
            <Link to="/firedragon">
              <li onClick={()=>this.clickstatusfire()}>{ fireclick }</li>
            </Link>
            <Link to="/forestdragon">
              <li onClick={()=>this.clickstatusforest()}>{ forestclick }</li>
            </Link>
            <Link to="/lightningdragon">
              <li onClick={()=>this.clickstatuslightning()}>{ lightningclick }</li>
            </Link>
            <Link to="/icedragon">
              <li onClick={()=>this.clickstatusice()}>{ iceclick }</li>
            </Link>
            <Link to="/earthdragon">
              <li onClick={()=>this.clickstatusearth()}>{ earthclick }</li>
            </Link>
            <Link to="/lightdragon">
              <li onClick={()=>this.clickstatuslight()}>{ lightclick }</li>
            </Link>
            <Link to="/bronzedragon">
             <li onClick={()=>this.clickstatusbronze()}>{ bronzeclick }</li>
            </Link>
            <Link to="/darkdragon">
              <li onClick={()=>this.clickstatusdark()}>{ darkclick }</li>
            </Link>
            <Link to="/metaldragon">
              <li onClick={()=>this.clickstatusmetal()}>{ metalclick }</li>
            </Link>
    
          </ul>
       
        
    </div>

  </div>

      
      
      );
        
}

}

export default Dragons;