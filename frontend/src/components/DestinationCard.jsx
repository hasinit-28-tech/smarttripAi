import { useState } from "react";

function DestinationCard({ destination }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(
      localStorage.getItem("smarttrip-favorites") || "[]"
    );

    return favorites.includes(destination.id);
  });

  const toggleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("smarttrip-favorites") || "[]"
    );

    let updatedFavorites;

    if (favorites.includes(destination.id)) {
      updatedFavorites = favorites.filter(
        (id) => id !== destination.id
      );
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, destination.id];
      setIsFavorite(true);
    }

    localStorage.setItem(
      "smarttrip-favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const openDestination = () => {
    window.location.href = `/destination/${destination.id}`;
  };

  return (
    <div className="destination-card">

      <div className="destination-image-container">

        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
        />

        <button
          className="favorite-button"
          type="button"
          onClick={toggleFavorite}
          aria-label="Add to favorites"
        >
          {isFavorite ? "❤️" : "♡"}
        </button>

      </div>

      <div className="destination-content">

        <p className="destination-location">
          📍 {destination.state}
        </p>

        <h3>{destination.name}</h3>

        <p className="destination-description">
          {destination.description}
        </p>

        <div className="destination-footer">

          <span>
            🌤️ {destination.bestTime}
          </span>

          <button
            className="view-button"
            type="button"
            onClick={openDestination}
          >
            Explore →
          </button>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;