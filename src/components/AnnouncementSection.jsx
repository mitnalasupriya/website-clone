import React from "react";
import "../styles/home.css";
import vc from "../assets/vc.jpg";
import visitor from "../assets/visitor.jpg";
import cheifrector from "../assets/cheifrector.png";
import chancellor from "../assets/chancellor.png";
import newicon from "../assets/newicon.png";
import central from "../assets/central.png";


const AnnouncementSection = () => {
  const announcements = [
    {
      date: "05 Nov 2025",
      title: "Notification: Reconstitution of the Proctorial Board",
      isNew: true,
    },
    {
      date: "31 Oct 2025",
      title:
        "Winter Training on Space Science and Technology 2025 (A skill training and internship program)",
      isNew: true,
    },
    {
      date: "29 Oct 2025",
      title:
        "बी.ए. भाग-2 मुख्य परीक्षा एवं द्वितीय परीक्षा से उत्तीर्ण छात्र/छात्राओं को सूचित किया जाता है कि सत्र 2025-26 बी.ए. भाग-3 में शुल्क जमा करके विषय पत्रक भरकर दिनांक 18-11-2025 तक अभिषिक्त कला संकाय कार्यालय में जमा करें",
      isNew: true,
    },
    {
      date: "28 Oct 2025",
      title: "Registration of Selection & Trials for Hockey, Sports Board",
      isNew: true,
    },
    {
      date: "28 Oct 2025",
      title: "“Fit India Freedom Run for 01 KM”, Sports Board",
      isNew: true,
    },
  ];

  return (
    <>
      {/* === ANNOUNCEMENTS SECTION === */}
      <section className="announcement-section">
        <h2 className="announcement-title">ANNOUNCEMENT</h2>
        <div className="announcement-line"></div>

        <div className="announcement-content">
         
          <div className="announcement-left">
            <img src={vc} alt="Vice Chancellor" className="vc-image" />
            <div className="vc-info">
              <div className="vc-date">
                
                <span>October 25, 2025</span>
              </div>
              <p className="vc-msg">
                New Year Greeting from Hon'ble Vice-Chancellor
              </p>
              <a
         href="https://example.com/details"
          target="_blank"
          rel="noopener noreferrer"
          className="view-detail"
            >
          View Detail
          </a>

            </div>
          </div>

          {/* === RIGHT SIDE === */}
          <div className="announcement-right">
            <div className="scroll-container">
              <div className="scroll-content">
                {announcements.map((item, index) => (
                  <div className="announcement-item" key={index}>
                    <div className="date">
                     
                      <span>{item.date}</span>
                    </div>
                    <p className="text">
                      {item.title}
                      {item.isNew && (
                        <span className="new-badge">
                          <img src={newicon} alt="New" />
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
           <a
  href="https://yourwebsite.com/news"
  className="read-more"
  target="_blank"
  rel="noopener noreferrer"
>
  Read All News
</a>

          </div>
        </div>
      </section>

     {/* === CENTRAL SCHEME SECTION === */}
<section className="central-scheme-section">
 
  <div className="scheme-text-section">
    <div className="scheme-date">07 Dec 2021</div>
    <div className="scheme-title-wrapper">
      <div className="scheme-title">
        Central Sector Scheme of Scholarship for Colleges and University Student (CSSS)
      </div>
    </div>
  </div>

  {/* Right side: Button */}
  <div className="scheme-button-section">
    <a
      href="https://www.allduniv.ac.in"
      target="_blank"
      rel="noopener noreferrer"
      className="scheme-button"
    >
      <img
        src={central}
        alt="Important links"
        className="scheme-button-icon"
      />
      More important links
    </a>
  </div>
</section>



      <section className="leadership-section">
  <h2 className="leadership-title"></h2>
  <div className="leadership-line"></div>

  <div className="leadership-cards">
    <div className="leader-card">
      <div className="leader-image-container">
        <img src={visitor} alt="Visitor" className="leader-image" />
        <div className="leader-overlay">
          <h4 className="leader-role">Visitor</h4>
        </div>
      </div>
      <h3 className="leader-name">Smt. Droupadi Murmu</h3>
      <p className="leader-position">President of India</p>
    </div>

    <div className="leader-card">
      <div className="leader-image-container">
        <img src={cheifrector} alt="Chief Rector" className="leader-image" />
        <div className="leader-overlay">
          <h4 className="leader-role">Chief Rector</h4>
        </div>
      </div>
      <h3 className="leader-name">Smt. Anandiben Patel</h3>
      <p className="leader-position">Governor of Uttar Pradesh</p>
    </div>

    <div className="leader-card">
      <div className="leader-image-container">
        <img src={chancellor} alt="Chancellor" className="leader-image" />
        <div className="leader-overlay">
          <h4 className="leader-role">Chancellor</h4>
        </div>
      </div>
      <h3 className="leader-name">Shri Ashish Kumar Chauhan</h3>
      <p className="leader-position">
        Chancellor (University of Allahabad)
      </p>
    </div>

    <div className="leader-card">
      <div className="leader-image-container">
        <img src={vc} alt="Vice Chancellor" className="leader-image" />
        <div className="leader-overlay">
          <h4 className="leader-role">Vice-Chancellor</h4>
        </div>
      </div>
      <h3 className="leader-name">Prof. Sangita Srivastava</h3>
      <p className="leader-position">
        Vice-Chancellor (University of Allahabad)
      </p>
    </div>
  </div>
</section>

    </>
  );
};

export default AnnouncementSection;
