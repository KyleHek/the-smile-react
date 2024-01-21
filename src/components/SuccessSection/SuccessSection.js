import React from 'react';
import './SuccessSection.css';

import success from '../../assets/success.png';

const SuccessSection = () => {
  return (
    <section className="center container content-section sc-section">
        <h2 className="section-header">Payment Success</h2>
        <p className='sc-p'>Thank you for your purchase.</p>
        <p className='sc-p'>Your order will be dispatched within 2-5 business days.</p>
        <p className='sc-p'>An email confirmation has been sent.</p>
        <img className='sc-img' src={success} alt='success'/>
    </section>
  );
};

export default SuccessSection;