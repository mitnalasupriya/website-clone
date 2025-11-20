import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import seminar from "../assets/seminar.png";
import career from "../assets/carrer.png";
import admission from "../assets/admission.png";
import course from "../assets/course.png";
import samarth from "../assets/Samarth.png";

import clgvideo from "../assets/clgvideo.mp4";

const IconsVideoSection = () => {
  const navigate = useNavigate();

  const icons = [
    { img: seminar, label: "Seminar", link: "/seminar" },
    { img: admission, label: "Admission", link: "/admission" },
    { img: course, label: "Courses", link: "/courses" },
    { img: career, label: "Career", link: "/career" },
    { img: samarth, label: "Samarth eGov", link: "/samarth" },
  ];

  return (
    <section className="icons-video-section">
      {/* === ICON STRIP === */}
      <div className="icon-strip">
        {icons.map((item, index) => (
          <div
            className="icon-box"
            key={index}
            onClick={() => navigate(item.link)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.img} alt={item.label} className="icon-image" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      {/* === VIDEO SECTION === */}
      <div className="video-section">
        <video autoPlay loop muted playsInline>
          <source src={clgvideo} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default IconsVideoSection;
