import React, { Component } from "react";
import "../App.scss";

class Test extends Component {
  constructor(props) {
    super(props);

      
    this.state = {
      allMenus: []
    };
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
          <a href={menu.linkUrl}></a>
      <img src={menu.picUrl} alt={menu.picName} />
        </div>
      ));

  render() {
    return (
      <div className="Menu">
        <div>{this.renderMainMenu()}</div>
        <div id="sub_2">{this.renderMenus()}</div>
      </div>
    );
  }
}

export default Test;
