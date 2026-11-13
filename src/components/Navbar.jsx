
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo">
          ACE THE CREATOR<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/cart" className="nav-shop">
          BAG ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
