
import { useCart } from '../context/CartContext';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>

        <span>
          ₦{product.price.toLocaleString('en-NG')}
        </span>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
