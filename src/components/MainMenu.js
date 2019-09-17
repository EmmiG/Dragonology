import React, { Component } from 'react';
import "../App.scss";


    class DropDownMenu {
    id: 0;
    picUrl: "";
    linkUrl: "";
    isSubmenu: "";
}

class MainMenu extends Component {
  constructor(props) {
    super(props);
      
      this.state = {
          allMenus: []
      }
  }
    
 fetchAllMenus = () => {
	    fetch("http://localhost/dragonology/server/fetchMenu.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ allMenus: data });
	        
	      });
	  }

  

  componentDidMount() {
    this.fetchAllMenus();
 
  }

  
  render() {
      
    let menu = this.state.allMenus.map((item) => {
        return (<div key={item.id}><img src={item.picUrl} alt="dropdownmenu_main_and_under"/> - {item.linkUrl} - {item.isSubmenu}</div>)
    });
        
        console.log(menu);
        
        

    return (
     <div>{menu}</div>
    );
  }
}
    

export default MainMenu;