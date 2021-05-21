import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {headerMenuItems} from '../constants/JsonData';
import DietTreatsLogo from '../../assets/images/DietTreatsLogo.png';

import './app.scss';

function SideBar(props) {

  let history = useHistory();

  return (
    <div className="sideBar">

      {props.SideBarDispaly === 0 ? <div className="sideBar__backdrop" onClick={props.closeSideBar}></div> : ''}
      
      <div className="sideBar__container mobile-only"  onClick={(e)=> { e.stopPropagation() } } style={{transform:` translate(${props.SideBarDispaly}%)`}}>
        
        <div className="sideBar__logo"  onClick={()=> { props.closeSideBar(); history.push('/');  } } ><img src={DietTreatsLogo}/></div>

        <div className="sideBar__menu">
          {headerMenuItems.map( (item,index) => 
            <div 
              onClick={()=>{ props.closeSideBar(); history.push(item.url)}} 
              key={index} className="sideBar__menuItem"
            >
              {item.name}
            </div>  
          )}
        </div>
        
      </div>
    </div>
  );
}
  
export default SideBar;
  