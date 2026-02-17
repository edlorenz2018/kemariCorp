import { useState } from "react";
import "./ViewWork.css";

import img1 from "../../assets/feature1.png";
import img2 from "../../assets/feature2.png";
import img3 from "../../assets/feature3.png";
import img4 from "../../assets/feature2.png";

const images = [img1, img2, img3, img4];

const ViewWork = ({ onBack }) => {
  const [bgImage, setBgImage] = useState(images[0]);

  return (
    <div className="viewwork-overlay">
      <div
        className="viewwork-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* BACK ARROW BUTTON */}
        <button className="viewwork-back-arrow" onClick={onBack} />

        {/* LEFT TEXT */}
        <div className="viewwork-text">
          <h2>CCTV Installment</h2>
          <p>
            Explore our latest projects and discover how we bring innovative
            solutions to life with quality and dedication.
          </p>
        </div>

        {/* RIGHT THUMBNAILS */}
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
    </div>
  );
};

export default ViewWork;
