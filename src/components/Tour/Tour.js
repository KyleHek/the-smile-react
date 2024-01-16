import React from 'react';
import './Tour.css';

const Tour = ({ date, city, arena }) => {
  return (
    <div className="tour-row">
      <span className="tour-item tour-date">{date}</span>
      <span className="tour-item tour-city">{city}</span>
      <span className="tour-item tour-arena">{arena}</span>
      <button type="button" className="btn tour-item tour-btn btn-primary">BUY TICKETS</button>
    </div>
  );
};

export default Tour;