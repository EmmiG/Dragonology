import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box';
import Water_dragon from './components/Dragons/Water_dragon';



class App extends Component {
    

    
  render() {

      
      /* klassen Homepage ska till Homepage.js komponenten senare */
      return (
      
      <div className="App">
        
          
          
            <div>
           
          
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
