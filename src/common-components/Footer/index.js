import React, { useState } from 'react';
import {footerNavLinks} from '../constants/JsonData';
import DietTreatsLogo from '../../assets/images/DietTreatsLogo.png';
import './app.scss';


function Footer(props) {

  return (
    <div className="footer__container">

      <div className="footer__subContainer">
        <div className="footer__logo"> <img src={DietTreatsLogo} /> </div>
        <div style={{marginLeft:12}}> © 2021 Diet Treats, Inc. All rights reserved. </div>
      </div>
      

      <div className="footer__navLinks">
        {footerNavLinks.map( (item,index) => 
          <a 
            href={item.url} target='_blank'
            key={index} className="footer__navItem"
          >
            {item.svg}
          </a>  
        )}
      </div>

        
    </div>
  );
}
  
export default Footer;
  