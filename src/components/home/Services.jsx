import { useState, useEffect, useRef } from "react";
import "./Services.css";

// main covers
import crescentVille from "../../assets/projectsimgs/crescentVille.png";
import llcdorm from "../../assets/projectsimgs/llcdorm.png";
import llcAdmin from "../../assets/projectsimgs/llcAdmin.png";
import llcNursing from "../../assets/projectsimgs/llcNursing.png";
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
import llcAdmin1 from "../../assets/projectsimgs/llcAdmin1.png";
import llcAdmin2 from "../../assets/projectsimgs/llcAdmin2.png";
import llcAdmin3 from "../../assets/projectsimgs/llcAdmin3.png";
import llcAdmin4 from "../../assets/projectsimgs/llcAdmin4.png";
import llcAdmin5 from "../../assets/projectsimgs/llcAdmin5.png";

// LLC Nursing gallery (formerly northwood)
import llcNursing1 from "../../assets/projectsimgs/llcNursing1.png";
import llcNursing2 from "../../assets/projectsimgs/llcNursing5.png";
import llcNursing3 from "../../assets/projectsimgs/llcNursing2.png";
import llcNursing4 from "../../assets/projectsimgs/llcNursing3.png";
import llcNursing5 from "../../assets/projectsimgs/llcNursing4.png";

// Paging gallery
import jglTower1 from "../../assets/projectsimgs/jglTower1.png";
import jglTower2 from "../../assets/projectsimgs/jglTower2.png";
import jglTower3 from "../../assets/projectsimgs/jglTower3.png";
import jglTower4 from "../../assets/projectsimgs/jglTower4.png";
import jglTower5 from "../../assets/projectsimgs/jglTower5.png";

// Fire alarm gallery
import unifiInstallation1 from "../../assets/projectsimgs/unifiInstallation1.png";
import unifiInstallation2 from "../../assets/projectsimgs/unifiInstallation3.png";
import unifiInstallation3 from "../../assets/projectsimgs/unifiInstallation2.png";
import unifiInstallation4 from "../../assets/projectsimgs/unifiInstallation4.png";
import unifiInstallation5 from "../../assets/projectsimgs/unifiInstallation1.png";

// Nito Tower gallery
import nitoTower1 from "../../assets/projectsimgs/1nitoTower1.png";
import nitoTower2 from "../../assets/projectsimgs/1nitoTower4.png";
import nitoTower3 from "../../assets/projectsimgs/1nitoTower2.png";
import nitoTower4 from "../../assets/projectsimgs/1nitoTower3.png";
import nitoTower5 from "../../assets/projectsimgs/1nitoTower1.png";

import ViewWork from "./ViewWork";

const servicesData = [
   {
    title: "Hotel One",
    cover: unifiInstallation,
    images: [
      unifiInstallation1,
      unifiInstallation2,
      unifiInstallation3,
      unifiInstallation4,
      unifiInstallation5,
    ],
    description:
      "Unifi Ubiquiti Booster Installation to enhance safety and high-security services.",
  },
  {
    title: "JGL Tower",
    cover: jglTower,
    images: [jglTower1, jglTower2, jglTower3, jglTower4, jglTower5],
    description:
      "Structured Cabling and Installation of Devices - CCTV Cameras, Smoke Detectors and other systems at JGL Tower, Bacolod City, Negros Occidental.",
  },
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
      "Completed Close-circuit television CCTV Camera Installation at Crescent VILLE Minglanilla. Installation Inclusions: 7 units ColorVu Outdoor Bullet Type Camera, 1 unit 8-channel Digital Video Recorder DVR, 1 unit 4-Terabyte Hard Disk Drive HDD, 1 21 inches LED Monitor, and 1 Uninterruptible Power Supply UPS.",
  },
  {
    title: "1Nito Tower",
    cover: nitoTower,
    images: [nitoTower1, nitoTower2, nitoTower3, nitoTower4, nitoTower5],
    description:
      "Structured Cabling and Installation of Wireless Access Points at 1Nito Tower, Archbishop Reyes Ave, Cebu City.",
  },
  {
    title: "Cebu International College Dormitory Building",
    cover: llcdorm,
    images: [llcdorm1, llcdorm2, llcdorm3, llcdorm4, llcdorm5],
    description:
      "Structured Cabling and Installation of Devices - CCTV Cameras, Smoke Detectors and other systems at the Dormitory Building, Lapu-Lapu City.",
  },
  {
    title: "Cebu International College Admin Building",
    cover: llcAdmin,
    images: [llcAdmin1, llcAdmin2, llcAdmin3, llcAdmin4, llcAdmin5],
    description:
      "Structured Cabling and Installation of Devices - CCTV Cameras, Smoke Detectors and other systems at the Admin Building, Lapu-Lapu City.",
  },
  {
    title: "Cebu International College Nursing Building",
    cover: llcNursing,
    images: [
      llcNursing1,
      llcNursing2,
      llcNursing3,
      llcNursing4,
      llcNursing5,
      
    ],
    description: "Structured Cabling and Installation of Devices - CCTV Cameras, Smoke Detectors and other systems at the Nursing Building, Lapu-Lapu City.",
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
          THE PROJECTS WE'VE CREATED
        </h2>

        {!selectedService ? (
          <div
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            

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

            
          </div>
        ) : (
        <div className="viewwork-overlay">
          <button
            className="close-viewwork"
            onClick={() => setSelectedService(null)}
          >
            ✕
          </button>

          <ViewWork
            service={selectedService}
            onBack={() => setSelectedService(null)}
          />
        </div>
      )}
      </div>
    </section>
  );
}

export default Services;