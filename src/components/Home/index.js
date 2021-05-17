import React, { useState } from 'react';
import Header from '../../common-components/Header';
import Footer from '../../common-components/Footer';
import BannerLogo from '../../assets/images/HomePageBaner.jpeg';

import './app.scss';

function Home() {
  return (
      <React.Fragment>
        <Header />

        
        <div className="home__container">
          <div className="home__banner">
            <img src={BannerLogo} />
          </div>

          <div className="home__content">
            <h2>Why it's important</h2>

            <p>Most people know good nutrition and physical activity can help maintain a healthy weight. But the benefits of good nutrition go beyond weight. Good nutrition can help:</p>

            <ul>
              <li>Reduce the risk of some diseases, including heart disease, diabetes, stroke, some cancers, and osteoporosis</li>
              <li>Reduce high blood pressure</li>
              <li>Lower high cholesterol</li>
              <li>Improve your well-being</li>
              <li>Improve your ability to fight off illness</li>
              <li>Improve your ability to recover from illness or injury</li>
              <li>Increase your energy level</li>
            </ul>

            <h2>What is good nutrition?</h2>

            <p>Good nutrition means your body gets all the nutrients, vitamins, and minerals it needs to work its best. Plan your meals and snacks to include nutrient-dense foods that are also low in calories.</p>
          </div>
        </div>


        <Footer />
      </React.Fragment>
  );
}

export default Home;
