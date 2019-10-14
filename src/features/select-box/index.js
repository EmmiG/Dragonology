import React from 'react'
import '../../sass/style.scss';

class SelectBox extends React.Component {
    
    constructor(props) {
    super(props);
        
        this.state = {
            items: this.props.items || [],
            showItems: false,
            selectedItem: this.props.items && this.props.items[0],
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

renderMenus = () =>
    this.state.allMenus
      .filter(menu => menu.parentId !== null)
      .map(menu => (
        <div key={menu.id}>
          <img src={menu.picUrl} alt={menu.picName} />
        </div>
      ));

renderSubmenu = () =>
    this.state.allMenus
      .filter(menu => menu.parentId == 2)
      .map(menu => (
        <div key={menu.id} className="submenu">
          <a href={menu.linkUrl}>
            <img src={menu.picUrl} alt={menu.picName} />
          </a>
        </div>
      ));



renderHome = () =>
this.state.allMenus
    .filter(menu => menu.id == 1)
    .map(menu => (
          <div className="select-box--home" key={menu.id}>
            <a href={menu.linkUrl}>
            <img src={menu.picUrl} alt={menu.picName} />
            </a> 
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

renderTest = () =>
this.state.allMenus
    .filter(menu => menu.id == 3)
    .map(menu => (
          <div className="select-box--test" key={menu.id}>
            <a href={menu.linkUrl}>
            <img src={menu.picUrl} alt={menu.picName} />
            </a>  </div>
    ));

renderCookie = () =>
this.state.allMenus
    .filter(menu => menu.id == 4)
    .map(menu => (
          <div className="select-box--cookie" key={menu.id}>
            <a href={menu.linkUrl}>
            <img src={menu.picUrl} alt={menu.picName} />
            </a>  </div>
    ));


dropDown = () => {
  this.setState(prevState =>({
      showItems: !prevState.showItems,
  }))  
} 

selectItem = (item) => this.setState({
    selectedItem: item,
    showItems: false,
})

render () {
    
    
    return (<div> 
        
        
    <div className="select-box--box"> 
           
         
   
     <div 
    className="select-box--container"
    >
          
        
        <div 
            className="select-box--selected-item"
            > { this.state.selectedItem.value }
    { this.renderHome() }
    { this.renderDragons() }
    { this.renderTest() }  
    { this.renderCookie() }
     
</div>
    
    
                
        <div 
    className="select-box--arrow"
    onClick={this.dropDown}
    >
        
        <span
        className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`} />
    </div>
                
    <div
        style={{display: this.state.showItems ? 'block' : 'none'}}
        className="select-box--items"
        >
            
            
            {
            
            this.state.items.map(item => <div key={ item.id }
            onClick={() => this.selectItem(item) }
            className={this.state.selectedItem === item  ? 'selected' : ''}
>               
                
                
 { this.renderSubmenu() }

{ item.value }

               
                
                  
    </div>)
        } 
</div>


        



    </div>

             
     



        
            </div>

</div>

);
}

}

export default SelectBox;
