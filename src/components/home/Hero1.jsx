import { useEffect, useState } from "react";
import "./Hero1.css";

import highlights1 from "../../assets/featuredimgs/highlights1.png"; 
import highlights2 from "../../assets/featuredimgs/highlights2.png"; 
//import highlights3 from "../../assets/featuredimgs/highlights3.png"; 
import highlights4 from "../../assets/featuredimgs/highlights4.png"; 

import kemarilogohero from "../../assets/kemarilogohero.png";

function Hero1() {
  const rawImages = [highlights1, highlights2, highlights4];

  // Filter out any undefined images (in case an import fails)
  const images = rawImages.filter(Boolean);

  const [index, setIndex] = useState(0);

  // Preload images
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, [images]);

  // Carousel effect
  useEffect(() => {
    if (images.length === 0) return; // no images, do nothing

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return (
      <section className="hero-simple">
        <div className="hero-overlay"></div>
        <img src={kemarilogohero} alt="Logo" className="hero-logo" />
      </section>
    );
  }

  return (
    <section
      className="hero-simple"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <div className="hero-overlay"></div>
      <img src={kemarilogohero} alt="Logo" className="hero-logo" />
    </section>
  );
}

export default Hero1;