import { useState, useEffect, useRef } from "react";
import "./Services.css";

// main covers
import crescentVille from "../../assets/projectsimgs/crescentVille.png";
import llcdorm from "../../assets/projectsimgs/llcdorm.png";
import llcAdmin from "../../assets/projectsimgs/llcAdmin.png";
import northwood from "../../assets/projectsimgs/northwood.png";
import jglTower from "../../assets/projectsimgs/jglTower.png";
import unifiInstallation from "../../assets/projectsimgs/unifiInstallation.png";
import nitoTower from "../../assets/projectsimgs/1nitoTower.png";

import crescentVilles from "../../assets/projectsimgs/crescentVilles.png";
import crescentVille2 from "../../assets/projectsimgs/crescentVille4.png";
import crescentVille3 from "../../assets/projectsimgs/crescentVille1.png";
import crescentVille4 from "../../assets/projectsimgs/crescentVille2.png";
import crescentVille5 from "../../assets/projectsimgs/crescentVille3.png";
import crescentVille6 from "../../assets/projectsimgs/crescentVille5.png";

// Intercom gallery
import llcdorm1 from "../../assets/projectsimgs/llcdorm4.png";
import llcdorm2 from "../../assets/projectsimgs/llcdorm5.png";
import llcdorm3 from "../../assets/projectsimgs/llcdorm2.png";
import llcdorm4 from "../../assets/projectsimgs/llcdorm1.png";
import llcdorm5 from "../../assets/projectsimgs/llcdorm3.png";

// Cabling gallery
import llcAdmin1 from "../../assets/projectsimgs/llcAdmin.png";
import llcAdmin2 from "../../assets/projectsimgs/llcAdmin.png";
import llcAdmin3 from "../../assets/projectsimgs/llcAdmin.png";
import llcAdmin4 from "../../assets/projectsimgs/llcAdmin.png";
import llcAdmin5 from "../../assets/projectsimgs/llcAdmin.png";
import llcAdmin6 from "../../assets/projectsimgs/llcAdmin.png";

// CATV gallery
import northwood1 from "../../assets/projectsimgs/northwood.png";
import northwood2 from "../../assets/projectsimgs/northwood.png";
import northwood3 from "../../assets/projectsimgs/northwood.png";
import northwood4 from "../../assets/projectsimgs/northwood.png";
import northwood5 from "../../assets/projectsimgs/northwood.png";
import northwood6 from "../../assets/projectsimgs/northwood.png";

// Paging gallery
import jglTower1 from "../../assets/projectsimgs/jglTower.png";
import jglTower2 from "../../assets/projectsimgs/jglTower.png";
import jglTower3 from "../../assets/projectsimgs/jglTower.png";
import jglTower4 from "../../assets/projectsimgs/jglTower.png";
import jglTower5 from "../../assets/projectsimgs/jglTower.png";
import jglTower6 from "../../assets/projectsimgs/jglTower.png";

// Fire alarm gallery
import unifiInstallation1 from "../../assets/projectsimgs/unifiInstallation.png";
import unifiInstallation2 from "../../assets/projectsimgs/unifiInstallation.png";
import unifiInstallation3 from "../../assets/projectsimgs/unifiInstallation.png";
import unifiInstallation4 from "../../assets/projectsimgs/unifiInstallation.png";
import unifiInstallation5 from "../../assets/projectsimgs/unifiInstallation.png";
import unifiInstallation6 from "../../assets/projectsimgs/unifiInstallation.png";

// Nito Tower gallery
import nitoTower1 from "../../assets/projectsimgs/1nitoTower1.png";
import nitoTower2 from "../../assets/projectsimgs/1nitoTower.png";
import nitoTower3 from "../../assets/projectsimgs/1nitoTower.png";
import nitoTower4 from "../../assets/projectsimgs/1nitoTower.png";
import nitoTower5 from "../../assets/projectsimgs/1nitoTower.png";
import nitoTower6 from "../../assets/projectsimgs/1nitoTower.png";

import ViewWork from "./ViewWork";

const servicesData = [
  {
    title: "Crescent VILLE Minglanilla",
    cover: crescentVille,
    images: [
      crescentVilles,
      crescentVille2,
      crescentVille3,
      crescentVille4,
      crescentVille5,
      crescentVille6,
    ],
    description:
      "Installation Inclusions: 7 units ColorVu Outdoor Bullet Camera, 8-channel DVR, 4TB HDD, 21-inch Monitor, and UPS.",
  },
  {
    title: "Cebu International College Dormitory Building",
    cover: llcdorm,
    images: [llcdorm1, llcdorm2, llcdorm3, llcdorm4, llcdorm5],
    description: "Security surveillance solutions with monitoring setup.",
  },
  {
    title: "Structured Cabling – Data & Voice",
    cover: llcAdmin,
    images: [llcAdmin1, llcAdmin2, llcAdmin3, llcAdmin4, llcAdmin5, llcAdmin6],
    description: "Organized network infrastructure for voice and data.",
  },
  {
    title: "CATV System",
    cover: northwood,
    images: [northwood1, northwood2, northwood3, northwood4, northwood5, northwood6],
    description: "Cable TV distribution systems for large facilities.",
  },
  {
    title: "BGMPA / Paging System",
    cover: jglTower,
    images: [jglTower1, jglTower2, jglTower3, jglTower4, jglTower5, jglTower6],
    description: "Public address and paging system integration.",
  },
  {
    title: "Fire Alarm and Detection System",
    cover: unifiInstallation,
    images: [
      unifiInstallation1,
      unifiInstallation2,
      unifiInstallation3,
      unifiInstallation4,
      unifiInstallation5,
      unifiInstallation6,
    ],
    description: "Fire safety detection and alarm solutions.",
  },
  {
    title: "1Nito Tower",
    cover: nitoTower,
    images: [nitoTower1, nitoTower2, nitoTower3, nitoTower4, nitoTower5, nitoTower6],
    description: "Wireless connectivity deployment and optimization.",
  },
];

function Services() {
  const [index, setIndex] = useState(2);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  const prev = () =>
    setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % servicesData.length);

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
                if (offset > servicesData.length / 2)
                  offset -= servicesData.length;
                if (offset < -servicesData.length / 2)
                  offset += servicesData.length;

                const distance = 260;
                let xPos = visible ? offset * distance : 0;
                if (Math.abs(offset) === 2) xPos *= 0.85;
                if (Math.abs(offset) === 3) xPos *= 0.7;

                const scale =
                  visible
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
                    onClick={() => {
                      if (offset === 0) setSelectedService(service);
                      else setIndex(i);
                    }}
                    style={{
                      backgroundImage: `url(${service.cover})`,
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
          <ViewWork
            service={selectedService}
            onBack={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Services;