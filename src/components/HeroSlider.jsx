import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

import "../styles/home.css";

const HeroSlider = () => {
  // 🖼️ Images imported locally
  const heroImages = [banner1, banner2, banner3];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="hero-slider">
      {heroImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`hero-slide ${index === current ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default HeroSlider;
