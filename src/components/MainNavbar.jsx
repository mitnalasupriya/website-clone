import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const MainNavbar = () => {
  const { offers } = useContext(GlobalContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (dropdown) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* ==== OFFER BAR ==== */}
      <div className="offer-bar py-1">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          {offers.map((offer, index) => (
            <span key={index} className="offer-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqD3LbP0pBHhS6dlhWs7uNCDz5vp8skRmsQ&s"
                alt="New"
                className="new-icon"
              />
              <strong>{offer}</strong>
              {index !== offers.length - 1 && " | "}
            </span>
          ))}
        </marquee>
      </div>

      {/* ==== LOGO ==== */}
      <div className="logo-above-nav text-center py-2 bg-white">
        <img src={logo} alt="University Logo" className="main-logo" />
      </div>

      {/* ==== MAIN NAVBAR ==== */}
      <Navbar expand="lg" className="bg-university shadow-sm sticky-top" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-5 text-white">
            {/* Add Brand if needed */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto fw-semibold">

              {/* HOME */}
              <NavDropdown
                title={<Link to="/" className="text-white text-decoration-none">Home</Link>}
                id="home-dropdown"
                className="custom-dropdown"
                show={openDropdown === "home"}
                onMouseEnter={() => handleMouseEnter("home")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/")}>Main Home Page</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/home/news")}>Latest News</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/home/events")}>Events</NavDropdown.Item>
              </NavDropdown>

              {/* ABOUT */}
              <NavDropdown
                title={<Link to="/about" className="text-white text-decoration-none">About</Link>}
                id="about-dropdown"
                className="custom-dropdown"
                show={openDropdown === "about"}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/about")}>About University</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/about/vision")}>Vision & Mission</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/about/history")}>History</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/about/organization")}>Organization Structure</NavDropdown.Item>
              </NavDropdown>

              {/* ADMINISTRATION */}
              <NavDropdown
                title={<Link to="/administration" className="text-white text-decoration-none">Administration</Link>}
                id="admin-dropdown"
                className="custom-dropdown"
                show={openDropdown === "admin"}
                onMouseEnter={() => handleMouseEnter("admin")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/administration")}>Administration Home</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/administration/vc")}>Vice Chancellor</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/administration/registrar")}>Registrar</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/administration/deans")}>Deans</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/administration/committees")}>Committees</NavDropdown.Item>
              </NavDropdown>

              {/* ACADEMICS */}
              <NavDropdown
                title={<Link to="/academics" className="text-white text-decoration-none">Academics</Link>}
                id="academics-dropdown"
                className="custom-dropdown"
                show={openDropdown === "academics"}
                onMouseEnter={() => handleMouseEnter("academics")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/academics")}>Academics Home</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/academics/departments")}>Departments</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/academics/programs")}>Programs</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/academics/calendar")}>Academic Calendar</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/academics/library")}>Library</NavDropdown.Item>
              </NavDropdown>

              {/* STUDENT */}
              <NavDropdown
                title={<Link to="/student" className="text-white text-decoration-none">Student</Link>}
                id="student-dropdown"
                className="custom-dropdown"
                show={openDropdown === "student"}
                onMouseEnter={() => handleMouseEnter("student")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/student")}>Student Portal</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/student/admissions")}>Admissions</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/student/examinations")}>Examinations</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/student/results")}>Results</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/student/scholarships")}>Scholarships</NavDropdown.Item>
              </NavDropdown>

              {/* RESEARCH */}
              <NavDropdown
                title={<Link to="/research" className="text-white text-decoration-none">Research</Link>}
                id="research-dropdown"
                className="custom-dropdown"
                show={openDropdown === "research"}
                onMouseEnter={() => handleMouseEnter("research")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/research")}>Research Overview</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/research/projects")}>Projects</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/research/publications")}>Publications</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/research/centers")}>Research Centers</NavDropdown.Item>
              </NavDropdown>

              {/* FACILITIES */}
              <NavDropdown
                title={<Link to="/facilities" className="text-white text-decoration-none">Facilities</Link>}
                id="facilities-dropdown"
                className="custom-dropdown"
                show={openDropdown === "facilities"}
                onMouseEnter={() => handleMouseEnter("facilities")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/facilities")}>Facilities Overview</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/facilities/hostels")}>Hostels</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/facilities/sports")}>Sports Complex</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/facilities/medical")}>Medical Center</NavDropdown.Item>
              </NavDropdown>

              {/* ALUMNI */}
              <NavDropdown
                title={<Link to="/alumni" className="text-white text-decoration-none">Alumni</Link>}
                id="alumni-dropdown"
                className="custom-dropdown"
                show={openDropdown === "alumni"}
                onMouseEnter={() => handleMouseEnter("alumni")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/alumni")}>Alumni Association</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/alumni/register")}>Register as Alumni</NavDropdown.Item>
              </NavDropdown>

              {/* IQAC */}
              <NavDropdown
                title={<Link to="/iqac" className="text-white text-decoration-none">IQAC</Link>}
                id="iqac-dropdown"
                className="custom-dropdown"
                show={openDropdown === "iqac"}
                onMouseEnter={() => handleMouseEnter("iqac")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/iqac")}>IQAC Home</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/iqac/reports")}>Reports</NavDropdown.Item>
              </NavDropdown>

              {/* NEWSLETTER */}
              <NavDropdown
                title={<Link to="/newsletter" className="text-white text-decoration-none">News Letter</Link>}
                id="newsletter-dropdown"
                className="custom-dropdown"
                show={openDropdown === "newsletter"}
                onMouseEnter={() => handleMouseEnter("newsletter")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/newsletter")}>All Newsletters</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/newsletter/archive")}>Archive</NavDropdown.Item>
              </NavDropdown>

              {/* CONVOCATION */}
              <NavDropdown
                title={<Link to="/convocation" className="text-white text-decoration-none">Convocation</Link>}
                id="convocation-dropdown"
                className="custom-dropdown"
                show={openDropdown === "convocation"}
                onMouseEnter={() => handleMouseEnter("convocation")}
                onMouseLeave={handleMouseLeave}
              >
                <NavDropdown.Item onClick={() => handleNavigate("/convocation")}>Convocation Home</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/convocation/speeches")}>Speeches</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate("/convocation/gallery")}>Photo Gallery</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
