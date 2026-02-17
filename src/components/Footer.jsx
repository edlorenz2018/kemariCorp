import "./Footer.css";
import logo from "../assets/kemarilogo.png"; // adjust path if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-left">
          <img src={logo} alt="Kemari Logo" className="footer-logo" />
          
          <span className="footer-copy">© 2025. All rights reserved</span>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <div className="footer-item tel">
            <span>☎ (032) 384-3864</span>
          </div>

          <div className="footer-item mobile">
            <span>📱 0917 - 138 - 3790</span>
          </div>

          <div className="footer-item email">
            <span>✉ kemari.hr@gmail.com</span>
          </div>

          <div className="footer-item facebook">
            <span>ⓕ Kemari Technology & Services</span>
          </div>

          <div className="footer-item location">
            <span>📍 3rd Floor Legazpi Commercial Bldg., Tunghaan Minglanilla Cebu</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
