import "./styles/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar__logo">Logo</div>
      <ul className="navbar__list">
        <li className="navbar__list-item">Sobre nosotros</li>
        <li className="navbar__list-item">Buscar amiguitos</li>
        <li className="navbar__list-item">Donar</li>
      </ul>
    </div>
  );
}

export default Navbar;
