import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🏨 Hotel Booking
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/rooms">Rooms</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {!user ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link
                to="/signup"
                className="signup-btn"
              >
                Signup
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="user-name">
              👋 {user.name}
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;