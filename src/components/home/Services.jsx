import { useState, useEffect, useRef } from "react";
import "./Services.css";

import intercomImg from "../../assets/feature1.png";
import cctvImg from "../../assets/feature2.png";
import cablingImg from "../../assets/feature3.png";
import catvImg from "../../assets/feature1.png";
import pagingImg from "../../assets/feature2.png";
import fireImg from "../../assets/feature3.png";
import wifiImg from "../../assets/feature2.png";

import ViewWork from "./ViewWork"; // ✅ adjust path if needed

const servicesData = [
  { title: "Intercom System", image: intercomImg },
  { title: "CCTV System", image: cctvImg },
  { title: "Structured Cabling – Data & Voice", image: cablingImg },
  { title: "CATV System", image: catvImg },
  { title: "BGMPA / Paging System", image: pagingImg },
  { title: "Fire Alarm and Detection System", image: fireImg },
  { title: "Access Point / Wi-Fi", image: wifiImg },
];

function Services() {
  const [index, setIndex] = useState(2);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  const [showViewWork, setShowViewWork] = useState(false); // ✅ NEW

  const sectionRef = useRef(null);

  const prev = () => {
    setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % servicesData.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Auto-slide */
  useEffect(() => {
    if (!visible || paused || showViewWork) return;

    const interval = setInterval(next, 2500);
    return () => clearInterval(interval);
  }, [visible, paused, showViewWork]);

  return (
    <section ref={sectionRef} className="services">
      <div className={`services-inner ${visible ? "show" : ""}`}>
        <h2 className="services-title">Step Inside the Projects We've Created</h2>

       
        {!showViewWork ? (
          <div className="carousel">
            <button className="services-nav left" onClick={prev}>
              ‹
            </button>

            <div className="cards">
              {servicesData.map((service, i) => {
                let offset = i - index;
                if (offset > servicesData.length / 2) offset -= servicesData.length;
                if (offset < -servicesData.length / 2) offset += servicesData.length;

                const distance = 260;
                let xPos = visible ? offset * distance : 0;

                if (Math.abs(offset) === 2) xPos *= 0.85;
                if (Math.abs(offset) === 3) xPos *= 0.7;

                const scale = visible
                  ? offset === 0
                    ? 1.25
                    : 1 - Math.abs(offset) * 0.08
                  : 0.8;

                const zIndex = offset === 0 ? 20 : 10 - Math.abs(offset);
                const opacity = Math.abs(offset) > 2 ? 0 : 1;

                return (
                  <div
                    key={i}
                    className={`card ${offset === 0 ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    style={{
                      backgroundImage: `url(${service.image})`,
                      transform: `translateX(${xPos}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      pointerEvents: opacity === 0 ? "none" : "auto",
                      width: "300px",
                      height: "330px",
                    }}
                    onMouseEnter={() => {
                      if (offset === 0) setPaused(true);
                    }}
                    onMouseLeave={() => {
                      if (offset === 0) setPaused(false);
                    }}
                  >
                    <div className="card-overlay">
                      <p>{service.title}</p>

                      {offset === 0 && (
                        <button
                          className="card-arrow-only"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowViewWork(true); // ✅ switch to viewwork rectangle
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="services-nav right" onClick={next}>
              ›
            </button>
          </div>
        ) : (
          <ViewWork onBack={() => setShowViewWork(false)} />
        )}
      </div>
    </section>
  );
}

export default Services;
