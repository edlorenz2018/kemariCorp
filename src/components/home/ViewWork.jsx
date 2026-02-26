import { useState, useEffect } from "react";
import "./ViewWork.css";

const ViewWork = ({ service, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const maxVisible = 4;

  const images = service.images;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const prevThumb = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const nextThumb = () => setStartIndex((prev) => Math.min(prev + 1, images.length - maxVisible));

  return (
    <div className="viewwork-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <button className="viewwork-back-arrow" onClick={onBack} />

      <div className="viewwork-text">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>

      {images.length > 1 && (
        <div className="viewwork-thumbnail-wrapper">
          <button className="viewwork-thumbnail-nav left" onClick={prevThumb} disabled={startIndex === 0}>‹</button>

          <div className="viewwork-thumbnail-carousel">
            {images.slice(startIndex, startIndex + maxVisible).map((img, idx) => (
              <div
                key={idx}
                className={`viewwork-thumbnail ${currentImageIndex === startIndex + idx ? "active" : ""}`}
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => setCurrentImageIndex(startIndex + idx)}
              />
            ))}
          </div>

          <button className="viewwork-thumbnail-nav right" onClick={nextThumb} disabled={startIndex >= images.length - maxVisible}>›</button>
        </div>
      )}
    </div>
  );
};

export default ViewWork;