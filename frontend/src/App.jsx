import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Favorites from "./pages/Favorites";
import Planner from "./pages/Planner";
import "./App.css";

function App() {
  const path = window.location.pathname;

  if (path.startsWith("/destination/")) {
    const destinationId = path.split("/")[2];

    return (
      <DestinationDetails destinationId={destinationId} />
    );
  }

  if (path === "/destinations") {
    return <Destinations />;
  }

  if (path === "/favorites") {
    return <Favorites />;
  }

  if (path === "/planner") {
    return <Planner />;
  }

  return <Home />;
}

export default App;