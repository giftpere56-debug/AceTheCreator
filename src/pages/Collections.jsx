
import ProductCard from '../components/ProductCard';
import './Collections.css';

const products = [
  {
    id: 1,
    name: 'Essential Denim Jacket',
    category: 'Outerwear',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800',
  },
  {
    id: 2,
    name: 'Classic Streetwear Tee',
    category: 'Streetwear',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
  },
  {
    id: 3,
    name: 'Urban Casual Wear',
    category: 'Casual',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
  },
  {
    id: 4,
    name: 'Oversized Denim Jacket',
    category: 'Outerwear',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800',
  },
  {
    id: 5,
    name: 'Classic Hoodie',
    category: 'Streetwear',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800',
  },
  {
    id: 6,
    name: 'Cargo Trousers',
    category: 'Bottoms',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800',
  },
  {
    id: 7,
    name: 'Premium Polo Shirt',
    category: 'Casual',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1625910513413-5fc45e5f2c9f?w=800',
  },
  {
    id: 8,
    name: 'Baggy Denim Jeans',
    category: 'Bottoms',
    price: 48000,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800',
  },
  {
    id: 9,
    name: 'Minimalist Sweatshirt',
    category: 'Streetwear',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800',
  },
  {
    id: 10,
    name: 'Classic Black Jacket',
    category: 'Outerwear',
    price: 60000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
  },
  {
    id: 11,
    name: 'Relaxed Fit Sweatpants',
    category: 'Bottoms',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800',
  },
  {
    id: 12,
    name: 'Graphic Statement Tee',
    category: 'Streetwear',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800',
  },
];

function Collections() {
  return (
    <main className="collections-page">
      <div className="container">
        <div className="collections-heading">
          <p>ACE THE CREATOR / SHOP</p>
          <h1>Our Collections</h1>
          <span>Explore pieces made for individuality and self-expression.</span>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Collections;
