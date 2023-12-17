import { Link } from "react-router-dom";

import InfoCard from "../components/InfoCard";
import "./styles/home.scss";

function Home() {
  const steps = [
    {
      step: 1,
      what: "Busca el amiguito que más te guste",
    },
    {
      step: 2,
      what: "Confrima que su personalidad se adapte a tu estilo de vida",
    },
    {
      step: 3,
      what: "Llena los datos!",
    },
    {
      step: 4,
      what: "Ve a recogerlo",
    },
  ];
  return (
    <div className="home content">
      <section className="home__hero">
        <div className="home__title-wrapper">
          <h1 className="home__title">Ven y encuentra tu amiguito...</h1>
          <div className="home__dog-image">
            <img
              src="src/assets/home-dogs.png"
              alt="Varios perritos sin raza"
            />
          </div>
        </div>
        <Link to="/buscar">
          <button className="home__cta">Aquí</button>
        </Link>
      </section>
      <section className="home__steps">
        <h2>Cómo hacerlo?</h2>
        <div className="home__steps__container">
          {steps.map((step) => (
            <InfoCard props={step} key={step.step} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
