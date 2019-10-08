import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box';







class App extends Component {
  render() {
/* klassen Homepage ska till Homepage.js komponenten senare */
      return (
      
      <div className="App">
        
          
       
          
          <div>
          
          <h1>test2</h1>
          
            <div>
           
          
                <SelectBox
          
                   items={[
          
          
          { value: 'Dragons', id: 0 },
          { value: 'Water dragon', id: 1 },
          { value: 'Wood dragon', id: 2 }, 
          { value: 'Brass dragon', id: 3 },
          { value: 'Fire dragon', id: 4 },
          { value: 'Forest dragon', id: 5 },
          { value: 'Lightning dragon', id: 6 }, 
          { value: 'Ice dragon', id: 7 },
          { value: 'Earth dragon', id: 8 },
          { value: 'Light dragon', id: 9 },
          { value: 'Bronze dragon', id: 10 }, 
          { value: 'Dark dragon', id: 11 },
          { value: 'Metal dragon', id: 12 },
          { value: 'test dragon', id: 13 },
          ]} 
          
          />
            </div>
          </div>  
          
          
        <p className="TEST">  </p>
        
      
        <div className="homepage">
        
            <div className="container_header">
            </div>

           <div className="container_menu">
                
            </div>

            <div className="container_stats">
          
         
            </div>

            <div className="container_facts">
            </div>

            <div className="container_footer">
            </div>
        
        </div>
        
    </div>

      
      
      );
        
  }
}

export default App;
