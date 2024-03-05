import React from 'react';
import "../Styles/Home.css";
import { Link } from 'react-router-dom';
import photo1 from "../Assets/Shake img.jpeg"
import photo2 from "../Assets/crop.png"
const About = () => {
    return (
      <>
 <section id="Home">
            <div className="main anim">
              <div className="main_text">
                 <h1>Fulfill your comfort <br></br><span>food</span> cravings.</h1>
                    <p>
                    We base everything we do on Fresh Thinking. This means constantly seeking to work more efficiently, creatively and meticulously to meet our customers needs. We work everyday to drive consistency in the areas most important to our customers: Customer Service, Quality, Food Safety, Reporting, Technology.
                    </p>
               <Link className="btn" to="/menulist">Order Now</Link>
               </div>
               <div className="main_image">
               <img src={photo1} alt="Main Image" />
              </div>
      </div>
        </section>
        <div className="about">
      <div className="about_main">
        <div className="about_image">
          <img src={photo2}></img>
        </div>
        <div className="about_text">
          <h1><span>About</span>Us</h1>
          <h3>Why food choose us?</h3> 
          <p>
            We're digital nomads, living a digital life! And one thing that we have learned over the course of this evolution is that whatever we want or need, can be obtained with just a few clicks on our beloved smart devices. Even the food - all kinds, to satiate our different cravings on different days of the week. It's really an era that has something for everyone - whether a consumer or a provider.
          </p>

          <div className="about_services">
            <div className="s_1">
              <i className="fa-solid fa-truck-fast"></i>
              <a href="#">Fast Delivery</a>
            </div>

            <div className="s_1">
              <i className="fa-brands fa-amazon-pay"></i>
              <a href="#">Easy Payment</a>
            </div>

            <div className="s_1">
              <i className="fa-solid fa-headset"></i>
              <a href="#">24 x 7 Services</a>
            </div>
          </div>

          <a href="#" className="about_btn">
            Order Now
          </a>
        </div>
      </div>
    </div>
    </>
    );
}

export default About;