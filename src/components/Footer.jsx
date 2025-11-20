import React from "react";
import "../styles/home.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Contact</h4>
          <div className="footer-line"></div>
          <p>
            <strong>University of Allahabad</strong><br />
            Senate House Campus,<br />
            University Road, Old Katra,<br />
            Prayagraj (Allahabad), Uttar Pradesh - 211002<br />
            0532-2461083
          </p>

          <h4 className="subheading">For Visitors</h4>
          <div className="footer-line"></div>
          <p>Address</p>
          <p>Map & Directions</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-line"></div>
          <p>Directory</p>
          <p>NEP 2020</p>
          <p>Sankalpana</p>
          <p>Tender</p>
          <p>Academic Calendar</p>
          <p>Download Forms</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-line"></div>
          <p>Pay Fees</p>
          <p>Admit Card</p>
          <p>Student Feedback Form</p>
          <p>Holidays - 2025</p>
          <p>Public Self-Disclosure</p>
          <p>Study in India</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <div className="footer-line"></div>
          <p>Annual Report</p>
          <p>Alumni Portal</p>
          <p>Contact Us</p>
          <p>Web Mail</p>
          <p>University Ranking</p>
          <p>NCTE, New Delhi</p>
          <p>Code of Conduct</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©Copyright University of Allahabad. All Rights Reserved.</p>
        <p className="visitor-count">
          Visitors: <span>10719596</span>
        </p>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
