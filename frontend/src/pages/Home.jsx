import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />

      <section className="home-section">
        <h2>Welcome To Hotel Booking</h2>

        <p>
          Discover luxury, comfort, and unforgettable
          experiences at the best hotels across the country.
          Book your perfect stay with just a few clicks.
        </p>

        <Link to="/rooms">
          <button className="explore-btn">
            Explore Rooms
          </button>
        </Link>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🏨 Luxury Rooms</h3>
          <p>
            Enjoy premium rooms with modern facilities and
            stunning views.
          </p>
        </div>

        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>
            Get affordable rates and exclusive discounts on
            hotel bookings.
          </p>
        </div>

        <div className="feature-card">
          <h3>⭐ Top Rated Hotels</h3>
          <p>
            Choose from highly rated hotels trusted by
            thousands of guests.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;