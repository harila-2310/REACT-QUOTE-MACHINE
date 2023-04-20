import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Contact </h3>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
           <a href="/">Email :hariprasathmg@gmail.com</a><br/>
            <a href="/quotes">Quote</a><br/>
            <a href="/add">add quote</a><br/>
           <a href="/pquotes">Popular quotes</a><br/>
          
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <h6 href="/">Home</h6>
            <h6 href="/quotes">Quote</h6>
            <h6 href="/add">add quote</h6>
           <h6 href="/pquotes">Popular quotes</h6>
          
        </div>
        <div className="footer-social">
          <ul>
            <li><a href="https://github.com/harila-2310"><FaGithub /></a></li>
            <li><a href="https://twitter.com/Haripra34970910?t=PFHs-GjK3IIzFRBwLXRzaA&s=08"><FaTwitter /></a></li>
            <li><a href="https://instagram.com/_hari_prasath_m?igshid=YmMyMTA2M2Y="><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/hari-prasath-a4a561225"><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Created by Hari Prasath</p>
      </div>
    </footer>
  );
};

export default Footer;
