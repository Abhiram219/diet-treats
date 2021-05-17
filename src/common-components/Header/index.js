import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {headerMenuItems} from '../constants/JsonData'
import DietTreatsLogo from '../../images/DietTreatsLogo.png'
import './app.scss';

function Header(props) {

  let history = useHistory();

  return (
    <div className="header__container">

        <div className="header__logo"><img src={DietTreatsLogo}/></div>

        <div className="header__subContainer">
          <div className="header__menu">
            {headerMenuItems.map( (item,index) => 
              <div 
                onClick={()=>history.push(item.url)} 
                key={index} className="header__menuItem"
              >
                {item.name}
              </div>  
            )}
          </div>

          <div className="header__rcbButton">
            Request a Call Back
          </div>
        </div>
        
    </div>
  );
}
  
export default Header;
  