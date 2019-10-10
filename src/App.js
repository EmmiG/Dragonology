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
          { value: 'Water', id: 0 },
          
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
