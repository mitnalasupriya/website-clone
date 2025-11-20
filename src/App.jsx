import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import MainNavbar from "./components/MainNavbar";
import HeroSlider from "./components/HeroSlider";
import IconsVideoSection from "./components/IconsVideoSection";
import Footer from "./components/Footer";
import AnnouncementSection from "./components/AnnouncementSection";
import OnlinePortal from "./components/OnlinePortal";
import UsefulLinks from "./components/UsefulLinks";

import Seminar from "./pages/Seminar";
import Admission from "./pages/Admission";
import Courses from "./pages/Courses";
import Career from "./pages/Career";
import Samarth from "./pages/Samarth";

// New pages
import About from "./pages/About";
import Administration from "./pages/Administration";
import Academics from "./pages/Academics";
import Student from "./pages/Student";
import Research from "./pages/Research";
import Facilities from "./pages/Facilities";
import Alumni from "./pages/Alumni";
import IQAC from "./pages/IQAC";
import Newsletter from "./pages/Newsletter";
import Convocation from "./pages/Convocation";

import "./styles/navbar.css";
import "./styles/home.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <MainNavbar />

        <Routes>
          {/* === HOME PAGE === */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <IconsVideoSection />
                <AnnouncementSection />
                <OnlinePortal />
                <UsefulLinks />
              </>
            }
          />

          {/* === EXISTING PAGES === */}
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/career" element={<Career />} />
          <Route path="/samarth" element={<Samarth />} />

          {/* === NEW NAVBAR PAGES === */}
          <Route path="/about" element={<About />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/student" element={<Student />} />
          <Route path="/research" element={<Research />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/convocation" element={<Convocation />} />
        </Routes>

        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
