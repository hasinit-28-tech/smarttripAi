function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌍 SmartTrip <span>AI</span>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/planner">Trip Planner</a>
        <a href="/favorites">Favorites</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}

export default Navbar;