import React from "react";
import "./Messages.css";

function Messages() {
  const messages = [
    { id:1, from:"jane@email.com", content:"Hello, I would like to inquire about your services." },
    { id:2, from:"bob@email.com", content:"Can you provide a quote for SEO?" }
  ];

  return (
    <div className="messages-page">
      <h2>Contact Messages</h2>
      <div className="messages-grid">
        {messages.map(m => (
          <div key={m.id} className="message-card">
            <p><strong>From:</strong> {m.from}</p>
            <p>{m.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;