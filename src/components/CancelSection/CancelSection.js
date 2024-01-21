import React from 'react';
import './CancelSection.css';

import cancel from '../../assets/cancel.png';

const CancelSection = () => {
  return (
    <section className="center container content-section cc-section">
        <h2 className="section-header">Something Went Wrong</h2>
        <p className='cc-p'>We apologize for the inconvenience, but an error occured while processing your order request.</p>
        <p className='cc-p'>For any support, Email: support@company.com</p>
        <img className='cc-img' src={cancel} alt='success'/>
    </section>
  );
};

export default CancelSection;