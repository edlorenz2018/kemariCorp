import { useState, useEffect, useRef } from "react";
import "./Services.css";

import intercomImg from "../../assets/projectsimgs/crescentVille.png";
import cctvImg from "../../assets/projectsimgs/llcdorm.png";
import cablingImg from "../../assets/projectsimgs/llcAdmin.png";
import catvImg from "../../assets/projectsimgs/northwood.png";
import pagingImg from "../../assets/projectsimgs/jglTower.png";
import fireImg from "../../assets/projectsimgs/unifiInstallation.png";
import wifiImg from "../../assets/projectsimgs/1nitoTower.png";

// Add 6 images per service (replace with your actual images)
import intercom2 from "../../assets/projectsimgs/crescentVille.png";
import intercom3 from "../../assets/projectsimgs/crescentVille.png";
import intercom4 from "../../assets/projectsimgs/crescentVille.png";
import intercom5 from "../../assets/projectsimgs/crescentVille.png";
import intercom6 from "../../assets/projectsimgs/crescentVille.png";

import cctv2 from "../../assets/projectsimgs/llcdorm.png";
import cctv3 from "../../assets/projectsimgs/llcdorm.png";
import cctv4 from "../../assets/projectsimgs/llcdorm.png";
import cctv5 from "../../assets/projectsimgs/llcdorm.png";
import cctv6 from "../../assets/projectsimgs/llcdorm.png";

import cablingImg2 from "../../assets/projectsimgs/llcAdmin.png";
import cablingImg3 from "../../assets/projectsimgs/llcAdmin.png";
import cablingImg4 from "../../assets/projectsimgs/llcAdmin.png";
import cablingImg5 from "../../assets/projectsimgs/llcAdmin.png";
import cablingImg6 from "../../assets/projectsimgs/llcAdmin.png";

import ViewWork from "./ViewWork";

const servicesData = [
  {
    title: "Intercom System",
    images: [intercomImg, intercom2, intercom3, intercom4, intercom5, intercom6],
    description: "Intercom installations for residential and commercial buildings.",
  },
  {
    title: "CCTV System",
    images: [cctvImg, cctv2, cctv3, cctv4, cctv5, cctv6],
    description: "Security surveillance solutions with monitoring setup.",
  },
  {
    title: "Structured Cabling – Data & Voice",
    images: [
      cablingImg,
      cablingImg2,
      cablingImg3,
      cablingImg4,
      cablingImg5,
      cablingImg6,
    ],
    description: "Organized network infrastructure for voice and data.",
  },
  {
    title: "CATV System",
    images: [
      catvImg,
      catvImg,
      catvImg,
      catvImg,
      catvImg,
      catvImg,
    ],
    description: "Cable TV distribution systems for large facilities.",
  },
  {
    title: "BGMPA / Paging System",
    images: [
      pagingImg,
      pagingImg,
      pagingImg,
      pagingImg,
      pagingImg,
      pagingImg,
    ],
    description: "Public address and paging system integration.",
  },
  {
    title: "Fire Alarm and Detection System",
    images: [
      fireImg,
      fireImg,
      fireImg,
      fireImg,
      fireImg,
      fireImg,
    ],
    description: "Fire safety detection and alarm solutions.",
  },
  {
    title: "Access Point / Wi-Fi",
    images: [
      wifiImg,
      wifiImg,
      wifiImg,
      wifiImg,
      wifiImg,
      wifiImg,
    ],
    description: "Wireless connectivity deployment and optimization.",
  },
];

function Services() {
  const [index, setIndex] = useState(2);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  const prev = () => setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  const next = () => setIndex((prev) => (prev + 1) % servicesData.length);

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

  useEffect(() => {
    if (!visible || paused || selectedService) return;
    const interval = setInterval(next, 2500);
    return () => clearInterval(interval);
  }, [visible, paused, selectedService]);

  return (
    <section ref={sectionRef} className="services">
      <div className={`services-inner ${visible ? "show" : ""}`}>
        <h2 className="services-title">
          Step Inside the Projects We've Created
        </h2>

        {!selectedService ? (
          <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <button className="services-nav left" onClick={prev}>‹</button>

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
                  ? offset === 0 ? 1.25 : 1 - Math.abs(offset) * 0.08
                  : 0.8;

                const zIndex = offset === 0 ? 20 : 10 - Math.abs(offset);
                const opacity = Math.abs(offset) > 2 ? 0 : 1;

                return (
                  <div
                    key={i}
                    className={`card ${offset === 0 ? "active" : ""}`}
                    onClick={() => {
                      if (offset === 0) setSelectedService(service);
                      else setIndex(i);
                    }}
                    style={{
                      backgroundImage: `url(${service.images[0]})`,
                      transform: `translateX(${xPos}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      pointerEvents: opacity === 0 ? "none" : "auto",
                      width: "300px",
                      height: "330px",
                      cursor: "pointer",
                    }}
                  >
                    <div className="card-overlay">
                      <p>{service.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="services-nav right" onClick={next}>›</button>
          </div>
        ) : (
          <ViewWork service={selectedService} onBack={() => setSelectedService(null)} />
        )}
      </div>
    </section>
  );
}

export default Services;