import React from 'react';
import './Footer.css';
import Youtube from '../../assets/youtube.png';
import Spotify from '../../assets/spotify.png';
import Facebook from '../../assets/facebook.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <h3 className="band-name">The Smile</h3>
        <ul className="nav footer-nav">
          <li>
            <a href="https://www.youtube.com/channel/UCym53v2ao-wXBhSUIKxAekw" className="font" target="_blank" rel="noreferrer">
              <img src={Youtube} 
              alt="Youtube Logo" />
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/artist/6styCzc1Ej4NxISL0LiigM?si=6qh5ESiKQp6Us0pvr1g8rA" className="font" target="_blank" rel="noreferrer">
              <img src={Spotify} 
              alt="Spotify Logo" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/thesmiletheband" className="font" target="_blank" rel="noreferrer">
              <img src={Facebook} 
              alt="Facebook Logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;