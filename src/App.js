import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box/index';
import WaterDragon from './components/Dragons/WaterDragon';


class App extends Component {
    

    
  render() {

      
      /* klassen Homepage ska till Homepage.js komponenten senare */
      return (
      
      <div className="App">
        
          
          
            <div>
          
                <WaterDragon />
           
          
                <SelectBox
        
                   items={[
          
          
          
          { value: '', id: 0 },
          
          ]} 
          
          
          
          />
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
