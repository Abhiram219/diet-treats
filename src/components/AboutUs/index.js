import React, { useState } from 'react';
import Header from '../../common-components/Header';
import Footer from '../../common-components/Footer';

import './app.scss'

function AboutUs() {
  return (
    <React.Fragment>
        <Header />

        
        <div className="about__container">

          <div className="about__name"> Ms.PAVANI PATHURI (DIETITIAN) </div>
          <div className="about__role"> - Clinical Dietician & Consultant Nutritionist </div>
          

          <div className="about__details"> 
            <h2>Education</h2>
            <ul>
              <li>M.Sc. clinical neutrition & Dieteties</li>
              <li>Bsc. Hons (Home science - food & Nutrition)</li>
            </ul>

            <h2>Work Experience</h2>
            <ul>
              <li>Nutrition Advisor - ABBOTT NUTRITION</li>
              <li>Intern Dietician @ Maxcure Hospitals</li>
              <li>Intern Dietician @ Asian Institute of Gasteroenterology (AIG)</li>
            </ul>
          </div>

           
        </div>


        <div className="about__footer"> <Footer /> </div>
      </React.Fragment>
  );
}

export default AboutUs;