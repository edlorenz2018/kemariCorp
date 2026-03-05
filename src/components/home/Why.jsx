import { useEffect, useRef } from "react";
import "./Why.css";

import feature1 from "../../assets/featuredimgs/featured3.png"; 
import feature2 from "../../assets/featuredimgs/featured1.png"; 
import feature3 from "../../assets/featuredimgs/featured2.png"; 

function Why() {
  const timelineRef = useRef([]);
  const featureRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // stop observing after reveal
          }
        });
      },
      { threshold: 0 } // <-- start animation immediately even if a tiny part is visible
    );

    // Observe feature cards
    featureRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Observe timeline items
    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToTimelineRefs = (el) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  const addToFeatureRefs = (el) => {
    if (el && !featureRef.current.includes(el)) {
      featureRef.current.push(el);
    }
  };

  return (
    <section className="experience-section">
      {/* ================= Feature Images ================= */}
      <div className="feature-images">
        <div ref={addToFeatureRefs} className="feature-card">
          <img src={feature1} alt="Feature 1" />
        </div>

        <div ref={addToFeatureRefs} className="feature-card">
          <img src={feature2} alt="Feature 2" />
        </div>

        <div ref={addToFeatureRefs} className="feature-card">
          <img src={feature3} alt="Feature 3" />
        </div>
      </div>

      {/* ================= Paragraph Below Feature Images ================= */}
      <p className="feature-description">
        At Kemari, we specialize in creating reliable and efficient technology solutions that help organizations operate seamlessly. From advanced security setups to communication networks and structured cabling, our team ensures every installation is meticulously planned and executed. We aim to provide environments where systems are intuitive, stable, and supportive of day-to-day operations as well<br/> as future growth. With attention to detail and a commitment to quality, we deliver solutions that let your organization focus <br/>on what matters most, confident that your infrastructure is robust and dependable.
      </p>

      <h2 className="experience-title">WHY CHOOSE US?</h2>
      <p className="experience-subtitle"></p>

      {/* ================= Timeline ================= */}
      <div className="timeline-container">
        <div className="timeline-line"></div>

        <div ref={addToTimelineRefs} className="timeline-item left">
          <div className="timeline-box">
            <h3>Reliable & Professional Service</h3>
            <p>
              We deliver dependable solutions you can trust. From first contact
              to project completion, we focus on quality, clarity, and
              consistency.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        <div ref={addToTimelineRefs} className="timeline-item right">
          <div className="timeline-box">
            <h3>Skilled & Passionate Team</h3>
            <p>
              Our team is driven by problem-solving and innovation. We don’t just
              do the work, we understand your needs and build solutions that
              actually help your business.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        <div ref={addToTimelineRefs} className="timeline-item left">
          <div className="timeline-box">
            <h3>Tailored Solutions</h3>
            <p>
              No one-size-fits-all here. We customize our services based on your
              goals, timeline, and budget to ensure the best results.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>

        <div ref={addToTimelineRefs} className="timeline-item right">
          <div className="timeline-box">
            <h3>On-Time Delivery</h3>
            <p>
              We respect your time. Projects are planned carefully and delivered
              on schedule without sacrificing quality.
            </p>
          </div>
          <span className="timeline-dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Why;