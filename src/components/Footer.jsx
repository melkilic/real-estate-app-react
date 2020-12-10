import React, { Component } from 'react';
import './../css/Footer.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitter, FaLinkedin, FaMailBulk, FaPhoneAlt} from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai"

 
const Footer = () => {
    return ( <footer className="footer">
    <div className="footer__addr">
    <img className="footer__img"src="/assets/logo.png"/>
      {/* <h1 className="footer__logo">Next-Door Group</h1> */}
      <h2>Contact</h2>
     <h3> <FaPhoneAlt/> (214) 273-0094 </h3>
      <h3> <AiOutlineMail/> info@next-doorgroup.com</h3>
    </div>
    
    <ul className="footer__nav">
      <li className="nav__item">
        <h2 className="nav__title">Services</h2>
  
        <ul className="nav__ul">
          <li>
            <a href="#">Sell Your House</a>
          </li>
  
          <li>
            <a href="#">Join Buyers' List</a>
          </li>
{/*               
          <li>
            <a href="#">Alternative Ads</a>
          </li> */}
        </ul>
      </li>
      
      <li className="nav__item nav__item--extra">
        <h2 className="nav__title">Who We Are</h2>
        
        <ul className="nav__ul nav__ul--extra">
          <li>
            <a href="#">About Us</a>
          </li>
          
          <li>
            <a href="#">FAQ</a>
          </li>
          
          <li>
            <a href="#">Privacy Policy</a>
          </li>
{/*           
          <li>
            <a href="#">Automation</a>
          </li>
          
          <li>
            <a href="#">Artificial Intelligence</a>
          </li> */}
          
          {/* <li>
            <a href="#">IoT</a>
          </li> */}
        </ul>
      </li>
      
      <li className="nav__item">
        <h2 className="nav__title">Follow Us</h2>
        
        <ul className="nav__ul">
          <li>
            <a href="https://www.instagram.com/next_doorgroup"><FaInstagramSquare/>Instagram</a>
          </li>
          
          <li>
            <a href="https://twitter.com/nextdoorgroupl1"> <FaTwitter/>Twitter</a>
          </li>
          
          <li>
          {/* <i class="fa fa-facebook"></i> */}
         <a href="https://www.facebook.com/nextdoorgroupllc"> <FaFacebookSquare/>Facebook</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/next-door-group-llc/"><FaLinkedin/>LinkedIn</a>
          </li>
        </ul>
      </li>
    </ul>
    
    {/* <div className="legal">
      <p>&copy; 2019 Something. All rights reserved.</p>
      
      
    </div> */}
    <div className="legal__links">
        <span>Made with <span className="heart">♥</span> by Melike and Faizah </span>
      </div>
  </footer>  );
}
 
export default Footer;