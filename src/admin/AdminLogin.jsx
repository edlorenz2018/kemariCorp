import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "kemariadmin") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;