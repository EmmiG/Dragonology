import React, { Component } from "react";
import "./../../App.scss";

class Dragon {
    id: 0;
    Name: "";
    LatinName: "";
}

class Admin extends Component {
  constructor(props) {
    super(props);
      
      this.state = {
          allDragons: []
      }
  }
    
 fetchAllDragons = () => {
	    fetch("http://localhost/dragonology/server/fetchAll.php")
	      .then(response => response.json())
	      .then(data => {
            console.log(data);
	        this.setState({ allDragons: data });
	        
	      });
	  }

  

  componentDidMount() {
    this.fetchAllDragons();
    /*if (this.state.allDragons.length) {
      this.state.allDragons.map((item, index) => this.disabledDates());
    }*/
  }

  
  render() {
      /*if (!this.state.allDragons) {
      return <div>Loading...</div>;
    }*/
      

    //const disabledDates = this.state;
    

    let list = this.state.allDragons.map((item) => {
        return (<p key={item.id}>{item.Name} - {item.LatinName}</p>)
    });
        
        console.log(list);
        
          

    return (
     <div>{list}</div>
    );
  }
}
export default Admin;