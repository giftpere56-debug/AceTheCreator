
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>ACE THE CREATOR.</h2>
          <p>Fashion is an identity. Make yours count.</p>
        </div>

        <div className="footer-links">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>GET IN TOUCH</h3>
          <p>hello@acethecreator.com</p>
          <p>Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ace the Creator. All rights reserved.</p>
        <p>Designed with creativity.</p>
      </div>
    </footer>
  );
}

export default Footer;
