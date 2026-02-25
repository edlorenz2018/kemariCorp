import { useState, useEffect } from "react";
import "./ViewWork.css";

import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature2.png";

const images = [img1, img2, img3, img4];

const ViewWork = ({ onBack }) => {
  const [bgImage, setBgImage] = useState(images[0]);

  // 🔒 lock scroll when opened
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="viewwork-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <button className="viewwork-back-arrow" onClick={onBack} />

      <div className="viewwork-text">
        <h2>CCTV Installment</h2>
        <p>
          Explore our latest projects and discover how we bring innovative
          solutions to life with quality and dedication.
        </p>
      </div>

      <div className="viewwork-thumbnail-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`viewwork-thumbnail ${bgImage === img ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setBgImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewWork;