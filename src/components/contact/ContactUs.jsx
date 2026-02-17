import { useEffect, useState } from "react";
import "./ContactUs.css";
import bgImg from "../../assets/kemaribuilding.png";
import pinIcon from "../../assets/pin.png"; 
import emIcon from "../../assets/email.png"; 
import teIcon from "../../assets/telephone.png"; 

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* HERO CONTENT (Exact copy of AboutUs) */}
      <div className="contact-hero-content">
        <div className="contact-hero-title">
          We Build Dependable <br />
          Technology you can trust
        </div>

        <p className="contact-hero-description">
          DESIGN, LAYOUTS, CCTV, PABX SYSTEM, STRUCTURED CABLING, ALL AUXILIARY
          WORKS.
        </p>

        <button className="contact-hero-btn">Get Started</button>
      </div>

      {/* CONTACT CARDS */}
      <div className={`contact-cards ${isVisible ? "animate-up" : ""}`}>
        <div className="contact-card">
          <div className="icon">
            <img src={pinIcon} alt="Location" className="icon-img" />
          </div>
          <p>
            3rd Floor Legaspi Commercial <br />
            Bldg, Tunghaan Minglanilla, Cebu.
          </p>
        </div>

        <div className="contact-card">
          <div className="icon">
            <img src={emIcon} alt="Email" className="icon-img" />
          </div>
          <p>kemari.hr@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="icon">
            <img src={teIcon} alt="Phone" className="icon-img" />
          </div>
          <p>(032) - 384 - 3804</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
