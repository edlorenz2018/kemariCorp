import { useState, useRef, useEffect } from "react";
import "./GetStarted.css";

import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature2.png";

const sections = [
  {
    title: "CCTV System",
    desc: "Professional CCTV systems designed for security and reliability.",
    images: [img1, img2, img3, img4],
  },
  {
    title: "Intercom System",
    desc: "Smart building solutions for modern infrastructure.",
    images: [img2, img3, img4, img1],
  },
  {
    title: "Structured Cabling – Data & Voice",
    desc: "Reliable wired and wireless network installations.",
    images: [img3, img1, img2, img4],
  },
  {
    title: "CATV System",
    desc: "Organized cabling solutions for clean and efficient networks.",
    images: [img4, img2, img1, img3],
  },
  {
    title: "BGMPA / Paging System",
    desc: "Reliable safety alarm systems designed for building protection.",
    images: [img1, img4, img2, img3],
  },
  {
    title: "Fire Alarm and Detection System",
    desc: "Reliable safety alarm systems designed for building protection.",
    images: [img1, img4, img2, img3],
  },
  {
    title: "Access Point / Wi-Fi",
    desc: "Reliable safety alarm systems designed for building protection.",
    images: [img1, img4, img2, img3],
  },
];

const GetStartedSection = ({ title, desc, images, onRequest }) => {
  const [bgImage, setBgImage] = useState(images[0]);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`getstarted-section ${visible ? "slide-in" : ""}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="section-text">
        <h2>{title}</h2>
        <p>{desc}</p>
        <button className="section-btn" onClick={() => onRequest(title)}>
          Request now
        </button>
      </div>

      <div className="getstarted-thumbnail-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`getstarted-thumbnail ${bgImage === img ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setBgImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

const GetStarted = () => {
  const containerRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = containerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  const scrollTo = (direction) => {
    const container = containerRef.current;
    const sectionWidth = container.offsetWidth;
    if (direction === "left") container.scrollLeft -= sectionWidth;
    else container.scrollLeft += sectionWidth;
  };

  return (
    <>
      <div className="getstarted-wrapper">
        <div className="getstarted-container" ref={containerRef}>
          {sections.map((section, index) => (
            <GetStartedSection
              key={index}
              {...section}
              onRequest={(service) => setSelectedService(service)}
            />
          ))}
        </div>

        <div className="getstarted-nav-outside">
          <button onClick={() => scrollTo("left")} disabled={!canScrollLeft}>
            &lt;
          </button>
          <button onClick={() => scrollTo("right")} disabled={!canScrollRight}>
            &gt;
          </button>
        </div>
      </div>

      {/* FULLSCREEN FORM */}
      {selectedService && (
  <div className="request-fullscreen">

    <div className="request-fullscreen-content">

      {/* BACK BUTTON */}
      <button
        className="form-back-btn"
        onClick={() => setSelectedService(null)}
      >
        ✕
      </button>

      <h2>REQUEST SERVICE</h2>
      <p className="form-subtext">
        Tell us about your project and we'll get back to you.
      </p>

      <form>
        <input type="text" value={selectedService} readOnly />
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Project details / message" rows="5" />
        <button type="submit">Send Request</button>
      </form>

    </div>
  </div>
)}
    </>
  );
};

export default GetStarted;