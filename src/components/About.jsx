import React, { Component } from 'react';
import './../css/About.css'
import AboutItem from './AboutItem'

const About = () => {
    return ( 
    
    <div className="cards">
    <h1>WHAT WE OFFER</h1>
    <div className="cards__container">
      <div className="cards__wrapper">
        <ul className="cards__items">
          <AboutItem
            // src="images/flexibility.jpg"
            
            text="What Makes Us Different
            We’re a business that focuses on helping homeowners like you 
            find solutions for your problem whether you’re going through a 
            foreclosure, can’t sell your property, or just need to sell their home for all kinds of reasons.
            
            Our vow is to treat you with respect, empathize with your situation and offer the best solution we can for getting your home sold. Yes, we’re not licensed but our intent is to purchase your property As-Is, not list your home like traditional real estate professionals offer. You will be able to utilize our knowledge and expertise free of charge for handling the entire transaction from start to finish without being charged a dime in commissions or fees."
            
            path="/mind"
          />
          <AboutItem
            src="images/care.jpg"
            text="Becoming You is a family. We'll remember your dog's name; we'll send you gifts for big life events; and we'll always be here to listen, no matter what's going on in your life. It's an honor to be apart of your journey, and we want you to feel supported in every way."
            
            path="/soul"
          />
            <AboutItem
            src="images/care.jpg"
            text="Becoming You is a family. We'll remember your dog's name; we'll send you gifts for big life events; and we'll always be here to listen, no matter what's going on in your life. It's an honor to be apart of your journey, and we want you to feel supported in every way."
          
            path="/soul"
          />

        </ul>
      </div>
    </div>
  </div>)

}
 
export default About;