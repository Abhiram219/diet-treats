import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {headerMenuItems} from '../constants/JsonData';
import DietTreatsLogo from '../../assets/images/DietTreatsLogo.png';
import {ReactComponent as HamburgerIcon} from '../../assets/icons/hamburger.svg';
import SideBar from './SideBar'
import './app.scss';

function Header(props) {

  let history = useHistory();

  const [SideBarDispaly, setSideBarDisplay] = useState(-110);

  const closeSideBar = () => {
    console.log('close sb')
    setSideBarDisplay(-110);
  }

  const openSideBar = () => {
    console.log('open sb')
    setSideBarDisplay(0);
  }

  return (
    <React.Fragment>
      <SideBar SideBarDispaly={SideBarDispaly} closeSideBar={closeSideBar}/>
      
      <div className="header__container">

        <div className="header__subContainer1" > 
          <div className="mobile-only" onClick={openSideBar} >  <HamburgerIcon /> </div>
          
          <div className="header__logo" onClick={()=>history.push('/')} ><img src={DietTreatsLogo}/></div>
        </div>


        <div className="header__subContainer2">
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
    </React.Fragment>
   
  );
}
  
export default Header;
  