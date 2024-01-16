import React from 'react';
import './AboutSection.css';
import Band from '../../assets/band.jpg';

const AboutSection = () => {
    return (
        <section className="center content-section container about-section">
            <h2 className="section-header">ABOUT</h2>
            <div className='about-position'>
                <img className="about-band-image" src={Band} alt='band'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam aliquam aut autem consequatur at adipisci provident totam esse aperiam. Autem animi ad, omnis aliquid veniam optio commodi? Fugiat, velit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic consequatur accusantium, nisi est commodi temporibus laudantium, ipsam veniam cupiditate repellat exercitationem quas vero ut! Totam asperiores aperiam eveniet porro dolorum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a dignissimos minus consequatur perferendis earum deserunt ex numquam fugiat perspiciatis quo cupiditate, accusantium unde adipisci harum dolorem odit nulla magnam?</p>
            </div>
        </section>
    );
  };
  
  export default AboutSection;