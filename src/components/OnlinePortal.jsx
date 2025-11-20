import React from "react";
import "../styles/home.css";
import Admission from "../assets/Admission.png";
import mail from "../assets/mail.png";
import office from "../assets/office.png";
import portal from "../assets/portal.png";
import scholor from "../assets/scholor.png";
import seminar from "../assets/seminar.png";

const OnlinePortal = () => {
  const portals = [
    {
      icon: Admission,
      text: "Admission",
      url: "https://admission.allduniv.ac.in/",
    },
    {
      icon: mail,
      text: "Web Mail",
      url: "https://mail.allduniv.ac.in/",
    },
    {
      icon: office,
      text: "UoA E-Office",
      url: "https://eoffice.allduniv.ac.in/",
    },
    {
      icon: portal,
      text: "Samarth Portal",
      url: "https://allduniv.samarth.edu.in/",
    },
    {
      icon: seminar,
      text: "Corporate Social Responsibility (CSR)",
      url: "https://csr.allduniv.ac.in/",
    },
    {
      icon: scholor,
      text: "Endowment Scholarship",
      url: "https://scholarship.allduniv.ac.in/",
    },
  ];

  return (
    <section className="portalSection">
      <div className="container portalContainer text-center">
        {/* Title */}
        <h2 className="portal-title mb-5">ONLINE PORTAL</h2>

        {/* Portal Cards */}
        <div className="portal-links-wrapper">
          {portals.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portal-card"
            >
              <div className="portal-icon">
                <img src={item.icon} alt={item.text} />
              </div>
              <span className="portal-text">{item.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlinePortal;
