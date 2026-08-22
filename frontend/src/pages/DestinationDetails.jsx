import { useState } from "react";
import Navbar from "../components/Navbar";
import destinations from "../data/destinations";

function DestinationDetails({ destinationId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const destination = destinations.find(
    (item) => item.id === Number(destinationId)
  );

  if (!destination) {
    return (
      <>
        <Navbar />

        <div className="not-found">
          <h1>Destination Not Found</h1>
          <p>Sorry, we couldn't find this destination.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="details-page">

        <section
          className="details-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${destination.image})`,
          }}
        >
          <div className="details-hero-content">
            <p>📍 {destination.state}</p>

            <h1>{destination.name}</h1>

            <span>{destination.category}</span>
          </div>
        </section>

        <section className="details-content">

          <div className="details-main">

            <h2>About {destination.name}</h2>

            <p className="details-description">
              {destination.description}
            </p>

            <div className="info-grid">

              <div className="info-box">
                <span>🌤️</span>
                <h3>Best Time</h3>
                <p>{destination.bestTime}</p>
              </div>

              <div className="info-box">
                <span>📍</span>
                <h3>Location</h3>
                <p>{destination.state}</p>
              </div>

              <div className="info-box">
                <span>🎯</span>
                <h3>Category</h3>
                <p>{destination.category}</p>
              </div>

            </div>

            <div className="things-section">

              <h2>Things To Explore</h2>

              <div className="things-grid">
                <div>🏖️ Local Attractions</div>
                <div>🍴 Local Food</div>
                <div>🏛️ Culture & Heritage</div>
                <div>📸 Scenic Places</div>
                <div>🛍️ Local Shopping</div>
                <div>🎉 Local Experiences</div>
              </div>

            </div>

          </div>

          <aside className="details-sidebar">

            <h3>Plan Your Visit</h3>

            <button
              className="favorite-large"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              {isFavorite
                ? "❤️ Saved to Favorites"
                : "♡ Add to Favorites"}
            </button>

            <button className="trip-large">
              ➕ Add to My Trip
            </button>

            <button className="map-large">
              🗺️ View on Map
            </button>

          </aside>

        </section>

      </main>
    </>
  );
}

export default DestinationDetails;