import React from 'react';
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>

      <div className="footer_main">

        
        <div className="footer_tag">

          <h2>Quick Link</h2>
          
          <p>Home</p>
          <p>Menu List</p>
          <p>Login</p>
          <p>Cart</p>

        </div>

        <div className="footer_tag">

          <h2>Contact</h2>
          <p>+94 12 3456 789</p>
         
          <p>foodfun123@gmail.com</p>

        </div>

        <div className="footer_tag">

          <h2>Our Services</h2>
          <p>Fast Delivery</p>
          <p>Easy Payments</p>
          <p>24 x 7 Service</p>

        </div>

        <div className="footer_tag">

          <h2>Follows</h2>
        
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>

        </div>

      </div>

      

    </footer>
  );
};

export default Footer;

