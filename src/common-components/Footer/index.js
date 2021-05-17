import React, { useState } from 'react';
import {footerNavLinks} from '../constants/JsonData';
import DietTreatsLogo from '../../images/DietTreatsLogo.png';
import './app.scss';


function Footer(props) {

  return (
    <div className="footer__container">

      <div className="footer__logo"> <img src={DietTreatsLogo} /> </div>

      <div className="footer__navLinks">
        {footerNavLinks.map( (item,index) => 
          <a 
            href={item.url} target='_blank'
            key={index} className="footer__navItem"
          >
            {item.name}
          </a>  
        )}
      </div>

        
    </div>
  );
}
  
export default Footer;
  