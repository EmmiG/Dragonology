import React, { Component } from 'react';
import './sass/style.scss';
import SelectBox from './features/select-box';
import Admin from "./components/routes/Admin";
import Test from "./components/Test";





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
          { value: 'Home', id: 1 },
          { value: 'Dragons', id: 2 }, 
          { value: 'Dragon Test', id: 3 },
          { value: 'Fortune Cookie', id: 4 },
          ]} 
          />
            </div>
          </div>  
          
           <Admin />
          
        <p className="TEST"> lorem imsum </p>
        
      
        <div className="homepage">
        
            <div className="container_header">
            </div>

           <div className="container_menu">
                <Test />
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

export default App
