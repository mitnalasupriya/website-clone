import React, { createContext, useState } from "react";


export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Example global states
  const [offers, setOffers] = useState([
    " Admissions Open for 2025–26",
    " Foundation Day Celebration on 23rd Nov",
    " NEP Skill Courses Registration Started",
    "University Achievements 2025 Published</strong",
    "Explore New Research Initiatives",
    "Placement Drives Starting Soon!",
    "Independence Day Celebration 2025",
    "NEP 2.0 Skill/Ability Enhancement Courses 2025–26"
  ]);

  const [heroImages, setHeroImages] = useState([
    "/assets/images/hero/slide1.jpg",
    "/assets/images/hero/slide2.jpg",
    "/assets/images/hero/slide3.jpg",
  ]);

  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider
      value={{ offers, setOffers, heroImages, setHeroImages, theme, setTheme }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
