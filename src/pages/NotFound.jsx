import { Link } from "react-router-dom";
import "./styles/notfound.scss";

function NotFound() {
  return (
    <div>
      <section className="page_404 content">
        <div className="container">
          <div className="four_zero_four_bg">
            <h1 className="text-center ">404</h1>
          </div>

          <div className="contant_box_404">
            <h3 className="h2">Parece que estás perdido</h3>

            <p>La página que estás buscando no está disponible</p>

            <Link to="/" className="link_404">
              Go Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
