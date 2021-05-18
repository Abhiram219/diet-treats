import React from 'react';
import Header from '../../common-components/Header';
import Footer from '../../common-components/Footer';
import PlanCard from './planCard';
import {pricingAndFeatures} from '../../common-components/constants/JsonData' 

import './app.scss'

function Plans() {
  return (
    <React.Fragment>
        <Header />

        
        <div className="plans__container">

          <div className="plans__title"> Find Your Perfect Plan </div>

          <div className="plans__subTitle"> 
            <div className="plans__bookingNumber"> 1 </div>
            <span> Choose a right plan, whoever you are </span>
          </div>

          <div className="plans__plansContainer">
            {pricingAndFeatures.map( (item,index) => <PlanCard data={item} key={index} />)}
          </div>

          <p> * Diet Plans are provided for Weight Loss, Weight Gains and all other diseases. </p>

          <div className="plans__subTitle"> 
            <div className="plans__bookingNumber"> 2 </div>
            <span> Book a Consultation </span>
          </div>
        
        </div>


        <Footer />
      </React.Fragment>
  );
}

export default Plans;
