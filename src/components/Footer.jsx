import React, { Component } from 'react';
import './../css/Footer.css'

 


const Footer = () => {
    return ( <footer className="footer">
    <div className="footer__addr">
      <h1 className="footer__logo">Something</h1>
          
      <h2>Contact</h2>
      

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
            <a href="https://www.instagram.com/newgande1/">Instagram</a>
          </li>
          
          <li>
            <a href="https://twitter.com/nextdoorgroupl1">Twitter</a>
          </li>
          
          <li>
          {/* <i class="fa fa-facebook"></i> */}
         <a href="https://www.facebook.com/nextdoorgroupllc"> <i className="fab fa-twitter">Facebook</i></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/next-door-group-llc/">LinkedIn</a>
          </li>
        </ul>
      </li>
    </ul>
    
    {/* <div className="legal">
      <p>&copy; 2019 Something. All rights reserved.</p>
      
      
    </div> */}
    <div className="legal__links">
        <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
      </div>
  </footer>  );
}
 
export default Footer;