import React from 'react';

import main_menu_home from '../images/Buttons/main_menu_home.png';
import main_menu_dragons from '../images/Buttons/main_menu_dragons.png';
import main_menu_dragon_test from '../images/Buttons/main_menu_dragon_test.png';
import main_menu_fortune_cookie from '../images/Buttons/main_menu_fortune_cookie.png';



const DropdownMenu = props => (
<header>
    <nav>
    
      <div className="dragonMenu-container">
      
       <div className="dragonMenu">
        <ul>
            <li>
                <img
                id="Home"
                className="Main_home"
                src={main_menu_home}
                alt="Home_button_image"
                />
            </li>
            <li>
                <img
                    id="Dragons"
                    className="Main_Dragons"
                    src={main_menu_dragons}
                    alt="Dragons_button_image"
                  />
            </li>
            <li>
                <img
                    id="Dragon_test"
                    className="Main_Dragon_test"
                    src={main_menu_dragon_test}
                    alt="Dragon_test_button_image"
                  />
            </li>
            <li>
                <img
                    id="Fortune_cookie"
                    className="Main_fortune_cookie"
                    src={main_menu_fortune_cookie}
                    alt="Fortune_cookie_button_image"
                  />
            </li>
     </ul>
    </div> 
    
    </div>
       
        
    </nav>
    
</header>
);

export default DropdownMenu;