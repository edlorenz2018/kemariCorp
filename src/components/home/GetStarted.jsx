import { useState, useRef, useEffect } from "react";
import "./GetStarted.css";

import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature2.png";

const sections = [
  {
    title: "CCTV Installation",
    desc: "Professional CCTV systems designed for security and reliability.",
    images: [img1, img2, img3, img4],
  },
  {
    title: "Building Automation",
    desc: "Smart building solutions for modern infrastructure.",
    images: [img2, img3, img4, img1],
  },
  {
    title: "Network Infrastructure",
    desc: "Reliable wired and wireless network installations.",
    images: [img3, img1, img2, img4],
  },
  {
    title: "Structured Cabling",
    desc: "Organized cabling solutions for clean and efficient networks.",
    images: [img4, img2, img1, img3],
  },
  {
    title: "Fire Alarm System",
    desc: "Reliable safety alarm systems designed for building protection.",
    images: [img1, img4, img2, img3],
  },
];

const GetStartedSection = ({ title, desc, images }) => {
  const [bgImage, setBgImage] = useState(images[0]);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Animate when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
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
        <button className="section-btn">Book Now</button>
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = containerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.offsetWidth < container.scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateScrollButtons);

    // initial check
    updateScrollButtons();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  const scrollTo = (direction) => {
    const container = containerRef.current;
    const sectionWidth = container.offsetWidth;
    if (direction === "left") {
      container.scrollLeft -= sectionWidth;
    } else {
      container.scrollLeft += sectionWidth;
    }
  };

  return (
    <div className="getstarted-wrapper">
      <div className="getstarted-container" ref={containerRef}>
        {sections.map((section, index) => (
          <GetStartedSection key={index} {...section} />
        ))}
      </div>

      <div className="getstarted-nav-outside">
        <button
          onClick={() => scrollTo("left")}
          disabled={!canScrollLeft}
          className={!canScrollLeft ? "disabled" : ""}
        >
          &lt;
        </button>
        <button
          onClick={() => scrollTo("right")}
          disabled={!canScrollRight}
          className={!canScrollRight ? "disabled" : ""}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
