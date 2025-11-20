import React, { useRef } from "react";
import "../styles/home.css";
import { Container } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import link1 from "../assets/link1.png";
import link2 from "../assets/link2.png";
import link3 from "../assets/link3.png";
import link4 from "../assets/link4.png";
import link5 from "../assets/link5.png";
import link6 from "../assets/link6.png";
import link7 from "../assets/link7.png";
import link8 from "../assets/link8.jpg";

function UsefulLinks() {
  const scrollRef = useRef(null);

  const links = [
    { img: link1, alt: "University Grants Commission", url: "https://www.ugc.ac.in/" },
    { img: link2, alt: "UGC MOOCs", url: "https://ugcmoocs.inflibnet.ac.in/" },
    { img: link3, alt: "Swayam Prabha", url: "https://www.swayamprabha.gov.in/" },
    { img: link4, alt: "Cyber Dost", url: "https://cyberdost.gov.in/" },
    { img: link5, alt: "National Knowledge Network", url: "https://nkn.gov.in/" },
    { img: link6, alt: "National Portal of India", url: "https://www.india.gov.in/" },
    { img: link7, alt: "INFLIBNET", url: "https://www.inflibnet.ac.in/" },
    { img: link8, alt: "UP Government", url: "https://up.gov.in/" },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="useful-links-section py-5 bg-light position-relative">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-uppercase text-dark">
          Useful Links
        </h2>

        <div className="scroll-container position-relative">
          {/* Scrollable clickable logos */}
          <div ref={scrollRef} className="useful-links-scroll d-flex gap-3 px-2 overflow-auto">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div className="link-box">
                  <img
                    src={link.img}
                    alt={link.alt}
                    className="img-fluid link-logo"
                    style={{
                      maxHeight: "60px",
                      width: "180px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Arrows inside image area */}
          <button className="arrow-btn inside left" onClick={() => scroll("left")} aria-label="Scroll Left">
            <ChevronLeft size={28} />
          </button>

          <button className="arrow-btn inside right" onClick={() => scroll("right")} aria-label="Scroll Right">
            <ChevronRight size={28} />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default UsefulLinks;
