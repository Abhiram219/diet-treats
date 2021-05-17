import React, { useState } from 'react';
import Header from '../../common-components/Header';
import Footer from '../../common-components/Footer';

function Home() {
  return (
      <React.Fragment>
        <Header />

        
        <div className="home__container">
            Welcome to home
        </div>


        <Footer />
      </React.Fragment>
  );
}

export default Home;
