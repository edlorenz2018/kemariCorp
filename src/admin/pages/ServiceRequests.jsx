import React, { useState } from "react";
import "./ServiceRequests.css";

function ServiceRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com", service: "Web Design", status: "new" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", service: "SEO", status: "contacted" },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests(requests.map(req => req.id === id ? {...req, status: newStatus} : req));
  };

  return (
    <div className="requests-page">
      <h2>Service Requests</h2>
      <div className="requests-grid">
        {requests.map(req => (
          <div key={req.id} className="request-card">
            <p><strong>Name:</strong> {req.name}</p>
            <p><strong>Email:</strong> {req.email}</p> {/* Added dummy email */}
            <p><strong>Service:</strong> {req.service}</p>

            <select value={req.status} onChange={e => updateStatus(req.id, e.target.value)}>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="quoted">Quoted</option>
            </select>

            <a
              href={`https://mail.google.com/mail/?view=cm&to=${req.email}`}
              target="_blank"
              rel="noreferrer"
            >
              Reply via Email
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceRequests;