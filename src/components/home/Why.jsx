import { useEffect, useRef } from "react";
import "./Why.css";

import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";

function Why() {
  const timelineRef = useRef([]);
  const featureRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe timeline items
    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Observe feature cards
    featureRef.current.forEach((el) => {
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
        Kemari is a systems integration company focused on building strong and
        dependable technology infrastructures for businesses and institutions.
        We work behind the scenes to ensure environments are secure, organized,
        and technically sound. 
        Our role is to provide structured, well-planned installations that
        support daily operations and long-term growth. Every project is
        approached with careful planning and technical discipline to ensure
        systems function smoothly within their intended environment. 
        At Kemari, we understand that modern operations rely on stable and
        properly implemented systems — and we are committed to delivering that
        foundation.
      </p>

      <h2 className="experience-title">Why Choose Us?</h2>
      <p className="experience-subtitle">
        {/*Trusted solutions, modern technology, and a team that delivers.*/}
      </p>

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
