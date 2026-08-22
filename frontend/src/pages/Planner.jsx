import { useState } from "react";

function Planner() {
  const [prompt, setPrompt] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskAI = async () => {
    if (!prompt.trim()) {
      setError("Please enter your trip requirements first.");
      return;
    }

    setLoading(true);
    setError("");
    setItinerary("");

    try {
      const response = await fetch(
        "http://localhost:5678/webhook-test/smarttrip",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatInput: prompt.trim(),

            // Additional trip information
            // These can be used by n8n if required.
            destination: "Goa",
            days: 4,
            travelers: 2,
            budget: 15000,
            travelStyle: "Relaxed",
            activity: "Beaches",
            transport: "Taxi",
            localExperience: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `n8n request failed with status ${response.status}`
        );
      }

      const data = await response.json();

      console.log("SmartTrip n8n response:", data);

      /*
       * n8n can return the AI response in different structures.
       * We check the common possibilities.
       */

      let aiResponse = "";

      if (typeof data.response === "string") {
        aiResponse = data.response;
      } else if (typeof data.output === "string") {
        aiResponse = data.output;
      } else if (data.body?.response) {
        aiResponse = data.body.response;
      } else if (data.body?.output) {
        aiResponse = data.body.output;
      } else if (Array.isArray(data) && data.length > 0) {
        if (typeof data[0].response === "string") {
          aiResponse = data[0].response;
        } else if (typeof data[0].output === "string") {
          aiResponse = data[0].output;
        }
      }

      if (!aiResponse) {
        console.log("Unexpected n8n response:", data);
        throw new Error("AI response was empty.");
      }

      setItinerary(aiResponse);
    } catch (err) {
      console.error("SmartTrip AI Error:", err);

      setError(
        "Unable to connect to SmartTrip AI. Make sure n8n is running and the workflow is listening."
      );

      setItinerary("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="planner-page">

      {/* HERO SECTION */}
      <section className="planner-hero">
        <div className="planner-hero-content">

          <div className="planner-icon">
            🤖
          </div>

          <div>
            <p className="planner-label">
              SMARTTRIP AI
            </p>

            <h1>
              Plan With AI
            </h1>

            <p className="planner-description">
              Tell SmartTrip what kind of trip you want and let AI
              create a personalized itinerary for you.
            </p>
          </div>

        </div>
      </section>

      {/* AI INPUT SECTION */}
      <section className="planner-card">

        <textarea
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setError("");
          }}
          placeholder="Example: Plan a 4-day Goa trip for 2 people with a ₹15,000 budget. I love beaches, relaxed travel, local food and hidden places."
          className="planner-textarea"
          rows={6}
        />

        <button
          onClick={handleAskAI}
          disabled={loading}
          className="planner-button"
        >
          {loading ? (
            <>
              ⏳ Creating Your Trip...
            </>
          ) : (
            <>
              ✨ Ask SmartTrip AI
            </>
          )}
        </button>

        {error && (
          <div className="planner-error">
            ⚠️ {error}
          </div>
        )}

      </section>

      {/* AI RESULT */}
      <section className="itinerary-card">

        <div className="itinerary-title">
          <span>🤖</span>
          <h2>Your SmartTrip AI Itinerary</h2>
        </div>

        {loading && (
          <div className="loading-box">
            <div className="loading-spinner"></div>

            <p>
              SmartTrip AI is planning your perfect trip...
            </p>

            <small>
              Finding destinations, activities and experiences for you.
            </small>
          </div>
        )}

        {!loading && itinerary && (
          <div className="itinerary-result">
            {itinerary.split("\n").map((line, index) => {

              if (!line.trim()) {
                return (
                  <div
                    key={index}
                    className="itinerary-space"
                  />
                );
              }

              /*
               * Convert simple Markdown-like formatting
               * from the AI response into readable HTML.
               */

              let formattedLine = line
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/^###\s*(.*)/, "<h3>$1</h3>")
                .replace(/^##\s*(.*)/, "<h3>$1</h3>")
                .replace(/^#\s*(.*)/, "<h2>$1</h2>");

              if (line.trim().startsWith("- ")) {
                formattedLine = `• ${line.trim().substring(2)}`;
              }

              if (line.trim().startsWith("* ")) {
                formattedLine = `• ${line.trim().substring(2)}`;
              }

              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: formattedLine,
                  }}
                />
              );
            })}
          </div>
        )}

        {!loading && !itinerary && !error && (
          <div className="empty-itinerary">
            <div className="empty-icon">
              ✈️
            </div>

            <h3>
              Your personalized itinerary will appear here
            </h3>

            <p>
              Tell SmartTrip where you want to go and what kind
              of experience you are looking for.
            </p>
          </div>
        )}

      </section>

      {/* TRIP DETAILS */}
      <section className="trip-details">

        <div className="section-heading">
          <span>✈️</span>
          <h2>Trip Details</h2>
        </div>

        <div className="trip-detail-grid">

          <div className="detail-card">
            <span>📍</span>
            <div>
              <small>Destination</small>
              <strong>Goa</strong>
            </div>
          </div>

          <div className="detail-card">
            <span>📅</span>
            <div>
              <small>Duration</small>
              <strong>4 Days</strong>
            </div>
          </div>

          <div className="detail-card">
            <span>👥</span>
            <div>
              <small>Travelers</small>
              <strong>2 People</strong>
            </div>
          </div>

          <div className="detail-card">
            <span>💰</span>
            <div>
              <small>Budget</small>
              <strong>₹15,000</strong>
            </div>
          </div>

          <div className="detail-card">
            <span>🌴</span>
            <div>
              <small>Activity</small>
              <strong>Beaches</strong>
            </div>
          </div>

          <div className="detail-card">
            <span>🚕</span>
            <div>
              <small>Transport</small>
              <strong>Taxi</strong>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Planner;