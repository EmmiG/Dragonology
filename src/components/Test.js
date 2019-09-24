import React, { Component } from "react";
import "../App.scss";

class Test extends Component {
  constructor(props) {
    super(props);
    
      
    this.state = {
      allMenus: [],
      picUrl: '../images/Buttons/main_menu_dragons.png;'
    };
  }
      
 handleDragonMenuClick = DisplaySubMenu => () => {
    this.setState({
      picUrl: DisplaySubMenu
    });
  };

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

  renderMenus = () =>
    this.state.allMenus
      .filter(menu => menu.parentId !== null)
      .map(menu => (
        <div key={menu.id}>
          <img src={menu.picUrl} alt={menu.picName} />
        </div>
      ));

/* If you take away the ! mark the mainMenu will be able to show, but not the subMenu*/
renderMainMenu = () =>
    this.state.allMenus
      .filter(menu => menu.parentId == null)
      .map(menu => (
        <div key={menu.id}>
          <img src={menu.picUrl} alt={menu.picName} />
        </div>
      ));

   renderSubmenu = () =>
    this.state.allMenus
      .filter(menu => menu.parentId === 2)
      .map(menu => (
        <div key={menu.id}>
          <a href={menu.linkUrl}>
            <img src={menu.picUrl} alt={menu.picName} />
          </a>
        </div>
      ));

  render() {
    return (
      <div className="Menu">
        
        <div>{this.renderMainMenu()}</div>
<button onClick={this.handleDragonMenuClick('renderMenus :')}>text</button>
        <div id="sub_2">{this.renderMenus()}</div>
      </div>
    );
  }
}

export default Test;

