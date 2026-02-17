import { useEffect, useState } from "react";
import "./AboutUs.css";
import bgImg from "../../assets/kemaribuilding.png";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* HERO CONTENT (same style/position as Hero.jsx) */}
      <div className="about-hero-content">
        <div className="about-hero-title">
          We Build Dependable <br />
          Technology you can trust
        </div>

        <p className="about-hero-description">
          DESIGN, LAYOUTS, CCTV, PABX SYSTEM, STRUCTURED CABLING, ALL AUXILIARY
          WORKS.
        </p>

        <button className="about-hero-btn">Get Started</button>
      </div>

      {/* ABOUT CARDS (no changes) */}
      <div className={`about-cards ${isVisible ? "animate-up" : ""}`}>
        <div className="about-card">
          {/* CONTENT HERE */}
        </div>

        <div className="about-card">
          {/* CONTENT HERE */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
