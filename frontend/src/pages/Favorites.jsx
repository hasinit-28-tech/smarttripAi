import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

function Favorites() {
  const favoriteIds = JSON.parse(
    localStorage.getItem("smarttrip-favorites") || "[]"
  );

  const favoriteDestinations = destinations.filter((destination) =>
    favoriteIds.includes(destination.id)
  );

  return (
    <>
      <Navbar />

      <main className="favorites-page">

        <section className="favorites-header">
          <p>YOUR TRAVEL COLLECTION</p>

          <h1>❤️ Your Favorite Destinations</h1>

          <span>
            Keep all the places you want to explore in one place.
          </span>
        </section>

        <section className="favorites-content">

          {favoriteDestinations.length > 0 ? (
            <div className="destination-grid">
              {favoriteDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          ) : (
            <div className="empty-favorites">
              <div className="empty-icon">💔</div>

              <h2>No favorites yet</h2>

              <p>
                Start exploring destinations and save the ones you love.
              </p>

              <a href="/destinations">
                Explore Destinations →
              </a>
            </div>
          )}

        </section>

      </main>
    </>
  );
}

export default Favorites;