import React from 'react';
import Tour from '../Tour/Tour.js';

const ToursSection = () => {
    return (
      <section className="center content-section container">
        <h2 className="section-header">TOURS</h2>
        <div>
          <Tour date="JUN 1ST" city="EDINBURGH" arena="USHER HALL" />
          <Tour date="JUN 2ND" city="MANCHESTER" arena="ALBERT HALL" />
          <Tour date="JUN 4TH" city="LILLE" arena="L'AERONEF" />
          <Tour date="JUN 6TH" city="PARIS" arena="HARMONIE DE PARIS" />
          <Tour date="JUN 8TH" city="LYON" arena="LES NUITS DE FOURVIERE" />
          <Tour date="JUN 10TH" city="BARCELONA" arena="PRIMAVERA SOUND" />
          {/* Add more tours as needed */}
        </div>
      </section>
    );
  };
  
  export default ToursSection;