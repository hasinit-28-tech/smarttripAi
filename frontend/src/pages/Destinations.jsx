import { useState } from "react";
import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Beaches",
    "Mountains",
    "Nature",
    "Heritage",
    "City",
    "Spiritual",
  ];

  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === selectedCategory
        );

  return (
    <>
      <Navbar />

      <main className="destinations-page">

        {/* PAGE HEADER */}
        <section className="destinations-header">
          <p>EXPLORE INDIA</p>

          <h1>Discover Your Next Destination</h1>

          <span>
            Explore beautiful places, unique cultures, and unforgettable
            experiences across India.
          </span>
        </section>

        {/* CATEGORY FILTER */}
        <section className="destination-filter">

          <h2>Find Your Perfect Place</h2>

          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All" && "✨ "}
                {category === "Beaches" && "🏖️ "}
                {category === "Mountains" && "🏔️ "}
                {category === "Nature" && "🌿 "}
                {category === "Heritage" && "🏛️ "}
                {category === "City" && "🏙️ "}
                {category === "Spiritual" && "🧘 "}

                {category}
              </button>
            ))}
          </div>

        </section>

        {/* DESTINATIONS */}
        <section className="all-destinations">

          <div className="destination-grid">

            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))
            ) : (
              <div className="no-results">
                <h3>No destinations found</h3>
              </div>
            )}

          </div>

        </section>

      </main>
    </>
  );
}

export default Destinations;