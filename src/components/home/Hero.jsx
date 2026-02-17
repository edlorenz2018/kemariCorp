import { useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/kemaribuilding.png";

import GetStarted from "./GetStarted"; // ✅ since GetStarted is inside home folder

function Hero() {
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-title">
          We Build Dependable <br />
          Technology you can trust
        </div>

        <p className="hero-description">
          DESIGN, LAYOUTS, CCTV, PABX SYSTEM, STRUCTURED CABLING, ALL AUXILIARY
          WORKS.
        </p>

        <button className="hero-btn" onClick={() => setShowGetStarted(true)}>
          Get Started
        </button>
      </div>

      {/* ✅ GET STARTED OVERLAY */}
      {showGetStarted && (
        <div className="getstarted-overlay">
          <button
            className="close-getstarted"
            onClick={() => setShowGetStarted(false)}
          >
            ✕
          </button>

          <GetStarted />
        </div>
      )}
    </section>
  );
}

export default Hero;
