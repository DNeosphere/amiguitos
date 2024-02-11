import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import "./styles/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <FontAwesomeIcon className="navbar__logo__paw" icon={faBook} />
          Ubook
        </Link>
      </div>

      <ul className="navbar__list">
        <Link to="/search">
          <li className="navbar__list-item">Buscar libros</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
