import React, { useState } from "react";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    mainImage: null,
    packages: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMainImage = (e) => {
    if (e.target.files[0]) {
      setFormData({
        ...formData,
        mainImage: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  // ✅ Handle sub images: preserve previous, max 4 now
  const handlePackageImages = (e) => {
    const files = Array.from(e.target.files);
    const newUrls = files.map((file) => URL.createObjectURL(file));

    const combined = [...formData.packages, ...newUrls].slice(0, 4); // max 4

    setFormData({
      ...formData,
      packages: combined
    });
  };

  const addService = () => {
    if (!formData.name) return;

    setServices([
      ...services,
      {
        id: Date.now(),
        ...formData
      }
    ]);

    setFormData({
      name: "",
      description: "",
      mainImage: null,
      packages: []
    });

    setShowModal(false);
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  return (
    <div className="services-page">
      <div className="services-header">
        <h2>Services</h2>
        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Service
        </button>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            {service.mainImage && (
              <img
                src={service.mainImage}
                alt=""
                className="service-img"
              />
            )}

            <div className="service-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>

              <div className="package-preview">
                {service.packages.map((img, index) => (
                  <img key={index} src={img} alt="" />
                ))}
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteService(service.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Service</h3>

            <input
              type="text"
              name="name"
              placeholder="Service Name"
              value={formData.name}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Service Description"
              value={formData.description}
              onChange={handleChange}
            />

            <label>Main Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImage}
            />

            <label>Sub Images (Max 4)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePackageImages}
            />

            {/* ✅ Show number of selected sub images */}
            <p className="note">
              {formData.packages.length} / 4 sub images selected
            </p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="save-btn"
                onClick={addService}
              >
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;