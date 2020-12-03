import React, { Component } from 'react';
import './../css/Navbar.css'

const Navbar = () => {
    return (  <header>
        <img src="assets/logo.png"></img><nav>
   <ul>
       <li><a href="#">Home</a></li>
       <li><a href="#">Buy</a></li>
       <li><a href="#">Sell</a></li>
       <li><a href="#">Clients</a></li>
       <li><a href="/about">About</a></li>
       <li><a href="#">FAQ</a></li>
       <li><a href="#">Contact</a></li>
   </ul>
</nav></header> );
}
 
export default Navbar;