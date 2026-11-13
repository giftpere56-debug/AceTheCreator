
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <main className="cart-page">
      <h1>Your Shopping Bag</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your shopping bag is currently empty.</p>
          <Link to="/collections">EXPLORE COLLECTIONS</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₦{item.price.toLocaleString('en-NG')}</p>

                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="cart-total">
              <span>Subtotal</span>
              <strong>₦{cartTotal.toLocaleString('en-NG')}</strong>
            </div>

            <p>Delivery fees calculated separately.</p>

            <button disabled>
              CHECKOUT COMING SOON
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
