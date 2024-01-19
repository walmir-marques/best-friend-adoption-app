import "./Header.css";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <div>
          <img src={Logo} alt="My app Logo" width={200} />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link className="nav-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/adopt">
                Adopt
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
