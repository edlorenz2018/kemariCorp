import { useState } from "react";
import "./Hero.css";
import kemaribotbg from "../../assets/kemaribotbg.png";
import GetStarted from "./GetStarted";

function Hero() {
  const [showGetStarted, setShowGetStarted] = useState(false);

  return (
    <section
      id="hero-section"   // ✅ ADD THIS
      className="hero"
      style={{ backgroundImage: `url(${kemaribotbg})` }}
    >
      <div className="hero-dark-overlay"></div>
      <div className="overlay"></div>

      <div className="hero-content">
        <div className="hero-title">
          Start now to secure a smarter, safer, more connected tomorrow
        </div>

        <p className="hero-description">
          Partner with Kemari and build something greater together.
        </p>

        <button
          className="hero-btn"
          onClick={() => setShowGetStarted(true)}
        >
          View Services
        </button>
      </div>

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