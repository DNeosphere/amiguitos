import { Link } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";
import InfoCard from "../components/InfoCard";
import "./styles/home.scss";

function Home() {
  const { data: steps } = useGetData("steps");

  return (
    <div className="home content">
      <section className="home__hero">
        <div className="home__title-wrapper">
          <h1 className="home__title">Ven y encuentra el libro que deseas...</h1>
          <div className="home__home-image">
            <img
              src="src/assets/img/home.png"
              alt="Varios libros de todos los géneros"
            />
          </div>
        </div>
        <Link to="/search">
          <button className="home__cta">Aquí</button>
        </Link>
      </section>
      <section className="home__steps">
        <h2>Cómo hacerlo?</h2>
        <div className="home__steps__container">
          {steps?.map((step) => (
            <InfoCard props={step} key={step.step} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
