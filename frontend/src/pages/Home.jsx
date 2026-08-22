import { useState } from "react";
import Navbar from "../components/Navbar";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="home-page">

        {/* HERO SECTION */}
        <section className="hero">
          <p className="hero-tag">
            ✈️ Your Smart Travel Companion
          </p>

          <h1>
            Explore the World
            <br />
            <span>with SmartTrip AI</span>
          </h1>

          <p className="hero-text">
            Plan smarter. Discover amazing places. Create unforgettable
            journeys with the power of AI.
          </p>

          {/* SEARCH BOX */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button type="button">
              🔍 Search
            </button>
          </div>

          <button className="explore-btn" type="button">
            Explore Destinations →
          </button>
        </section>

        {/* POPULAR DESTINATIONS */}
        <section className="destinations-section">

          <div className="section-heading">
            <p>DISCOVER INDIA</p>

            <h2>
              Popular Destinations
            </h2>

            <span>
              Explore beautiful places and create unforgettable memories.
            </span>
          </div>

          {/* DESTINATION CARDS */}
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
                <h3>🔍 No destinations found</h3>

                <p>
                  Try searching for another destination.
                </p>
              </div>
            )}
          </div>

        </section>

      </main>
    </>
  );
}

export default Home;