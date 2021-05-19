import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {headerMenuItems} from '../constants/JsonData';
import DietTreatsLogo from '../../assets/images/DietTreatsLogo.png';

import './app.scss';

function SideBar(props) {

  let history = useHistory();

  const [SideBarDispaly, setSideBarDisplay] = useState('block');

  const closeSideBar = () => {
    setSideBarDisplay('none');
  }

  return (
    <div className="sideBar__container mobile-only" style={{display: SideBarDispaly}}>
        
        <div className="sideBar__logo"  onClick={()=>history.push('/')} ><img src={DietTreatsLogo}/></div>

        <div className="sideBar__menu">
            {headerMenuItems.map( (item,index) => 
              <div 
                onClick={()=>{  closeSideBar(); history.push(item.url)}} 
                key={index} className="sideBar__menuItem"
              >
                {item.name}
              </div>  
            )}
          </div>
        
    </div>
  );
}
  
export default SideBar;
  