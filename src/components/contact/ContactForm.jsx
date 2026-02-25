import { useEffect, useState } from "react";
import './ContactForm.css'

import pinIcon from "../../assets/pin.png"; 
import emIcon from "../../assets/email.png"; 
import teIcon from "../../assets/telephone.png"; 

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <section className={`contact-form-section ${isVisible ? "animate-up" : ""}`}>
      <div className="formdiv">
      {/* ================= CONTACT CARDS ================= */}
      <div className={`contact-cards-form ${isVisible ? "animate-up" : ""}`}>
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

      {/* ================= FORM TITLE & SUBTITLE ================= */}
      <h2 className="form-title">Get in Touch with Kemari!</h2>
      <p className="form-subtitle">
        Have something in mind or just want to learn more? Fill out the form and
        our team will reach out to you soon.
      </p>

      {/* ================= FORM WRAPPER ================= */}
      <div className="form-wrapper">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name here" />
            </div>

            <div className="form-group">
              <label>Company:</label>
              <input type="text" placeholder="Enter your company name here (Optional)" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Enter your email here" />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group full">
            <label>Message:</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* ================= MAP ================= */}
      <div className="map-container">
        <iframe
          title="Kemari Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.2415477182667!2d123.78425927958199!3d10.242092628607184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9779308b7e0a1%3A0x52342118da36b5ce!2sKemari%20Technology%20and%20Services!5e0!3m2!1sen!2sph!4v1769561396825!5m2!1sen!2sph"
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;