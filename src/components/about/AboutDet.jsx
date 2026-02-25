import { useEffect, useState, useRef } from "react";
import "./AboutDet.css";

// Team Images
import teamImg from "../../assets/kemariceo.png";
import finance from "../../assets/finance.png";
import hrofficer from "../../assets/hrofficer.png";
import acofficer from "../../assets/accountingofficer.png";
import Admin from "../../assets/Admin.png";
import Driver from "../../assets/driver.png";
import Quantity from "../../assets/quantitysurveyor.png";
import Supervisor from "../../assets/superviser.png";
import CAD from "../../assets/cad.png";
import Site from "../../assets/site1.png";
import THead from "../../assets/head.png";
import Personnel from "../../assets/personnel.png";
import Site1 from "../../assets/site2.png";
import Web from "../../assets/web.png";
import Web1 from "../../assets/web1.jpg";


import BottomImg from "../../assets/kemarioffice.png";

const AboutDet = () => {
  const [isVisible, setIsVisible] = useState(false);
  const teamRef = useRef([]);

  const teamMembers = [
    { img: teamImg, name: "Kemar ICEO", position: "CEO" },
    { img: finance, name: "Maricel S. Burbos", position: "Finance Manager" },
    { img: hrofficer, name: "Ferdilisa V. Sulat", position: "HR Officer" },
    { img: acofficer, name: "Donabel V. Tapdasan", position: "Accounting Officer" },
    { img: Admin, name: "Maria Fatima B. Tapic", position: "Admin/Purchasing" },
    { img: Driver, name: "Rusauro T. Sabellon", position: "Purchasing Driver" },
    { img: Quantity, name: "Rachel Marie L. Miranda", position: "Quantity Surveyor" },
    { img: Supervisor, name: "Ramil Handuman", position: "Project Supervisor" },
    { img: CAD, name: "Jogie Anne T. Candol", position: "CAD Operator" },
    { img: Site, name: "Reynzo N. Olila", position: "Site Engineer/Vertex" },
    { img: THead, name: "Mario L. Aparis", position: "Technical Head" },
    { img: Personnel, name: "Angelito N. Abalo", position: "Technical Personnel/Outside Cebu" },
    { img: Site1, name: "Princess Lea Canlas", position: "Site Engineer/Paseo" },
    { img: Web, name: "Ed Lorenz Villarasa", position: "Website Developer" },
    { img: Web1, name: "Joel Janzel Babon", position: "Website Developer" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("team-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    teamRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`aboutdet-section ${isVisible ? "animate-up" : ""}`}>
      {/* 🔹 CONTENT SHIFT WRAPPER */}
      <div className="aboutdet-content-shift">
        <h1 className="main-about-title">
          <i></i>Your trusted partner in auxiliary and security solutions
        </h1>

        <div className="general-container">
          <div className="general-box">
            <h3>General Information</h3>
            <p><strong>Name of Firm:</strong> KEMARI TECHNOLOGY & SERVICES / KEMARI TECHNOLOGY OPC</p>
            <p><strong>Name of Owner:</strong> LOREKE VILLARAZA BURBOS</p>
            <p><strong>Contact Number:</strong> (032) 3843804 | 09208181037 | 09171383790</p>
            <p><strong>Business Address:</strong> 3rd Floor Legazpi Bldg., beside Shell Station, Tunghaan, Minglanilla, Cebu</p>
            <p><strong>Primary Purpose:</strong> Auxiliary/Electronics related Works</p>
            <p><strong>Legal Status:</strong> CORPORATION</p>
            <p><strong>Bankers:</strong> BDO UNIBANK</p>
            <p><strong>Email:</strong> kemaritechnology@yahoo.com</p>
            <p><strong>TIN/2303 Number:</strong> 648-172-622-0000</p>
          </div>

          <div className="general-box">
            <h3>Auxiliary Services</h3>
            <ul>
              <li>Design & Costing for Auxiliary Works</li>
              <li>CCTV System</li>
              <li>Structured Cabling - Data & Voice</li>
              <li>CATV System</li>
              <li>PABX System</li>
              <li>BGMPA / Paging System</li>
              <li>Home & Building Security Systems</li>
            </ul>
          </div>
        </div>

        <div className="mvv-container">
          <div className="mvv-box">
            <h2>MISSION</h2>
            <p>Our mission is to provide protection and security to our clients through a bespoke service tailored to their specific needs, ultimately the safety and security of the client's staff, premises, assets and the general public is our highest priority</p>
          </div>

          <div className="mvv-box">
            <h2>VISION</h2>
            <p>We are committed to the ongoing improvement of the services we provide to our clients. By investing in and developing our most important assets, our staff, we aim to achieve all our goals and exceed our clients' expectations. Through our commitment to high standards it is our vision to earn the trust of our clients by delivering the best quality security services within the Philippines.</p>
          </div>

          <div className="mvv-box">
            <h2>VALUE</h2>
            <p>As a company and as individuals we value above all else honesty, integrity, unselfishness, professionalism and mutual respect. For our staff, we offer a rewarding and challenging environment where personal development can flourish. We hold ourselves accountable to our clients, staff and partners by honouring our commitments, providing results and continually striving to provide the highest quality security services.</p>
          </div>
        </div>

        <section className="team-section">
          <p className="team-title">Our Team</p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                className="team-member"
                key={index}
                ref={(el) => (teamRef.current[index] = el)}
              >
                <img src={member.img} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 🔹 BOTTOM FULL-WIDTH IMAGE */}
      <div className="bottom-img-container">
        <img src={BottomImg} alt="Kemari Building" className="bottom-img" />
      </div>
    </section>
  );
};

export default AboutDet;