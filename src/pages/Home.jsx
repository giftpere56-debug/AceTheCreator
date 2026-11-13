
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">ACE THE CREATOR — EST. 2026</p>

          <h1>
            STYLE IS<br />
            YOUR <span>IDENTITY.</span>
          </h1>

          <p className="hero-description">
            Discover clothing that expresses individuality,
            confidence and timeless creativity.
          </p>

          <Link to="/collections" className="hero-button">
            EXPLORE COLLECTION
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
            alt="Fashion collection"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
