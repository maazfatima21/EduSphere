import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        
        <div className="footer-left">
          <h2>EduSphere</h2>
          <p>
            Inspiring minds. Transforming futures. Impacting the world.
          </p>
          <p><strong>Knowledge. Growth. Excellence.</strong></p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        
        <div className="footer-center">
          <h3>EduSphere</h3>
          <p>Knowledge Avenue, India</p>
          <p>
            <a href="mailto:contact@edusphere.edu">contact@edusphere.edu</a>
          </p>
          <p>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </p>
        </div>

        <div className="footer-right">
          <img
            src="/images/Footer.png"
            alt="Campus Map"
            className="footer-map"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
