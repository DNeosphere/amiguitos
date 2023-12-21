import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import "./styles/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <FontAwesomeIcon className="navbar__logo__paw" icon={faPaw} />
          Amiguitos
        </Link>
      </div>

      <ul className="navbar__list">
        <Link to="/buscar">
          <li className="navbar__list-item">Buscar amiguitos</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
