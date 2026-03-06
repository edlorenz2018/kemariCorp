// ContactUsHero.jsx
import { useEffect, useState } from "react";
import "./ContactUs.css";

import bg1 from "../../assets/featuredimgs/highlights1.png"; 
import bg2 from "../../assets/featuredimgs/highlights2.png"; 
import bg3 from "../../assets/featuredimgs/highlights3.png"; 
import bg4 from "../../assets/featuredimgs/highlights4.png"; 

import companyLogo from "../../assets/kemarilogohero1.png";

function ContactUsHero() {
  const rawImages = [bg1, bg2, bg3, bg4];
  const images = rawImages.filter(Boolean);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, [images]);

  // Carousel effect
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section
      className="contactus-hero"
      style={images.length ? { backgroundImage: `url(${images[currentIndex]})` } : {}}
    >
      <div className="contactus-overlay"></div>
      <img src={companyLogo} alt="Logo" className="contactus-logo" />
    </section>
  );
}

export default ContactUsHero;